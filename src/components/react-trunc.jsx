import React, { Component } from 'react'

class LongText extends Component {
    constructor(){
      super()
      this.state = {
        expanded: false
      }
      this.textContainer = React.createRef();
    }

    resizer() {
      const node = this.textContainer.current;
      console.log("scroll height: " + node.scrollHeight)
      console.log("client height: " + node.clientHeight)
      let insideBigger = (node.scrollHeight > (node.clientHeight + 4));
      console.log(insideBigger);
    }

    componentDidUpdate() {
      this.resizer();
    }

    truncatedText() {
      if(this.props.short && !this.state.expanded){
        return (
          <span>
            {this.props.short}
            <a onClick={() =>
              this.setState(
                {expanded: true},
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

    render() {
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