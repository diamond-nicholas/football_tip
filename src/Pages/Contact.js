import React from 'react';
import('../Styles/Contact.css');

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <p>How may we be of help to you?</p>
      <p>
        Send us a message by using the form below and a team member will get
        back to you as soon as possible.
      </p>
      <article className='contactCard'>
        <form>
          <label>Name:</label> <br />
          <input type='text' /> <br />
          <label>Email:</label> <br />
          <input type='email' /> <br />
          <label>Phone Number:</label> <br />
          <input type='text' /> <br />
          <label>Message:</label> <br />
          <textarea type='textarea' />
        </form>
        <div className='right'>
          <p>
            For general enquiries, please reach us hello@freefootballodds.com
          </p>
          <p>
            For Advert & sponsorship please reach us advert@freefootballodds.com
          </p>
          <p>Call us on +234 813 1149 662</p>
          <p>
            Working Hours - Mondays to Fridays (9am to 5pm) Saturdays
            (10am-12noon)
          </p>
        </div>
      </article>
    </div>
  );
};

export default Contact;
