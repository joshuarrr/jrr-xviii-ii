import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { ImageLoader } from '../components/image-loader'


export class Img extends Component {
  constructor(){
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.waitAsec = setTimeout(
      () => {
        this.gimmeFrame = requestAnimationFrame(
          () => {
            this.setState({loaded: true})
          }
        )
      }
    );
  }

  componentWillUnmount() {
    if (this.waitAsec) {
      clearTimeout(this.waitAsec);
    }
    if (this.gimmeFrame) {
      cancelAnimationFrame(this.gimmeFrame);
    }
  }

  render () {
    return (
      <ImageLoader>
        {
          this.state.loaded
          ? <Image
            className="home-image"
            cloudName="joshuar"
            publicId={this.props.name}
            width="auto"
            dpr="auto"
            crop="scale"
            secure
            responsive
          />
          : null
        }
    </ImageLoader>
    )
  }
}
