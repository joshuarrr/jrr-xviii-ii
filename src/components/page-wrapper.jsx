import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import { SocialLinks } from './social-links'
import { Animate } from 'react-move'
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
        <Animate
          show

          start={{ // the starting state (required)
            opacity: [0],
          }}

          enter={{ // how to transform state on enter (optional)
            opacity: [1],
            timing: { duration: 2000, delay: 1000 },
          }}
        >
          {({ opacity }) => (
            <header
              className="header"
              style={{
                opacity,
              }}>
              <nav>
                <Link activeClassName=" active" exact to="/profile">profile</Link>
                <Link activeClassName=" active" to="/projects">projects</Link>
                <Link activeClassName=" active" to="/process">process</Link>
              </nav>
            </header>
          )}
        </Animate>
        <main className="content">
          { this.props.children }
        </main>
        <Animate
          show

          start={{ // the starting state (required)
            opacity: [0],
          }}

          enter={{ // how to transform state on enter (optional)
            opacity: [1],
            timing: { duration: 2000, delay: 1000 },
          }}
        >
          {({ opacity }) => (
            <footer
              className="footer"
              style={{
                opacity,
            }}>
              <SocialLinks />
            </footer>
          )}
        </Animate>
      </Div100vh>
    )
  }
}
