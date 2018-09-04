import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/img'
import Markdown from 'react-markdown'
import '../styles/profile.css'

export default withRouteData(({ profile }) => (
  <div key="profile" className="page-content profile-page">
    <Img className="profile-pic" name="bio/me_again" />
{/*    {profile.map(profile => (
      <h1 key="profile-title">{profile.data.title}</h1>
    ))}*/}
    {profile.map(profile => (
      <Markdown
        key="profile-content"
        source={profile.content}
        escapeHtml={false}
      />
    ))}
  </div>
))
