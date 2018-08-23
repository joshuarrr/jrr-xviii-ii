import React from 'react'
import { withSiteData } from 'react-static'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import '../styles/elements/tooltip.css'

export default withSiteData(() => (
  <div className="page-content profile-page">
    <h1 className="intro">Hello! I’m <Tooltip className="tooltip" title="Pronounced <span>/ˈdʒɒʃʊə/" postion="top" distance="20" trigger="mouseenter" animation="scale" arrow="true" animateFill="false" size="big" theme="light">Joshua</Tooltip>, a product designer in Portland, Oregon.</h1>
    <p>Hi! I am a product designer with over a dozen years of experience making websites and apps. I am passionate about design systems and organizational design thinking, wireframing, prototyping, and front-end development. I believe that constant collaboration with engineers and users makes for the best products.</p>
    <p>I have worked at agencies, run my own consultancies, partnerships, and startups, and was the lead designer at Idealist, a large international non-profit for five years. I am currently co-designing an app that helps musicians collaborate, and am seeking a full time position working with a great team with a purpose.</p>
    <p>In addition to design, I play bass in a post-psychedelic rock band and my best friend is a retired racing greyhound. Most of my time behind a computer looks like this:</p>
  </div>
))
