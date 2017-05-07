import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './pages/_App'

import 'mainSCSS'

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('app'));
