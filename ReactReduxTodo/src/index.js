var root = document.getElementById('root')
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'

import { createStore } from 'redux';
import allReducers from './reducers/allReducers'
const store = createStore(allReducers)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  root
)
