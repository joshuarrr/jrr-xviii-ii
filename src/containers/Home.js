import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => (
  <div className="home-page">
    {<h1 style={{ textAlign: 'center' }}>Hello </h1>}
  </div>
))
