import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Img } from '../../components/image-loader'


export class Hilights extends Component {
  render () {
    return (
      <div className="project project-content">
        <div className="project-cover-group">
          <div className="project-cover-image">
            <Img name="portfolio/hilights/hilights-iphone.jpg" />
          </div>
          <h3 className="introduction">Hilights facilitates conversations about specific sections of recordings. The design and development are currently in progress.</h3>
          <dl className="project-role">
            <dt>Role:</dt>
            <dd>Product Design, User Research, Prototyping, IA, UX, &amp; UI Design</dd>
          </dl>
          <dl className="project-tech">
            <dt>Tech:</dt>
            <dd>Sketch, InVision Studio, ProtoPie, Framer X, React Native</dd>
          </dl>
        </div>
        <ul className="toc">
          <li>
            <AnchorLink
              className="toc-link"
              href="#introduction">Introduction
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#sitemap">Sitemap
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#wireframes">Wireframes
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#wireframe_prototype">Wireframe prototype
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#brand">Brand
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#hifi">High-Fidelity Comps
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#mobile_app">Mobile App
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#mobile_prototype">Mobile Wireframe Prototype
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#hifi_mobile">High-Fidelity Mobile Comps
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#mobile_proto">Mobile Prototype
            </AnchorLink>
          </li>
        </ul>

        <section id="introduction">
          <h2>INTRODUCTION: THE PROBLEM</h2>
          <p>My buddy and I are in a band together and we are frequently frustrated when we listen  to recordings of our practices and want to discuss a particular section of the music. Conversations usually go something like this:</p>
          <blockquote>
            <p><strong>Him:</strong> That first jam was cool. Your bassline sounds amazing.</p>
            <p><strong>Me:</strong>  Oh, yeah? What one? I played like three amazing basslines during that jam if I remember correctly.</p>
            <p><strong>Him:</strong> Well, yeah, that‘s true, because you are such an amazing musician. But specifically the part in the middle.</p>
            <p><strong>Me:</strong> Listening now...</p>
            <p><strong>Me:</strong> Dude.. this is a 20 minute track. What part are you talking about?</p>
            <p><strong>Him:</strong> Ugh. Hold on. OK. At like 12:15 - 15:00</p>
            <p><strong>Me: </strong> Oh! Yeah, this does sound great. New song potential?</p>
          </blockquote>
          <p>These conversations are so frustrating that we don’t have them very often anymore. But we totally would, if it were easier to share clips.</p>
          <p>He’s is a Software Engineer, and I am a Product Designer, so the solution to our woes quickly made itself clear: build an app!</p>
        </section>
        <section id="sitemap">
          <h2> SITEMAP &amp; INFORMATION ARCHITECTURE</h2>
          <Img
            className="bordered"
            name="portfolio/hilights/hilights-desktop-sitemap.jpg"
          />
          <p>User flows and site maps are incredibly useful when starting up a project, especially when it comes to pairing up with engineers. They’re also one of the funnest things to design, because arrows.</p>
          <p>This site map shows that as soon a user lands on the homepage they can start using the product by uploading a track. <em>Try before you buy</em> provides a more frictionless experience for new users, and it has been shown to improve conversion rates. We check the filenames automatically, and if the file matches a track already in the user’s library we provide the option to store it as a version.</p>
          <p>When a user attempts to save or share the project we’ll provide the option to create an account and create a group for collaborating with their friends or bandmates.</p>
        </section>
        <section id="wireframes">
          <h2>WIREFRAMES &amp; WIREFLOW</h2>
          <Img
            className="bordered"
            name="portfolio/hilights/hilights-wireframe-sketches"
          />
          <Img
            name="portfolio/hilights/hilights-desktop-wireframe"
          />
          <p>I usually start drawing with pencil and paper as there is less interference between my thoughts and the outcome. Generally, the best interface is the least amount of interface possible. If there is a simpler way, it’s probably easier.</p>
        </section>
        <section id="wireframe_prototype">
          <h2>WIREFRAME PROTOTYPE</h2>
          <a href="https://invis.io/VMGT0GPG6TJ" target="_blank" rel="noopener noreferrer">
            <Img
              className="bordered"
              name="portfolio/hilights/hilights-prototype"
            />
          </a>
          <p>For this project, I’ve been linking the wireframes up to the sitemap, so you can use it as an interactive map. Check out the <a href="https://invis.io/VMGT0GPG6TJ">desktop prototype</a>.</p>
        </section>
        <section id="brand">
          <h2>BRAND DEVELOPMENT</h2>
          <Img
            className="bordered"
            name="portfolio/hilights/hilights-logos"
          />
          <p>Realizing that we want people to know what the app is called, I started the process of trying to represent abstract concepts with figurative forms. This work is still the early phases and will inform the final brand direction for the entire product.</p>
        </section>
        <section id="hifi">
          <h2>HIGH-FIDELITY COMPS</h2>
          <Img
            name="portfolio/hilights/hilights-macbook"
          />
          <p>Desktop first, as always...</p>
          <p>JK. Normally I’d start with the mobile version, but our r÷esearch showed that, like ourselves, most of the musicians in our friend circles record their practices on their desktops. Well, laptops really. Therefore we’re starting with a responsive webapp which will be supplemented with an iOS app.</p>
          <Img
            name="portfolio/hilights/hilights-imac"
          />
          <p>This screen shows a track with three highlights, one of which has been clicked on which revealed the comment thread. You can play the hilight and converse about it right in context. </p>
          <p>Also, I drew these friendly (slightly startled looking) robots that are used for anonymous users:</p>
          <div className="image-row robots">
            <Img name="portfolio/hilights/robot-1" />
            <Img name="portfolio/hilights/robot-2" />
            <Img name="portfolio/hilights/robot-3" />
          </div>
        </section>
        <section id="mobile_app">
          <h2>MOBILE APP</h2>
          <Img
            className="bordered"
            name="portfolio/hilights/hilights-sitemap-mobile"
          />
          <p>A lot of people use their iPhone to record their band practices. We want to provide an easy way to record a song and collaborate on it with Hilights.</p>
        </section>
        <section id="mobile_prototype">
          <h2>MOBILE WIREFRAME PROTOTYPE</h2>
          <Img
            className="bordered"
            name="portfolio/hilights/hilights-mobile-wireframes"
          />
          <p>Wireframes of the mobile app.</p>
          <p>Check out the <a href="https://invis.io/A7HGN9D8DU5">interactive prototype.</a></p>
        </section>
        <section id="hifi_mobile">
          <h2>HIGH-FIDELITY MOBILE COMPS</h2>
          <Img
            name="portfolio/hilights/hilights-hifi-mobile"
          />
        </section>
        <section id="mobile_proto">
          <h2>MOBILE PROTOTYPE</h2>
          <p>Once a few screens are designed, a <a href="https://invis.io/GEI3PG0C37W" target="_blank" rel="noopener noreferrer"> mobile prototype</a> helps keep them organized and makes usability testing possible.</p>
          <a href="https://invis.io/GEI3PG0C37W" target="_blank" rel="noopener noreferrer">
            <Img
              name="portfolio/hilights/hilights-mobile-prototype"
            />
          </a>
        </section>
      </div>
    )
  }
}

export default withRouteData(Hilights)
