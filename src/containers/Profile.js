import React from 'react'
import { withRouteData } from 'react-static'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import '../styles/elements/tooltip.css'
import '../styles/profile.css'

export default withRouteData(({ profile }) => (
  <div className="page-content profile-page">
    {profile.map(profile => (
        <h1 key={profile.data.title} />
      ))}
  </div>
))
