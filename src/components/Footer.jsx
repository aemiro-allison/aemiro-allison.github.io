import React from 'react';
import Heart from 'react-icons/lib/fa/heart';
import GitHub from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Email from 'react-icons/lib/md/email';

const quoteNameStyle = {
  color: 'rgba(255,255,255,0.4)',
  fontStyle: 'italic',
};

const heartStyle = {
  color: 'rgb(192, 10,12)',
  fontSize: 14,
  margin: '0 2',
};

const Footer = () => (
  <footer>
    <div className="footer-content">
      <section>
        <h4>My Philosophy</h4>
        <blockquote style={{ width: '50%', minWidth: '200px' }}>
          &#34;The end of the day is going to come whether you like it
          or not. So the question is, Where do you want to be at by
          end of the day?&#34;
           <span style={quoteNameStyle}>- Aemiro Allison</span>
        </blockquote>
      </section>
      <section>
        <h4>Contact</h4>
        <div>
          <a href="http://github.com/aemiro-allison">
            <GitHub className="social-media" />
          </a>
          <a href="http://linkedin.com/in/aemiro-allison">
            <LinkedIn className="social-media" />
          </a>
          <a href="mailto:aemiro.allison@outlook.com">
            <Email className="social-media" />
          </a>
        </div>
      </section>
    </div>
    <div className="footer-made-by">
      <p>Made with <Heart style={heartStyle} /> by Aemiro Allison</p>
    </div>
  </footer>
);

export default Footer;
