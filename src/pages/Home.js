import React from 'react'
import { withRouteData, Link } from 'react-static'
// import Carousel from 'react-flex-carousel'
import MediaQuery from 'react-responsive'
import { Img } from '../components/image-loader'
import '../styles/home.css'
import '../styles/vendor/carousel.css'

export default withRouteData(({ projects }) => (
  <div className="page-content home-page">
    <MediaQuery maxWidth={1279}>
      <h1 className="site-title">Joshua Richey</h1>
      <h2 className="site-subtitle">Product Designer</h2>
    </MediaQuery>
    <div>
      {
        projects.map(project => (
          <Link key={project.title} to={`projects/project/${project.title}`}>
            <Img
              className="cover-image"
              name={`portfolio/${project.title}`}
            />
          </Link>
          )
        )
      }
    </div>
  </div>
))
