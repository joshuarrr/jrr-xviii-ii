import React from 'react'
import MediaQuery from 'react-responsive'
import LongText from '../components/truncater'
import { Img } from '../components/image-loader'
import '../styles/profile.css'


export default () => {
  const shortText = <p>On my ninth birthday, I bought my first copy of Dark Side of the Moon, on cassette. I’d never heard of Pink Floyd, I just liked the cover: a ray of light passing through a prism, splitting into a rainbow. I studied that cover for a hours, and eventually went on to study light and optics because of it. Soon afterwards, I went to London to work with the late Storm Thorgerson – the designer of that image – in London. I became a graphic designer because images like that one captivate me. I have a framed art print of the prism on my wall, and every day it reminds me of the power design has to change lives.</p>
  const longText = [<p key="p1">On my ninth birthday, I bought my first copy of Dark Side of the Moon, on cassette. I’d never heard of Pink Floyd, I just liked the cover: a ray of light passing through a prism, splitting into a rainbow. I studied that cover for a hours, and eventually went on to study light and optics because of it. Soon afterwards, I went to London to work with the late Storm Thorgerson – the designer of that image – in London. I became a graphic designer because images like that one captivate me. I have a framed art print of the prism on my wall, and every day it reminds me of the power design has to change lives.</p>,
                    <p key="p2">I see design as problem solving. How can we best communicate complex ideas using simple tools such as color, shape, and text? How can we use imagination and creativity to make those ideas more compelling? How can we make complex interactions feel simple? These questions have heavily influenced who I am today. Can someone use this? (how do problem solving and asking questions relate?)</p>,
                    <p key="p3">I am now a product designer with over a dozen years of experience making websites and apps. I am passionate about design systems and organizational design thinking, wireframing, prototyping, and front-end development. I believe that constant collaboration with engineers and users makes for the best products. I love when an app surprises me by making something complicated feel simple, and I aim to achieve that through my work.</p>,
                    <p key="p4">I’ve worked at agencies, run my own consultancies, partnerships, and startups, and was the Lead Designer at Idealist, a large international non-profit for five years. I am currently co-designing an app that helps musicians collaborate and am driven to make the world a more enjoyable place with the things I make.</p>,
                    <p key="p5">In addition to design, I play bass in a post-psychedelic rock band and love to draw. My best friend is a retired racing greyhound and we spend most evenings walking the neighborhoods of Portland together. (She pees in public a lot more often than I do.) Most of my time behind a computer looks like this:</p>]
  return (
    <div key="profile" className="page-content profile-page">
      <Img className="profile-pic" name="profile/me_again" />
      <section className="profile-bio">
        <h2 key="tldr">I’m a Product Designer in Portland, OR. I design fun and easy to use websites and apps. And I’m nice.</h2>
        <MediaQuery key="tablet" minWidth={768}>
          {longText}
          <Img
            className="profile-pic-2"
            name="profile/working"
          />
        </MediaQuery>
        <MediaQuery key="mobile" maxWidth={767}>
          <LongText short={shortText}>
            {longText}
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
          <dd className="skill">Contextual Inquiry</dd>
          <dd className="skill">Stakeholder Interviews</dd>
          <dd className="skill">Usability Testing</dd>
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
}
