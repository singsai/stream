import React, { Component } from 'react'
import VideoList from './VideoPlayer'
import VideoPlayer from './VideoPlayer'
import Background from '../images/background.jpg';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
var sectionStyle = {	
  // backgroundImage: `url(${Background})`
};

function Header() {
	return (
		<div>
			<div className="Header-titles">
			  <h1 className="Header-title" onClick={()=>window.location='https://singsai.github.io/stream/dist/'}>Stream</h1>
			  <h2 className="Header-subTitle">The latest highlights from the NBA</h2>
			</div>
			<div className="Header-actions">
			</div>			
		</div>
	)
}

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentVideo: null
		}
	}

	render() {
		return (
			<div>				
				<Header />
				<VideoPlayer video={this.state.currentVideo} />
			</div>
		)
	}
}