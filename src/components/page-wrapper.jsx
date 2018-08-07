import React, { Component } from 'react'
import { Link } from 'react-static'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'
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
            <Link activeClassName=" active" exact to="/">home</Link>
            <Link activeClassName=" active" to="/Work">work</Link>
            <Link activeClassName=" active" to="/Contact">contact</Link>
          </nav>
        </header>
        <main className="content">
          { this.props.children }
        </main>
     </div>
    )
  }
}
