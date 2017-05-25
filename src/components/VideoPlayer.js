import React, { Component } from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'
const defaultVideo = 'http://nba.cdn.turner.com/nba/big/video/2017/04/19/102ff3cf-1449-4eef-bbcf-1c7b330abb10.nba_1377861_640x360_600.mp4'

import Videos from '../../temp.json'
function VideoList(props) {

	// renderList() {
	// 	return Videos.map((video, index) => <li key={index} onClick={()=>props.changeVideo(video["video:content_loc"])} >{video["video:title"]}</li>)
	// }

	return (
		<div>
			<ul>					
				{Videos.map((video, index) => <li key={index} onClick={()=>props.updatePlayerInfo(video["video:content_loc"])} >{video["video:title"]}</li>)}				
			</ul>				
		</div>
	)
}

export default class VideoPlayer extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {source: defaultVideo}
		// this.renderVideo = this.renderVideo.bind(this)
		// this.handleStateChange = this.handleStateChange.bind(this)
		this.updatePlayerInfo = this.updatePlayerInfo.bind(this)
	}

	renderVideo() {
	  return (
	  	<div>	  		
		    <Player ref="player">
		      <source src={this.state.source} />
		    </Player>  		
	  	</div>
	  )	  
	}
  componentDidMount() {
    // subscribe state change    
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));    	
  	// this.setState({source: this.props.video})
  }
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }
  componentDidUpdate(prevProps, prevState) {
  	// console.log('prevProps', prevProps, '??', 'prevState', prevState)
  	if (this.state.source !== prevState.source) {
      this.refs.player.load();
    }
  }
  updatePlayerInfo(vid) {
    this.setState({
      source: vid
    });
  }

	// renderVideo() {
	//   return (
	//   	<div>	  		
	// 	    <Player>
	// 	      <source src={this.props.video} />
	// 	    </Player>  		
	//   	</div>
	//   )	  
	// }

	// componentDidMount() {
	// 	console.log('hello')
	// 	// if (this.state.prevVideo !== this.props.video) {

	// 	// 		console.log(this.props.video)
	// 	// 		this.setState({prevVideo: this.props.video})
	// 	// 		// return <div>{this.props.video}</div>
	// 	// 		// return <div>{this.renderVideo(this.props.video)}</div>

	// 	// 	} 		
	// }

	// renderVideo(vid) {
	//   return (
	//   	<div>	  		
	// 	    <Player>
	// 	      <source src={vid} />
	// 	    </Player>  		
	//   	</div>
	//   )	  
	// }

	render() {	
	  return (
	  	<div className="container">	  		
	  		<div className='player'>
			    <Player ref="player">
			      <source src={this.state.source} />
			    </Player> 
	  		</div>
	  		<div className="list">
		    	<VideoList updatePlayerInfo={this.updatePlayerInfo} />	  			
	  		</div>	  		
	  	</div>
	  )	  

		// console.log('video', this.props.video)
		// return this.renderVideo()
		// else {
		// 	return this.renderVideo(this.state.prevVideo)
		// }
	}
}