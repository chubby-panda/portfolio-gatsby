import React from "react"
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <form method="post" action="https://formspree.io/f/mgepyzzd">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="_replyto" />
        </div>
        <div className="form-item">
          <label htmlFor="message">Message</label>
          <textarea id="message" type="text" name="message" />
        </div>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
