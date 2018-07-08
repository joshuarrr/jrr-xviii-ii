import React, { Component } from 'react'
import { Link } from 'react-static'
import PropTypes from 'prop-types'
import { Logo } from './logo'
import '../styles/elements/logo.css'

export class PageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    return (
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
          { this.props.children }
        </main>
     </div>
    )
  }
}
