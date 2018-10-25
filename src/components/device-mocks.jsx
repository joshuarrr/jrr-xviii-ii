import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/vendor/device-mocks.css'
import '../styles/vendor/minimal-devices.css'

export class DeviceMock extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
  }

  render () {
    const mockContent = this.props.children
    const scrollable = this.props.scrollable && 'scrollable'
    return (
      [
        <div
          className={
            `device md-iphone-5 md-black-device
             ${this.props.size}
             ${scrollable}`
          }
          key="md-iphone-5"
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
        </div>,
      ]
    )
  }
}
