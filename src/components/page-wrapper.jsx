import React, { Component } from 'react'
import { Link } from 'react-static'
import PropTypes from 'prop-types'
import { Logo } from './logo'
import { SocialLinks } from './social-links'
import '../styles/elements/logo.css'


const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// console.log('* height = ' + height + '\n');

export class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render = () => {
    return (
      <div className="page-wrap">
      <div className="tester">test</div>
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
      </div>
    )
  }
}
