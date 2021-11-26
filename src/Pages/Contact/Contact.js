import React from 'react';

const Contact = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <p>How may we be of help to you?</p>
      <p>
        Send us a message by using the form below and a team member will get
        back to you as soon as possible.
      </p>
      <article>
        <form>
          <label>Name:</label>
          <input type='text' />
          <label>Email:</label>
          <input type='email' />
          <label>Phone Number:</label>
          <input type='text' />
        </form>
        <div>
          <p>
            For general enquiries, please reach us hello@freefootballodds.com
          </p>
          <p>
            For Advert & sponsorship please reach us advert@freefootballodds.com
          </p>
          <p>
            Call us on +234 813 1149 662, +254 796 118 357 (Kenya), +233 55 781
            2137 (Ghana) Working Hours - Mondays to Fridays (9am to 5pm)
            Saturdays (10am-12noon)
          </p>
        </div>
      </article>
    </div>
  );
};

export default Contact;
