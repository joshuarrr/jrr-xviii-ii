import React, { Component } from 'react'
import { Link } from 'react-static'
import PropTypes from 'prop-types'
import { Logo } from './logo'

import '../styles/elements/logo.css'

export class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render = () => {
    return (
      <div className="page-wrap">
        <header className="header">
          <Logo />
          <nav>
            <Link activeClassName=" active" exact to="/profile">profile</Link>
            <Link activeClassName=" active" to="/projects">projects</Link>
            <Link activeClassName=" active" to="/process">process</Link>
          </nav>
        </header>
        <main className="content">
          { this.props.children }
        </main>
        <footer className="footer">
          social links
        </footer>
      </div>
    )
  }
}
