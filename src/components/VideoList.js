import React, { Component } from 'react'
import Videos from '../../temp.json'
export default class VideoList extends Component {
	constructor(props) {
		super(props)
	}
	renderList() {
		return Videos.map((video, index) => <li key={index} onClick={()=>this.props.changeVideo(video["video:content_loc"])} >{video["video:title"]}</li>)
	}

	render() {
		return (
			<div>
				<ul>					
					{this.renderList()}				
				</ul>				
			</div>
		)
	}
}