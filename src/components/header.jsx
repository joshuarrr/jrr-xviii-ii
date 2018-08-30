import React, { Component } from 'react'
import { Link } from 'react-static'
import '../styles/elements/logo.css'

export class Header extends Component {
  render () {
    // console.log(this.props.pageNum);
    const toggleClass = this.props.pageNum == 1 ? '' : 'minimized'
    return (
      <header className="header">
        <Link
          to="/"
          tabIndex="-1"
          className={` site-logo ${toggleClass}`}
        >
          <span className="site-logo-link-text">
            Joshuar
          </span>
          <span className="site-logo-j">
            <svg viewBox="-3.5 -5 60 60">
              <path d="M25.7,20.09c0-1.74,0-2-1.21-2.77l-.4-.27a.62.62,0,0,1,0-.81,30.58,30.58,0,0,0,4.61-2.19c.23,0,.41.09.45.27C29.1,15.88,29,18,29,19.87V30.71a19.05,19.05,0,0,1-.94,7c-1.34,3.22-3.71,5.37-6.81,7.3a.76.76,0,0,1-.62-1,8.53,8.53,0,0,0,2.64-2c1.61-1.88,2.42-5.1,2.42-10.57ZM29.42,7.33a2.33,2.33,0,0,1-4.66,0A2.29,2.29,0,0,1,27.18,5,2.24,2.24,0,0,1,29.42,7.33Z" />
            </svg>
          </span>
        </Link>
        <nav>
          <Link activeClassName=" active" exact to="/profile">profile</Link>
          <Link activeClassName=" active" to="/projects">projects</Link>
          <Link activeClassName=" active" to="/process">process</Link>
        </nav>
      </header>
    )
  }
}
