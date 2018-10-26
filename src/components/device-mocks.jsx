import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'
import '../styles/vendor/marvel-devices.css'

export class DeviceMock extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    device: PropTypes.string,
    scrollable: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
  }

  render () {
    const mockContent = this.props.children
    const device = !this.props.device ? 'defaultDevice' : this.props.device
    const scrollable = this.props.scrollable && 'scrollable'
    const size = !this.props.size ? 'small' : this.props.size
    const color = !this.props.color ? 'black' : this.props.color
    /*
      md-iPhone5
      iPhoneX
    */
    if (device === 'md-iPhone5') {
      console.log('true')
      return (
        <div
          className={
            `device md-iphone-5 md-black-device
             ${scrollable}
             ${size}
             ${color}`
          }
          key={`device-${device}`}
        >
          <div className="md-body">
            <div className="md-buttons" />
            <div className="md-front-camera" />
            <div className="md-top-speaker" />
            <div className="md-screen" >
              { mockContent }
            </div>
            <button className="md-home-button" />
          </div>
        </div>
      )
    } else
    if (device === 'iPhoneX') {
      console.log('true')
      return (
        <div
          className={
            `marvel-device iphone-x
             ${scrollable}
             ${size}
             ${color}`
          }
          key={`device-${device}`}
        >
          <div className="notch">
            <div className="camera" />
            <div className="speaker" />
          </div>
          <div className="top-bar" />
          <div className="sleep" />
          <div className="bottom-bar" />
          <div className="volume" />
          <div className="inner-shadow" />
          <div className="screen">
            { mockContent }
          </div>
        </div>
      )
    }
    return (device)
  }
}
