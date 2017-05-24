import React, { Component } from 'react'
import VideoList from './VideoPlayer'
import VideoPlayer from './VideoPlayer'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentVideo: null
		}
		this.changeVideo = this.changeVideo.bind(this)
	}
	changeVideo(video) {
		this.setState({currentVideo: video})
	}	

	// renderVideo() {
	// 	return (<VideoPlayer video={this.state.currentVideo} />)
	// }

	render() {
		return (
			<div>
				<VideoPlayer video={this.state.currentVideo} />
			</div>
		)
	}
}