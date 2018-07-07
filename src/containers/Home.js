import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Hello World</h1>
    <img src={logoImg} alt="" />
    <form name="contact" method="POST" netlify netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Your Name: <input id="text" type="name" name="name" /></label>
      </p>
      <p>
        <label htmlFor="email">Your Email: <input id="email" type="email" name="email" /></label>
      </p>
      <p>
        <label htmlFor="message">Message: <textarea id="message" name="message" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
))
