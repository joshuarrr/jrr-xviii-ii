import React, { Component } from 'react'
import socialLinkList from '../data/social-links.js'
import '../styles/components/footer.css'

export class Footer extends Component {
  render () {
    const links = socialLinkList.map((link, i) => (
      <li key={`link-${i}`} className="social-link-item">
        <a
          className={`social-link icon ${link.class}`}
          href={link.url}
          rel="external noreferrer noopener"
          target="_blank"
        >
          <span className="social-link-text">
            {link.title}
          </span>
        </a>
      </li>
    ))

    return (
      <footer className="footer">
        <ul className="social-links">
          { links }
        </ul>
      </footer>
    )
  }
}
