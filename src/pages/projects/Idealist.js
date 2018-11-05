import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Img } from '../../components/image-loader'
import { DeviceMock } from '../../components/device-mocks'


export class Idealist extends Component {
  constructor () {
    super()
    this.imageRow = React.createRef()
    this.state = {
      deviceWidth: 100,
      deviceHeight: 216,
    }

    this.setImageRowRef = element => {
      this.imageRow = element
    }
  }

  getDeviceWidth = () => {
    const rowWidth = this.imageRow.clientWidth
    const rowCount = this.imageRow.childNodes.length
    const margin = '33'
    const deviceWidth = (rowWidth / rowCount) - margin
    this.setState({
      deviceWidth: Math.round(deviceWidth),
      deviceHeight: Math.round(deviceWidth * 2.16),
    })
  }

  componentDidMount () {
    this.getDeviceWidth()
    window.addEventListener('resize', this.getDeviceWidth)
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
          <h2>Homepage & Search</h2>
          <p>Idealist's job and volunteer search function is central to product.</p>
          <Img name="portfolio/idealist/idealist-home-ipad" />
        </section>

        <section id="search">
          <h2>Search</h2>
          <p>3D-printed rain bridge augmented reality military-grade courier BASE jump footage claymore mine dolphin disposable tanto smart-neon. Courier plastic drone sunglasses dead tanto bridge post. Geodesic Legba nano-narrative A.I.</p>
          <div
            className="image-row five-up"
            ref={this.setImageRowRef}
          >
            <DeviceMock
              device="iPhoneX"
              size="small"
              key="1"
              width={this.state.deviceWidth}
              height={this.state.deviceHeight}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-01" />
            </DeviceMock>

            <DeviceMock
              device="iPhoneX"
              size="small"
              key="2"
              width={this.state.deviceWidth}
              height={this.state.deviceHeight}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-02" />
            </DeviceMock>

            <DeviceMock
              key="3"
              device="iPhoneX"
              size="small"
              width={this.state.deviceWidth}
              height={this.state.deviceHeight}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-03" />
            </DeviceMock>

            <DeviceMock
              key="4"
              device="iPhoneX"
              size="small"
              width={this.state.deviceWidth}
              height={this.state.deviceHeight}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-04" />
            </DeviceMock>

            <DeviceMock
              key="5"
              device="iPhoneX"
              size="small"
              width={this.state.deviceWidth}
              height={this.state.deviceHeight}
            >
              <Img name="portfolio/idealist/idealist-search-mobile-05" />
            </DeviceMock>
          </div>
        </section>

        <section id="team">
          <h2>Idealist Team</h2>
          <div
            className="image-row"
            ref={this.setImageRowRef}
          >
            <DeviceMock
              device="iPhoneX"
              size="medium"
              scrollable bands
              width={this.state.deviceWidth}
              height={this.state.deviceHeight}
            >
              <Img name="portfolio/idealist/idealist-our-team-mobile" />
            </DeviceMock>
          </div>
          <p>3D-printed rain bridge augmented reality military-grade courier BASE jump footage claymore mine dolphin disposable tanto smart-neon. Courier plastic drone sunglasses dead tanto bridge post. Geodesic Legba nano-narrative A.I.</p>
        </section>
      </div>
    )
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.getDeviceWidth)
  }
}

export default withRouteData(Idealist)
