import React, { Component } from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'
const defaultVideo = 'http://nba.cdn.turner.com/nba/big/video/2017/04/19/102ff3cf-1449-4eef-bbcf-1c7b330abb10.nba_1377861_640x360_600.mp4'
import ReactScrollableList from 'react-scrollable-list'

import Videos from '../../temp.json'
function VideoList(props) {
	let listItems = [] 
	Videos.map((video, index) => {
		listItems.push(
		{
			id: index, 
			content: <span onClick={()=>props.updatePlayerInfo(video["video:content_loc"])}>
									{video["video:title"]}
							 </span>
		})
	})

	return (
		<ReactScrollableList 
			listItems={listItems}
			heightOfItem={30}
			maxItemsToRender={40}	/>
	)
}

export default class VideoPlayer extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {source: defaultVideo}
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
  }
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }
  componentDidUpdate(prevProps, prevState) {
  	if (this.state.source !== prevState.source) {
      this.refs.player.load();
    }
  }
  updatePlayerInfo(vid) {
    this.setState({
      source: vid
    });
  }

	render() {	
	  return (
	  	<div className="container">	  		
	  		<div className='player'>
			    <Player autoPlay ref="player">
			      <source src={this.state.source} />
			    </Player> 
	  		</div>
	  		<div className="list">
		    	<VideoList updatePlayerInfo={this.updatePlayerInfo}/>		
	  		</div>	  		
	  	</div>
	  )	  
	}
}