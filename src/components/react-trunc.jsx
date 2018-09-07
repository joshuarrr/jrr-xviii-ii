import React, { Component } from 'react'

class LongText extends Component {
    constructor(){
      super()
      this.state = {
        expanded: false
      }
    }

    truncatedText(){
      if(this.props.short && !this.state.expanded){
        return (
          <span>
            {this.props.short}
            <a onClick={() =>
              this.setState(
                {expanded: true},
                // state => console.log(this.state)
              )
            }>
               &nbsp;‹ Read More ›
            </a>
          </span>
        )
      } else {
        return this.props.children
      }
    }

    render(){
        return (
          <div {...this.props}>
            {this.truncatedText()}
          </div>
        )
    }
}

export default LongText