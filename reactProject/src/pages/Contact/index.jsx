import React, { useState } from 'react';
import './_Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  let error = ''; 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

  
    if (!formData.name || !formData.email || !formData.message) {
      error = 'Bütün sahələri doldurun!';
    } else {
      
     
    }

    if (error) {
      alert(error);
      return;
    }


    alert('Mesajınız göndərildi!');
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
      
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button className="center" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
