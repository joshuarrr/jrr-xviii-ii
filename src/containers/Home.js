import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../img/logo.png'


export default withSiteData(() => (
  <div>
    <img className="logo" src={logoImg} alt="" />
    <h1 style={{ textAlign: 'center' }}>Hello World</h1>
  </div>
))
