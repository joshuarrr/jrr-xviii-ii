import React from 'react'
import convertStyle from './convertStyle'
import getWindowHeight from './getWindowHeight'

export default class Div100vh extends React.Component {
  constructor (props) {
    super(props)

    this.setWrapRef = element => {
      this.wrapRef = element
    }
  }

  state = {
    style: {},
  }

  // On mount and window resize converts rvh values to px (if there are any).
  // Also, adds `height: 100rvh` if height is not specified at all
  updateStyle = () => {
    const convertedStyle = convertStyle(this.props.style, getWindowHeight())
    this.setState({ style: convertedStyle })
  }

  componentDidMount () {
    this.updateStyle()
    window.addEventListener('resize', this.updateStyle)
    // adding the page-wrap className this way prevents a bug that removes the
    // class during production build.
    this.wrapRef.className = 'page-wrap'
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateStyle)
  }

  render () {
    return (
      <div
        {...this.props}
        className={this.props.className}
        style={this.state.style}
        ref={this.setWrapRef}
      />
    )
  }
}
