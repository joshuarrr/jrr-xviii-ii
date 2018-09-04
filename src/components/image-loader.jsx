import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

export class ImageLoader extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(){
    super();
    // this.state = {
    //   loaded: false
    // };
  }

  componentDidMount() {
    // this.gimmeFrame = requestAnimationFrame(
    //   () => {
    //     this.setState({loaded: true})
    //   }
    // )
  }

  componentWillUnmount() {
    // if (this.gimmeFrame) {
    //   cancelAnimationFrame(this.gimmeFrame);
    // }
  }

  render () {
    return (
      <div className="image-holder">
        {!this.props.loaded && <Loader
          type="TailSpin"
          color="#00BFFF"
          height="30"
          width="30"
          className="poop"
        />}
        { this.props.children }
      </div>
    )
  }
}
