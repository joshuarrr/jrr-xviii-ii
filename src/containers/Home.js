import React from 'react'
import { withSiteData } from 'react-static'
import { Tooltip } from 'react-tippy'
import Animate from 'react-move/Animate'
import 'react-tippy/dist/tippy.css'
import '../styles/elements/tooltip.css'
import '../styles/home.css'
// import Jr from '../img/Me.jpg'
// import drop from '../img/drop.jpg'

export default withSiteData(() => (
  <div className="home-page">
    <h1 className="intro">Hello! I’m <Tooltip className="tooltip" title="Pronounced:  jaw-shoe-wah" postion="top" distance="20" trigger="mouseenter" animation="scale" arrow="true" animateFill="false" size="big" theme="light">Joshua</Tooltip>, a product designer in Portland, Oregon.</h1>
    {/*<img src={Jr} className="profile-pic" alt="Joshua Richey with his greyhound." />*/}

    <p className="intro">I am a human-centered UX designer focused on crafting products that empower, delight, and improve lives. I’m thrilled by the challenge of creating simple solutions to complex problems. </p>
    <p className="intro">If that’s not cliché enough, I also love dogs (especially greyhounds), play bass in a rock & roll band, and love a nice porter.</p>
    <Animate
      show

      start={{ // the starting state (required)
        width: 30,
      }}

      enter={{ // how to transform state on enter (optional)
        width: 300,
        timing: { delay: 1000, duration: 1000 },
      }}
    >
      {({ width }) => (
        <div
          className="testbox"
          style={{
            width,
          }}
        >
          poop
        </div>
      )}
    </Animate>
  </div>
))
