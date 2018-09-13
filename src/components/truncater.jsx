import React, { Component } from 'react'

class LongText extends Component {
    constructor(){
      super()
      this.state = {
        expanded: false,
      }
      this.textContainer = React.createRef();
    }

    resizer() {
      const node = this.textContainer.current;
      node.style.height = node.scrollHeight + 'px';
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
              { this.setState(
                {expanded: true},
              );
            }}>
               &nbsp;‹ Read More ›
            </a>
          </span>
        )
      } else {
        return (
          this.props.children
        )
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