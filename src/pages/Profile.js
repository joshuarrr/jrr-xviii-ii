import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
import LongText from '../components/truncater'
import MediaQuery from 'react-responsive'
import { Img } from '../components/image-loader'
import '../styles/profile.css'


export default withRouteData(({ profile }) => {
  const fullText = profile.map(profile => (
    <Markdown
      key="profile-content"
      source={profile.content}
      escapeHtml
    />
  ))
  const previewText = profile.map(profile => (
    <Markdown
      key="profile-preview"
      source={profile.data.preview}
      escapeHtml
    />
  ))

  return (
    <div key="profile" className="page-content profile-page">
      <Img className="profile-pic" name="profile/me_again" />
      <section className="profile-bio">
        {profile.map(profile => (
          <h2 key="tldr">{profile.data.tldr}</h2>
        ))}
        <MediaQuery key="tablet" minWidth={768}>
          {fullText}
          <Img
            className="profile-pic-2"
            name="profile/working"
          />
        </MediaQuery>
        <MediaQuery key="mobile" maxWidth={767}>
          <LongText short={previewText}>
            {fullText}
            <Img
            className="profile-pic-2"
            name="profile/working"
            />
          </LongText>
        </MediaQuery>
      </section>
      <aside className="profile-skills">
        <h2>Expertise</h2>
        <dl className="expertise">
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
      </aside>
    </div>
  )
})
