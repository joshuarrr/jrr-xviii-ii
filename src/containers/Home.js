import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => (
  <div className="home-page">
    <h1 className="intro">Hello!</h1>
    <h2 className="intro">I’m Joshua, and this is my website. How do you like it so far? </h2>
    <p className="intro">I am a human-centered UX designer focused on crafting products that empower, delight, and improve lives. I am compelled by the challenge of creating simple solutions to complex problems through strategic information architecture and UI design. </p>
    <p className="intro">If that isn't cliche enough for you, I also live in Portland, love dogs (especially greyhounds), play bass in a rock & roll band, and love me a fine porter.  </p>
  </div>
))
