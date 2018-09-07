import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/img'
import LongText from '../components/react-trunc'
import Markdown from 'react-markdown'
import '../styles/profile.css'


export default withRouteData(({profile}) => {
  const fullText = profile.map(profile => (
    <Markdown
      key="profile-content"
      source={profile.content}
      escapeHtml={true}
    />
  ));

  return(
    <div key="profile" className="page-content profile-page">
      <Img className="profile-pic" name="profile/me_again" />
      <h1>Hi, I’m Joshua.</h1>
      {profile.map(profile => (
        <h2 key="tldr">{profile.data.tldr}</h2>
      ))}
    <LongText short="At the ripe old age of about nine, I bought my first copy of Dark Side of the Moon, on cassette. I'd never heard of Pink Floyd, I just liked the cover: a ray of light passing through a prism, splitting into a rainbow of frequencies. I liked the colors. I studied that cover for a hours and hours, and eventually went on to study light and optics because of it. I became a designer...">
      {fullText}
      <Img className="profile-pic-2" name="profile/working" />
    </LongText>
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
        <dd className="skill">Stakeholder Interviews</dd>
        <dd className="skill">Stakeholder Interviews</dd>
        <dd className="skill">Data Driven Design</dd>
        <dt className="skill-category">Visual Design</dt>
        <dd className="skill">UI / Interaction Design</dd>
        <dd className="skill">Branding</dd>
        <dd className="skill">Art Direction</dd>
        <dd className="skill">Illustration</dd>
        <dt className="skill-category">Front-End Development</dt>
        <dd className="skill">Breaking JavaScript</dd>
        <dd className="skill">HTML + CSS</dd>
        <dd className="skill">Git / Versioning</dd>
        <dt className="skill-category">Soft Skills</dt>
        <dd className="skill">Mentoring</dd>
        <dd className="skill">Communication</dd>
        <dd className="skill">Presenting</dd>
        <dd className="skill">Agile Development</dd>
      </dl>
    </div>
  )
})