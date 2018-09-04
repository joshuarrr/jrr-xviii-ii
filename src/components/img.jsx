import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { ImageLoader } from '../components/image-loader'


export class Img extends Component {
  constructor(){
    super();
    this.state = {
      loaded: false
    }
  }

  render () {
    return (
      <ImageLoader loaded={this.state.loaded}>
        <Image
            className={this.props.className}
            cloudName="joshuar"
            publicId={this.props.name}
            width="auto"
            dpr="auto"
            crop="scale"
            secure
            responsive
            onLoad={() => {
              this.setState({loaded: true});
            }}
          />
    </ImageLoader>
    )
  }
}
