import React from 'react';
import GitHub from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Email from 'react-icons/lib/md/email';

const iconStyle = {
  fontSize: 100,
  color: 'yellow',
};

const Contact = () => (
  <section className="page">
    <div className="container-fluid">
      <h1 className="page-title">Contact</h1>
      <h3 style={{ textAlign: 'center' }}>Get in touch with me</h3>
      <section className="contact-gallery">
        <div className="icon-box">
          <GitHub style={iconStyle} />
          <p>Github</p>
        </div>
        <div className="icon-box">
          <LinkedIn style={iconStyle} />
          <p>LinkedIn</p>
        </div>
        <div className="icon-box">
          <Email style={iconStyle} />
          <p>Outlook.com</p>
          <small>aemiro.allison@outlook.com</small>
        </div>
      </section>
    </div>
  </section>
);

export default Contact;
