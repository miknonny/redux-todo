import './main.css';

import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import { provider } from 'react-redux'
import App from './components/App.jsx'
import todoApp from './reducers/reducers.js'

let store = createStore(todoApp)

const main = () => {
  const app = document.createElement('div')
  document.body.appendChild(app)
  render(
    <provider store={store}>
      <App />
    </provider>,
    app
  )
}

main()
