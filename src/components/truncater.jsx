import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
      // node.style.overflow = 'auto';
      // console.log(node.scrollHeight);
    }

    componentDidUpdate() {
      this.resizer();
    }

    componentDidMount() {
      window.addEventListener('load', this.handleLoad);
    }

    handleClick = () => {
      // console.log('this is:', this);
      const nodey = this.textContainer.current;
      console.log("height = " + nodey.scrollHeight);
    }

  loadHandler() {
    console.log("loaded");
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
            <button onClick={this.handleClick}>
              Get Height
            </button>
            {this.truncatedText()}
          </div>
        )
    }
}

export default LongText