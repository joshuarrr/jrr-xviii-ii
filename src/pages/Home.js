import React from 'react'
import { withSiteData } from 'react-static'
import { Img } from '../components/image-loader'
import '../styles/home.css'

export default withSiteData(() => (
  <div className="page-content home-page">
    <h1 className="site-title">Joshua Richey</h1>
    <h2 className="site-subtitle">Product Designer</h2>
    <Img className="home-image" name="Hilights" />
  </div>
))
