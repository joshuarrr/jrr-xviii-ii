import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/img'
import Markdown from 'react-markdown'
import '../styles/profile.css'

export default withRouteData(({ profile }) => (
  <div key="profile" className="page-content profile-page">
    <Img className="profile-pic" name="profile/me_again" />
    <h1>Hi, I’m Joshua, a product designer in Portland, Oregon.</h1>
    {profile.map(profile => (
      <Markdown
        key="profile-content"
        source={profile.content}
        escapeHtml={false}
      />
    ))}
    <Img className="profile-pic-2" name="profile/working" />
    <h2>Expertise</h2>
    <dl>
      <dt className="skill-category">UX Design</dt>
      <dd className="skill">Wireframing</dd>
      <dd className="skill">Prototyping</dd>
      <dd className="skill">Information Architecture</dd>
      <dd className="skill">Sketching & Drawing</dd>
      <dd className="skill">Copywriting</dd>
      <dt className="skill-category">User Research</dt>
      <dd className="skill">Usability Testing</dd>
      <dd className="skill">Data Driven Design</dd>
      <dt className="skill-category">Visual Design</dt>
      <dd className="skill">UI / Interaction Design</dd>
      <dd className="skill">Branding</dd>
      <dd className="skill">Art Direction</dd>
      <dt className="skill-category">Front-End Development</dt>
      <dd className="skill">Breaking JavaScript</dd>
      <dd className="skill">HTML + CSS</dd>
      <dd className="skill">Git</dd>
      <dt className="skill-category">Soft Skills</dt>
      <dd className="skill">Mentoring</dd>
      <dd className="skill">Communication</dd>
      <dd className="skill">Presenting</dd>
      <dd className="skill">Agile Development</dd>
    </dl>
  </div>
))
