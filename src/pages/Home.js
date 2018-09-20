import React from 'react'
import { withSiteData, Link } from 'react-static'
import Carousel from 'react-img-carousel'
import { Image } from 'cloudinary-react'
import { Img } from '../components/image-loader'
import '../styles/home.css'
import '../styles/vendor/carousel.css'

require('react-img-carousel/lib/carousel.css')


export default withSiteData(({ projects }) => {
  return (
    <div className="page-content home-page">
      <h1 className="site-title">Joshua Richey</h1>
      <h2 className="site-subtitle">Product Designer</h2>
      <Carousel>
        {
          projects.map((project) => (
            <Link key={project.data.slug} to={`projects/project/${project.data.slug}`}>
              <Img
                className="cover-image"
                name={`portfolio/${project.data.slug}`}
              />
            </Link>
            )
          )
        }
      </Carousel>
    </div>
  )
})
