import React, { Component } from 'react'

class LongText extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false,
    }
    this.textContainer = React.createRef()
  }

  resizer () {
    const node = this.textContainer.current
    node.style.height = `${node.scrollHeight}px`
  }

  componentDidUpdate () {
    this.resizer()
  }

  truncatedText () {
    const truncatedContent = this.props.short && !this.state.expanded
      ? (
        <span>
          {this.props.short}
          <button
            className="button-basic"
            onClick={() => {
              this.setState(
              { expanded: true },
            )
          }}>
             &nbsp;Read more ››
          </button>
        </span>
      )
      : this.props.children
    return truncatedContent
  }

  render () {
    return (
      <div
        className="text-container"
        {...this.props}
        ref={this.textContainer}
      >
        {this.truncatedText()}
      </div>
    )
  }
}

export default LongText
