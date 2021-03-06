import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withRouteData } from 'react-static'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Img } from '../../components/image-loader'
import { DeviceMock } from '../../components/device-mocks'


export class Idealist extends Component {
  constructor () {
    super()
    this.imageRow = React.createRef()
    this.state = {
      rowWidth: undefined,
    }

    this.setImageRowRef = element => {
      this.imageRow = element
    }

    this.setImageRow1upRef = element => {
      this.imageRow1up = element
    }
  }

  getWidth = row => {
    if (row !== undefined && row.childNodes !== undefined && this.state.rowWidth !== undefined) {
      const rowWidth = this.state.rowWidth
      const rowCount = row.childNodes.length
      const margin = 33
      const deviceWidth = Math.min((rowWidth / rowCount) - margin, 250)

      return {
        width: Math.round(deviceWidth),
        height: Math.round(deviceWidth * 2.16),
      }
    }
  }

  getRowWidth = () => {
    this.setState({
      // TODO - use ref
      rowWidth: ReactDOM.findDOMNode(this).clientWidth,
    })
  }

  componentDidMount () {
    this.getRowWidth()
    window.addEventListener('resize', this.getRowWidth)
  }

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
              href="#contact">Contact
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
          <h2>Homepage</h2>
          <p>Idealist has two target audiences: opportunity seekers, and posters. The homepage provides seekers with search options and posters with the ability to post a new listing.</p>
          <p>We tracked changes closely in Google Analytics to validate design decisions in relation to KPIs such as number of searches and number of new posts. </p>
          <Img name="portfolio/idealist/idealist-home-ipad" />

          <h3>Search</h3>
          <p>As part of the redesign we made the site responsive for the first time, and mobile friendliness improved our mobile search rates up by ~250%.</p>
          <div
            className="image-row five-up"
            ref={this.setImageRowRef}
          >
            <DeviceMock
              device="iPhoneX"
              size="small"
              key="1"
              {...this.getWidth(this.imageRow)}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-01" />
            </DeviceMock>

            <DeviceMock
              device="iPhoneX"
              size="small"
              key="2"
              {...this.getWidth(this.imageRow)}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-02" />
            </DeviceMock>

            <DeviceMock
              key="3"
              device="iPhoneX"
              size="small"
              {...this.getWidth(this.imageRow)}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-03" />
            </DeviceMock>

            <DeviceMock
              key="4"
              device="iPhoneX"
              size="small"
              {...this.getWidth(this.imageRow)}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-04" />
            </DeviceMock>

            <DeviceMock
              key="5"
              device="iPhoneX"
              size="small"
              {...this.getWidth(this.imageRow)}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-05" />
            </DeviceMock>
          </div>
        </section>

        <section id="team">
          <h2>Idealist Team</h2>
          <div
            className="image-row fleft"
            ref={this.setImageRow1upRef}
          >
            <DeviceMock
              device="iPhoneX"
              {...this.getWidth(this.imageRow1up)}
            >
              <Img name="portfolio/idealist/idealist-our-team-mobile" />
            </DeviceMock>
          </div>
          <p>3D-printed rain bridge augmented reality military-grade courier BASE jump footage claymore mine dolphin disposable tanto smart-neon. Courier plastic drone sunglasses dead tanto bridge post. Geodesic nano-narrative A.I.</p>
        </section>

        <section id="end">
          <h3>To be continued...</h3>
        </section>
      </div>
    )
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.getRowWidth)
  }
}

export default withRouteData(Idealist)
