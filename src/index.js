import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import VideoList from './components/VideoList'
import reducers from './reducers'
import './index.css'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
			<App />
			<VideoList />
		</div>
	</Provider>, 
  document.getElementById('app')
)