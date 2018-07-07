import React from 'react'
import { withSiteData } from 'react-static'
//
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">
            Your Name: <input id="name" type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email: <input id="email" type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message: <textarea id="message" name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}


export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Hello World</h1>
    <ContactForm />
  </div>
))
