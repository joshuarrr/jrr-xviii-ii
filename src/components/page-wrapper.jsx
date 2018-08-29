import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Div100vh from 'react-div-100vh'
import { RouteData, Link } from 'react-static'
import { Animate } from 'react-move'
import { SocialLinks } from './social-links'
import { Logo } from '../components/logo'
import '../styles/elements/logo.css'
import '../styles/components/header.css'


export class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render = () =>
    (<RouteData render={({ pageNumber }) => (
      <Div100vh className="page-wrap" minHeight="100rvh">
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
              <Logo pageNum={`${pageNumber}`} />
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
        <ul className="css-console">
          <li>pageNumber: { pageNumber }</li>
        </ul>
      </Div100vh>
    )} />
    )
}
