import React, { Component } from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'
const defaultVideo = 'http://nba.cdn.turner.com/nba/big/video/2017/04/19/102ff3cf-1449-4eef-bbcf-1c7b330abb10.nba_1377861_640x360_600.mp4'
import ReactScrollableList from 'react-scrollable-list'
import Background from '../images/background.jpg'
import Img from 'react-image'
import Videos from '../../temp.json'
function VideoList(props) {
	let listItems = [] 
	Videos.map((video, index) => {
		listItems.unshift(
		{
			id: index, 
			content: <div onClick={()=>props.updatePlayerInfo(video["video:content_loc"])}>
									<span className='caption'>
										<Img className='thumbnail' src={[video["video:thumbnail_loc"], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCXPKRQr7z_6h9U-21ZJ2D0IjqdNpJwhXmhq04aDdqvOaLlRh']} />
										<span className='video-title'>{video["video:title"]}</span>										
									</span>
							 </div>
		})
	})

	return (
		<ReactScrollableList className='list-inline'
			listItems={listItems}
			heightOfItem={30}
			maxItemsToRender={40}	/>
	)
}

export default class VideoPlayer extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {source: null}
		this.updatePlayerInfo = this.updatePlayerInfo.bind(this)
	}

	renderVideo() {
	  return (
	  	<div className='player'>	  		
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
			    <Player autoPlay ref="player" poster={Background}>
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