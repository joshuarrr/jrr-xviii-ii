import React, { Component } from 'react'
import { Link } from 'react-static'
import PropTypes from 'prop-types'
import { Logo } from './logo'
import { SocialLinks } from './social-links'
import Div100vh from 'react-div-100vh'
import '../styles/elements/logo.css'

// const innerHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// console.log('* height = ' + innerheight + '\n');

export class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render = () => {
    return (
      <Div100vh className="page-wrap">
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
          <SocialLinks />
        </footer>
      </Div100vh>
    )
  }
}
