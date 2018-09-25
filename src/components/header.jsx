import React, { Component } from 'react'
import { Link } from 'react-static'
import { Animate } from 'react-move'
import { easeQuadInOut } from 'd3-ease'
import MediaQuery from 'react-responsive'
import '../styles/components/header.css'
import '../styles/elements/logo.css'


export class Header extends Component {
  constructor () {
    super()
    this.state = {
      arrowPos: '-25px',
    }
    this.profileLink = React.createRef()
    this.projectsLink = React.createRef()
    this.processLink = React.createRef()
  }

  arrowMover = page => {
    // console.log("current page: " + this.props.pageNum)

    if (page == 3) {
      const link = this.profileLink.current
      const width = link.getBoundingClientRect().width
      const left = link.getBoundingClientRect().left
      // console.log("to page: " + page, "arrowPos: " + this.state.arrowPos)
      // console.log(link, width, left)
      this.setState({ arrowPos: (width / 2 ) + left + 'px' })
    } else if (page == 4) {
      const link = this.projectsLink.current
      const width = link.getBoundingClientRect().width
      const left = link.getBoundingClientRect().left
      this.setState({ arrowPos: (width / 2 ) + left + 'px' })
    } else if (page == 5) {
      const link = this.processLink.current
      const width = link.getBoundingClientRect().width
      const left = link.getBoundingClientRect().left
      this.setState({ arrowPos: (width / 2 ) + left + 'px' })
    } else {
      this.setState({ arrowPos: '-25px' })
    }
  }

  repositionArrow = () => {
    this.arrowMover(this.props.pageNum)
  }

  componentDidMount = () => {
    this.arrowMover(this.props.pageNum)
    window.addEventListener('resize', this.repositionArrow)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.repositionArrow)
  }

  render = () => {
    // console.log( "pageNum = "+ this.props.pageNum)
    const toggleClass = this.props.pageNum == 1 ? '' : 'minimized'

    return (
      <header className="header">
        <Link
          to="/"
          tabIndex="-1"
          className={` site-logo ${toggleClass}`}
          onClick={() => { this.arrowMover() }}
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
        <MediaQuery minWidth={1280}>
          <span className="name-wrapper">
            <h1 className="site-title">Joshua Richey</h1>
            <h2 className="site-subtitle">Product Designer</h2>
          </span>
        </MediaQuery>
        <nav>
          <ul className="nav-links">
            <li className="nav-link" ref={this.profileLink}>
              <Link
                to="/profile"
                activeClassName="active"
                onClick={() => { this.arrowMover(3) }}
              >profile
              </Link>
            </li>
            <li className="nav-link" ref={this.projectsLink}>
              <Link
                to="/projects"
                activeClassName="active"
                onClick={() => { this.arrowMover(4) }}
              >projects
              </Link>
            </li>
            <li className="nav-link" ref={this.processLink}>
              <Link
                to="/process"
                activeClassName="active"
                onClick={() => {this.arrowMover(5)}}
              >process
              </Link>
            </li>
          </ul>
          <Animate
            show
            start={{
              left: ['-10%'],
            }}
            enter={{
              left: [this.state.arrowPos],
              timing: { duration: 500, delay: 0, ease: easeQuadInOut },
            }}
            update={{
              left: [this.state.arrowPos],
              timing: { duration: 500, delay: 0, ease: easeQuadInOut },
            }}
          >
            {({ left }) => (
              <div className="nav-arrow" style={{ left }} />
            )}
          </Animate>
        </nav>
      </header>
    )
  }
}
