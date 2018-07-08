import React from 'react'
import { withSiteData } from 'react-static'
import { Logo } from '../components/logo'

export default withSiteData(() => (
  <div>
    <Logo />
    <h1 style={{ textAlign: 'center' }}>Hello World</h1>
  </div>
))
