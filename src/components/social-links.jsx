import React, { Component } from 'react'
import socialLinkList from '../data/social-links.js'
require('../styles/components/social-links.css')

export class SocialLinks extends Component {
  render () {
    const links = socialLinkList.map(function mapLinks(link, i) {
      return (
        <li key={ "link-" + i } className="social-link-item">
          <a
            className={ "social-link icon " + link.class }
            href={ link.url }
            rel="external"
            target="_blank"
          >
            <span className="social-link-text">
              { link.title }
            </span>
          </a>
        </li>
      );
    });
    return (
      <ul className="social-links">
        { links }
      </ul>
    )
  }
}
