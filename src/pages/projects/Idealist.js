import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Img } from '../../components/image-loader'
import { DeviceMock } from '../../components/device-mocks'


export class Idealist extends Component {
  render () {
    return (
      <div className="project project-content">

        <div className="project-cover-group">
          <div className="project-cover-image">
            <Img
              className="bordered"
              name="portfolio/idealist/idealist-cover"
            />
          </div>
          <h3 className="introduction">Idealist.org is an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions. I was their Lead Web Designer for about five years.</h3>
          <dl className="project-role">
            <dt>Role:</dt>
            <dd>Lead Web Design, UX, UI, User Research, & Front-end Development</dd>
          </dl>
          <dl className="project-tech">
            <dt>Tech:</dt>
            <dd>Sketch, Marvel, HTML, CSS, Sass, PostCSS, Git, React.js</dd>
          </dl>
        </div>

        <ul className="toc">
          <li>
            <AnchorLink
              className="toc-link"
              href="#homepage">Homepage
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#search">Search
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#about">about
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#manifesto">Manifesto
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#gradfairs">Grad Fairs
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#bookmarks">Bookmarks
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#donate">Donate
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#contact">Concact
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#profile">/Idealists
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="toc-link"
              href="#team">Our Team
            </AnchorLink>
          </li>
        </ul>


        <section id="homepage">
          <h2>Homepage & Search</h2>
          <p>Idealist's job and volunteer search function is central to product.</p>
          <Img
            name="portfolio/idealist/idealist-home-ipad"
          />
        </section>


        <section id="search">
          <h2>Search</h2>
          <p>3D-printed rain bridge augmented reality military-grade courier BASE jump footage claymore mine dolphin disposable tanto smart-neon. Courier plastic drone sunglasses dead tanto bridge post. Geodesic Legba nano-narrative A.I.</p>
          <div className="image-row five-up">
              <DeviceMock device="iPhoneX" size="small">
                <Img
                  name="portfolio/idealist/idealist-search-mobile-01"
                />
              </DeviceMock>
              <DeviceMock device="iPhoneX" size="small">
                <Img
                  name="portfolio/idealist/idealist-search-mobile-02"
                />
              </DeviceMock>
              <DeviceMock device="iPhoneX" size="small">
                <Img
                  name="portfolio/idealist/idealist-search-mobile-03"
                />
              </DeviceMock>
              <DeviceMock device="iPhoneX" size="small">
                <Img
                  name="portfolio/idealist/idealist-search-mobile-04"
                />
              </DeviceMock>
              <DeviceMock device="iPhoneX" size="small">
                <Img
                  name="portfolio/idealist/idealist-search-mobile-05"
                />
              </DeviceMock>
          </div>
        </section>


        <section id="team">
          <h2>Idealist Team</h2>
          <DeviceMock device="iPhoneX" size="medium" scrollable>
            <Img
              name="portfolio/idealist/idealist-our-team-mobile"
            />
          </DeviceMock>
          <p>3D-printed rain bridge augmented reality military-grade courier BASE jump footage claymore mine dolphin disposable tanto smart-neon. Courier plastic drone sunglasses dead tanto bridge post. Geodesic Legba nano-narrative A.I.</p>
        </section>
      </div>
    )
  }
}

export default withRouteData(Idealist)
