import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { Animate } from 'react-move'
import { Image } from 'cloudinary-react'


export class Img extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }

  render () {
    return (
      <div className="image-holder">
        {!this.state.loaded && <Loader
          type="TailSpin"
          color="#00BFFF"
          height="30"
          width="30"
        />}
        <Animate
          show
          start={{
            opacity: [0],
            scale: [.95],
          }}
          enter={{
            opacity: [1],
            scale: [1],
            timing: { duration: 400, delay: 0 },
          }}
        >
          {({ opacity, scale }) => (
            // console.log(opacity, scale) ||
            <Image
              className={this.props.className}
              cloudName="joshuar"
              publicId={this.props.name}
              width="auto"
              dpr="auto"
              crop="scale"
              progressive="false"
              f_auto="true"
              secure
              responsive
              onLoad={() => {
                this.setState({loaded: true});
              }}
              style={{
                opacity,
                transform: `scale(${scale})`,
              }}
            />
          )}
        </Animate>
      </div>
    )
  }
}
