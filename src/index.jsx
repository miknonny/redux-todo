import './main.css';

import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

const main = () => {
  const app = document.createElement('div')
  document.body.appendChild(app)
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    app
  )
}

main()
