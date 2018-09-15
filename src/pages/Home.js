import React from 'react'
import { withSiteData, Link } from 'react-static'
import { Img } from '../components/image-loader'
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'cloudinary-react'
import '../styles/home.css'
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/vendor/carousel.css'


export default withSiteData(() => {
  return(
    <div className="page-content home-page">
      <h1 className="site-title">Joshua Richey</h1>
      <h2 className="site-subtitle">Product Designer</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        selectedItem={1}
        infiniteLoop={true}
        transitionTime={700}
        emulateTouch={true}
        useKeyboardArrows={true}
      >
        <Link to={`projects/project/lumen`}>
          <Img 
            className="cover-image"
            name="portfolio/lumen"
          />
        </Link>
        <Link to={`projects/project/hilights`}>
          <Img 
            className="cover-image"
            name="portfolio/hilights"
          />        
        </Link>
        <Link to={`projects/project/idealist`}>
          <Img 
            className="cover-image"
            name="portfolio/idealist"
          />
        </Link>
        </Carousel>
    </div>
  )
})
