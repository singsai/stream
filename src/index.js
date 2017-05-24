import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
// import VideoList from './components/VideoList'
// import VideoList from './components/VideoPlayer'
import VideoPlayer from './components/VideoPlayer'
// import PlayerControlExample from './components/PlayerControlExample'
import reducers from './reducers'
import './index.css'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
			<App />
		</div>
	</Provider>, 
  document.getElementById('app')
)