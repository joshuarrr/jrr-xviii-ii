import React, { Component } from 'react'
import { Link } from 'react-static'
import { Animate } from 'react-move'
import '../styles/elements/logo.css'
import { easeQuadInOut } from 'd3-ease';


export class Header extends Component {
  constructor() {
    super();
    this.state = {
      pageNum: '',
      arrowPos: -10 + '%'
    }
    this.profileLink = React.createRef();
    this.projectsLink = React.createRef();
    this.profileLink = React.createRef();
  }

  arrowMover = (toPage) => {
    console.log("current page: " + this.props.pageNum);

    if (toPage == 3) {
      this.setState({ arrowPos: 25 + '%' });
      // console.log("to page: " + toPage, "arrowPos: " + this.state.arrowPos);
    } else if (toPage == 4) {
      this.setState({ arrowPos: 50 + '%' });
      // console.log("to page: " + toPage, "arrowPos: " + this.state.arrowPos);
    } else if (toPage == 5) {
      this.setState({ arrowPos: 75 + '%' });
      // console.log("to page: " + toPage, "arrowPos: " + this.state.arrowPos);
    } else {
       this.setState({ arrowPos: -10 + '%' });
       console.log("hrm");
    }
  }

  arrowFinder = () => {
    console.log("current page: " + this.props.pageNum);

    if (this.props.pageNum == 3) {
      this.setState({ arrowPos: 25 + '%' });
      // console.log("to page: " + toPage, "arrowPos: " + this.state.arrowPos);
    } else if (this.props.pageNum == 4) {
      this.setState({ arrowPos: 50 + '%' });
      // console.log("to page: " + toPage, "arrowPos: " + this.state.arrowPos);
    } else if (this.props.pageNum == 5) {
      this.setState({ arrowPos: 75 + '%' });
      // console.log("to page: " + toPage, "arrowPos: " + this.state.arrowPos);
    } else {
      this.setState({ arrowPos: -10 + '%' });
    }
  }

  componentDidMount() {
    this.arrowFinder();
  }

  render = () => {
    // console.log( "pageNum = "+ this.props.pageNum);
    const toggleClass = this.props.pageNum == 1 ? '' : 'minimized';
    // console.log(this.arrowMover());
    // console.log(this.state.arrowPos)
    return (
      <header className="header">
        <Link
          to="/"
          tabIndex="-1"
          className={` site-logo ${toggleClass}`}
          onClick={() => {this.arrowMover()}}
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
          <Link activeClassName="active" ref={this.profileLink} to="/profile" onClick={() => {this.arrowMover(3)}}>profile</Link>
          <Link activeClassName="active" ref={this.projectsLink} to="/projects" onClick={() => {this.arrowMover(4)}}>projects</Link>
          <Link activeClassName="active" ref={this.processLink} to="/process" onClick={() => {this.arrowMover(5)}}>process</Link>
          <Animate
            show
            start={{
              left: [-10 + '%'],
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
              <div className="nav-arrow" style={{ left: left, }} />
            )}
          </Animate>
        </nav>
      </header>
    )
  }
}
