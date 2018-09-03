import React from 'react'
import { withSiteData } from 'react-static'
import { Img } from '../components/img'
import '../styles/home.css'

export default withSiteData(() => (
  <div className="page-content home-page">
    <h1 className="site-title">Joshua Richey</h1>
    <h2 className="site-subtitle">Product Designer</h2>
    <Img name="Hilights" />
  </div>
))
