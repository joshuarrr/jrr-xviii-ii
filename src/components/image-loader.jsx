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
          }}
          enter={{
            opacity: [1],
            timing: { duration: 1000, delay: 0 },
          }}
        >
          {({ opacity }) => (
            <Image
              className={this.props.className}
              cloudName="joshuar"
              publicId={this.props.name}
              width="auto"
              dpr="auto"
              crop="scale"
              secure
              responsive
              progressive="false"
              onLoad={() => {
                this.setState({loaded: true});
              }}
              style={{ opacity }}
            />
          )}
        </Animate>
      </div>
    )
  }
}
