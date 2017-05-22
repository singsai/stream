var express = require('express')
var path = require('path')
var request = require('request')
var fs = require('fs')
var app = express()
var bodyParser = require('body-parser')
var XmlStream = require('xml-stream')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, '../dist')));

// Load a video and stream it in the browser
app.get('/video',function(req,res){
  var videoUrl = req.headers.videourl
  request(videoUrl)
  .pipe(res) 
})

function jsFriendlyJSONStringify(s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029')
}

app.get('/loadJSON', function(req, res) {
  var resultsArray = []

  // Load local file as file stream
  // let fileStream=fs.createReadStream('sitemap_videos_0001.xml')

  // Load remote XML file as file stream
  var fileStream = request('http://www.nba.com/sitemap_videos_0001.xml')

  // Pass XML file into XmlStream for parsing
  var xmlStream = new XmlStream(fileStream) 

  // Parse each node (aka item)
  xmlStream.on('endElement: video:video', function(item) {
    resultsArray.push(item) // Add each node to resultsArray
  })

  xmlStream.on('end', function() {
    // Stringify array to valid JSON
    var jsonResults = jsFriendlyJSONStringify(resultsArray)

    // Write JSON objects to file
    var tempWrite = fs.createWriteStream('temp.json')
    tempWrite.write(jsonResults)
    tempWrite.end()
    tempWrite.on('finish',function(response) {
      res.send(jsonResults)
    })
    tempWrite.on('error',function(error) {
      console.log(error)
    })    
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000')
})