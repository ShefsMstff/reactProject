import React from 'react'
import './_Contact.scss'
const Contact = () => {
  return (
    <div className="contact">
     <form>
        <h1>Contact Us</h1>
        <hr />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="name@example.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter your message"></textarea>

        <button className='center' type="submit">Send</button>
      </form>
      
    </div>
  )
}

export default Contact