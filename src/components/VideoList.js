import React, { Component } from 'react'
import Videos from '../../temp.json'
export default class VideoList extends Component {

	renderList() {
		return Videos.map((video, index) => <li key={index}>{video["video:title"]}</li>)
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