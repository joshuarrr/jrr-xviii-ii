import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'


export class DeviceMock extends Component {
  static defaultProps = {
    // Device (iPhoneX, iPhone5)
    device: 'iPhoneX',
    width: null,
    scrollable: true,
    color: 'black',
    buttons: true,
    bands: false,
    notch: false,
    shadow: true,
    glare: true,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    device: PropTypes.string,
    width: PropTypes.number,
    scrollable: PropTypes.bool,
    color: PropTypes.string,
    buttons: PropTypes.bool,
    bands: PropTypes.bool,
    notch: PropTypes.bool,
    shadow: PropTypes.bool,
    glare: PropTypes.bool,
  }

  constructor (props) {
    super(props)

    this.setDeviceRef = element => {
      this.device = element
    }

    this.scrollContainer = React.createRef()

    this.setInnerScrollContainerRef = e => {
      this.innerScrollContainer = e
    }
  }

  componentDidMount () {
    this.hideScrollbars()
  }

  hideScrollbars () {
    // Hide firefox srollbars
    const i = this.innerScrollContainer
    const scrollbarWidth = i.offsetWidth - i.clientWidth
    i.style.right = `-${scrollbarWidth + 1}px`
  }

  render () {
    const width = this.props.width
    const height = this.props.height
    const mockContent = this.props.children
    const device = !this.props.device ? 'defaultDevice' : this.props.device
    const color = !this.props.color ? 'black' : this.props.color
    const scrollable = this.props.scrollable && 'scrollable'

    if (device === 'md-iPhone5') {
      return (
        <div
          className={
            `device md-iphone-5 md-black-device
             ${scrollable}
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
          className={`device iphone-x ${color}`}
          ref={this.setDeviceRef}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {this.hideScrollbars()}
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
          <div className={`screen scroll-container ${scrollable}`}>
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
