import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Store from './redux/Store'
import Apollo from './graphql/Apollo'

ReactDOM.render(
  <React.StrictMode>
    <Apollo>
      <Store>
        <Router>
          <App />
        </Router>
      </Store>
    </Apollo>
  </React.StrictMode>,
  document.getElementById('root')
)
