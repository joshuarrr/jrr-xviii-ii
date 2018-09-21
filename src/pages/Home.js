import React from 'react'
import { withSiteData, Link } from 'react-static'
import Carousel from 'react-flex-carousel'
import { easeQuadInOut } from 'd3-ease'
import { Img } from '../components/image-loader'
import '../styles/home.css'

export default withSiteData(({ projects }) => (
  <div className="page-content home-page">
    <h1 className="site-title">Joshua Richey</h1>
    <h2 className="site-subtitle">Product Designer</h2>
    <Carousel
      switcher
      indicator
      transitionDuration=".5s"
      ease={easeQuadInOut}
    >
      {
        projects.map(project => (
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
))
