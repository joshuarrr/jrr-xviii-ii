import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'
// import '../styles/vendor/marvel-devices.css'

export class DeviceMock extends Component {
  constructor () {
    super()
    // this.device = React.createRef()
    this.scrollContainer = React.createRef()
    this.innerScrollContainer = React.createRef()
    this.device = null
    this.setDeviceRef = element => {
      this.device = element
    }

    this.resizer = () => {
      const device = this.device
      device.style.width = `${device.clientWidth}px`
      device.style.height = `${device.clientWidth * 2.16}px`
      console.log('* device: ', device)
      console.log('* device W: ', device.clientWidth)
      console.log('* device H: ', device.clientWidth * 2.16)

      const scrollNode = this.scrollContainer.current
      scrollNode.style.width = `${device.clientWidth - 10}px`
      scrollNode.style.height = `${device.clientWidth * 2.16}px`
      console.log('scrollNode: ', scrollNode)

      const innerScrollNode = this.innerScrollContainer.current
      console.log('innerScrollNode: ', innerScrollNode)

      const scrollbarWidth = `${innerScrollNode.offsetWidth - innerScrollNode.clientWidth}px`
      console.log('* scrollbarWidth: ' + scrollbarWidth)

      innerScrollNode.style.right = `${-(innerScrollNode.offsetWidth - innerScrollNode.clientWidth + 1)}px`
      // innerScrollNode.style.width = `${device.clientWidth - 10}px`

      console.log("* resized")
    }
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    device: PropTypes.string,
    scrollable: PropTypes.bool,
    color: PropTypes.string,
    buttons: PropTypes.bool,
    bands: PropTypes.bool,
    notch: PropTypes.bool,
    shadow: PropTypes.bool,
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizer)
    this.resizer()
  }

  // componentDidUpdate () {
  //   this.resizer()
  // }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizer)
  }

  render () {
    // Content
    const mockContent = this.props.children
    // Device (iPhoneX, iPhone5)
    const device = !this.props.device ? 'defaultDevice' : this.props.device
    // Scrollable - defaults to true
    const scrollable = this.props.scrollable && 'scrollable'
    // Size - defaults to medium
    const size = !this.props.size ? 'small' : this.props.size
    // Color - defaults to black
    const color = !this.props.color ? 'black' : this.props.color
    // console.log(color)
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
    // console.log(shadow)
    /*
      md-iPhone5
      iPhoneX
    */
    if (device === 'md-iPhone5') {
      // console.log('device: ' + device)
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
