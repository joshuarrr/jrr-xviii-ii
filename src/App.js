import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import { Logo } from './components/logo'

import './styles/app.css'

const App = () => (
  <Router>
    <div className="page-wrap">
      <header>
        <Logo />
        <nav>
          <Link exact to="/">home</Link>
          <Link to="/Work">work</Link>
          <Link to="/Contact">contact</Link>
        </nav>
      </header>
      <main className="content">
        <Routes />
      </main>
    </div>
  </Router>
)

export default hot(module)(App)
