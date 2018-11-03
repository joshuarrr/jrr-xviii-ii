import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'
// import '../styles/vendor/marvel-devices.css'

export class DeviceMock extends Component {
  constructor () {
    super()
    this.scrollContainer = React.createRef()
    this.innerScrollContainer = React.createRef()
    this.device = null
    this.setDeviceRef = element => {
      this.device = element
    }
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    width: PropTypes.string,
    device: PropTypes.string,
    scrollable: PropTypes.bool,
    color: PropTypes.string,
    buttons: PropTypes.bool,
    bands: PropTypes.bool,
    notch: PropTypes.bool,
    shadow: PropTypes.bool,
  }

  render () {
    // debugger;
    // Content
    const mockContent = this.props.children
    // Device (iPhoneX, iPhone5)
    const device = !this.props.device ? 'defaultDevice' : this.props.device
    // Width - defaults to ''
    // const width = Math.round(this.props.width)
    // Scrollable - defaults to true
    // console.log(`width: ${this.props.width}`)
    // Width - defaults to ''
    // const height = Math.round(this.props.width  * 2.16)
    const deviceWidth = this.props.width
    console.log(`${this.props.children.props.name} - this.props.width: ${deviceWidth}`)

    const scrollable = this.props.scrollable && 'scrollable'
    // Size - defaults to medium
    const size = !this.props.size ? 'small' : this.props.size
    // Color - defaults to black
    const color = !this.props.color ? 'black' : this.props.color
    // Buttons - defaults to false
    const buttons = this.props.buttons
    // Glare - defaults to false
    const glare = this.props.glare
    // Bands - defaults to false
    const bands = this.props.bands
    // Notch - defaults to false
    const notch = this.props.notch
    // Shadow - defaults to false
    const shadow = this.props.shadow

    if (device === 'md-iPhone5') {
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
      return (
        <div
          className={`device iphone-x ${size} ${color}`}
          key={`device-${device}`}
          ref={this.setDeviceRef}
        >
          { bands && <div className="top-band" /> }
          { buttons && <div className="sleep" /> }
          { bands && <div className="bottom-bar" /> }
          { buttons && <div className="volume" /> }
          { glare && <div className="glare" /> }
          { notch &&
            <div className="notch">
              <div className="camera" />
              <div className="speaker" />
            </div>
          }
          <div
            className={`screen scroll-container ${scrollable}`}
            ref={this.scrollContainer}
            style={{ width: Math.round(deviceWidth), height: Math.round(deviceWidth * 2.16) }}
          >
            <div
              ref={this.innerScrollContainer}
              className="inner-container"
            >
              <div className="element">
                { mockContent }
              </div>
            </div>
          </div>
          {shadow === true && <div className="shadow" />}
        </div>
      )
    }
    return (device)
  }
}

DeviceMock.defaultProps = {
  size: 'medium',
  device: 'iPhoneX',
  scrollable: true,
  color: 'black',
  buttons: true,
  bands: false,
  notch: false,
  shadow: true,
}
