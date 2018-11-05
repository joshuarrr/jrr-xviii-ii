import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'
// import '../styles/vendor/marvel-devices.css'

export class DeviceMock extends Component {
  static propTypes = {
    // Content
    children: PropTypes.node.isRequired,
    // Device (iPhoneX, iPhone5)
    device: PropTypes.string,
    // Size - defaults to medium
    size: PropTypes.string,
    // Width - defaults to null
    width: PropTypes.number,
    // Scrollable - defaults to true
    scrollable: PropTypes.bool,
    // Color - defaults to black
    color: PropTypes.string,
    // Buttons - defaults to false
    buttons: PropTypes.bool,
    // Bands - defaults to false
    bands: PropTypes.bool,
    // Notch - defaults to false
    notch: PropTypes.bool,
    // Shadow - defaults to false
    shadow: PropTypes.bool,
    // Glare - defaults to true
    glare: PropTypes.bool,
  }

  constructor () {
    super()
    this.setScrollContainerRef = element => {
      this.scrollContainer = element
    }
    this.setInnerScrollContainerRef = element => {
      this.innerScrollContainer = element
    }

    this.scrollBarWidth = () => {
      // debugger
      // console.log(`scrollBarWidth - innerScrollContainer: ${this.innerScrollContainer}`)
      const i = this.innerScrollContainer
      const scrollbarWidth = i.offsetWidth - i.clientWidth
      const right = scrollbarWidth
      console.log(`right: -${right}px`)
      i.style.right = `-${right}px`
      // return `-${right}px`
    }
  }


  componentDidMount () {
    this.scrollBarWidth()
  }

  render () {
    const mockContent = this.props.children
    const device = !this.props.device ? 'defaultDevice' : this.props.device
    const size = !this.props.size ? 'small' : this.props.size
    const deviceWidth = this.props.width !== null && Math.round(this.props.width)
    // this.props.width !== null && console.log(`* deviceWidth: ${deviceWidth}`)
    // Height - iPhoneX aspect = ratio 2.16
    const deviceHeight = this.props.width !== null && Math.round(this.props.width * 2.16)
    // this.props.width !== null && console.log(`* deviceHeight: ${deviceHeight}`)
    const color = !this.props.color ? 'black' : this.props.color
    const scrollable = this.props.scrollable && 'scrollable'

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
          style={{
            width: `${deviceWidth}px`,
            height: `${deviceHeight}px`,
          }}
        >
          { this.props.bands && <div className="top-band" /> }
          { this.props.buttons && <div className="sleep" /> }
          { this.props.bands && <div className="bottom-bar" /> }
          { this.props.buttons && <div className="volume" /> }
          { this.props.glare && <div className="glare" /> }
          { this.props.notch &&
            <div className="notch">
              <div className="camera" />
              <div className="speaker" />
            </div>
          }
          <div
            className={`screen scroll-container ${scrollable}`}
            ref={this.setScrollContainerRef}
            style={{
              width: `${deviceWidth}px`,
              height: `${deviceHeight}px`,
            }}
          >
            <div
              ref={this.setInnerScrollContainerRef}
              className="inner-container"
            >
              <div className="element">
                { mockContent }
              </div>
            </div>
          </div>
          { this.props.shadow && <div className="shadow" />}
        </div>
      )
    }
    return (device)
  }
}

DeviceMock.defaultProps = {
  device: 'iPhoneX',
  size: 'medium',
  width: null,
  scrollable: true,
  color: 'black',
  buttons: true,
  bands: false,
  notch: false,
  shadow: true,
  glare: true,
}
