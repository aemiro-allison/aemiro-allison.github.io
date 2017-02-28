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
      <h1 className="page-title">Contact Me</h1>
      <h3 style={{ textAlign: 'center' }}>Feel free to get in touch with me</h3>
      <section className="contact-gallery">
        <a className="icon-box" href="http://github.com/aemiro-allison">
          <GitHub style={iconStyle} />
          <p>Github</p>
        </a>
        <a className="icon-box" href="http://linkedin.com/in/aemiro-allison">
          <LinkedIn style={iconStyle} />
          <p>LinkedIn</p>
        </a>
        <a className="icon-box" href="mailto:aemiro.allison@outlook.com">
          <Email style={iconStyle} />
          <p>Outlook.com</p>
          <small>aemiro.allison@outlook.com</small>
        </a>
      </section>
    </div>
  </section>
);

export default Contact;
