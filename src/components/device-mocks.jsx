import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'
// import '../styles/vendor/marvel-devices.css'

export class DeviceMock extends Component {
  constructor () {
    super()
    this.device = React.createRef()
    this.scrollContainer = React.createRef()
    this.innerScrollContainer = React.createRef()
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


  resizer = () => {
    const deviceNode = this.device.current
    deviceNode.style.width = `${deviceNode.clientWidth}px`
    deviceNode.style.height = `${deviceNode.clientWidth * 2.16}px`
    console.log('* deviceNode: ', deviceNode)
    console.log('* deviceNode W: ', deviceNode.clientWidth)
    console.log('* deviceNode H: ', deviceNode.clientWidth * 2.16)


    const scrollNode = this.scrollContainer.current
    scrollNode.style.width = `${deviceNode.clientWidth - 10}px`
    scrollNode.style.height = `${deviceNode.clientWidth * 2.16}px`
    console.log('scrollNode: ', scrollNode)

    const innerScrollNode = this.innerScrollContainer.current
    console.log('innerScrollNode: ', innerScrollNode)

    const scrollbarWidth = `${innerScrollNode.offsetWidth - innerScrollNode.clientWidth}px`
    console.log('* scrollbarWidth: ' + scrollbarWidth)

    innerScrollNode.style.right = `${-(innerScrollNode.offsetWidth - innerScrollNode.clientWidth + 1)}px`
    // innerScrollNode.style.width = `${deviceNode.clientWidth - 10}px`

    console.log("* resized")
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.resizer.bind(this))
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
      // console.log('device: ' + device)
      // const node = this.device
      // const deviceWidth = node.innerWidth
      // console.log('deviceWidth: ' + deviceWidth)

      // const width = document.getElementByClass('device').offsetWidth
      // console.log('width: ' + width)

      // const device = this.device.current
      // console.log('* device = ' + device)
      // this.device.element.width = `${device.clientWidth}px`


    // node.style.height = `${node.scrollHeight}px`
      return (
        <div
          className={`device iphone-x ${size} ${color}`}
          key={`device-${device}`}
          ref={this.device}
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