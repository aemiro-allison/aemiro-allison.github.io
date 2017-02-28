import React from 'react';

const Home = () => (
  <div>
    <section className="landing-pg-fullscreen">
      <div className="landing-pg-title">
        <h1>Hi, I&#39;m Aemiro</h1>
        <h3>I love working on websites</h3>
        <img alt="nyc logo" src="assets/images/program-nyc-lightgreen.png" className="landing-pg-image rounded-img" />
      </div>
    </section>
    <section className="page">
      <div className="container">
        <h2 className="page-title">Who am I?</h2>
        <p>I am Aemiro Allison, a recent graduate living in Queens, New York.
           With over a year of progrmaming experience, I can deliver
           top quality websites created from concept to a fully functioning website.
           Just send me any PSD or mock up of what you would like and I will make sure that
           the finsihed website is 100% to your satifaction.</p>

        <h3>What kind of Developer am I?</h3>
        <p>I am a developer who likes to get his hands dirty in creating functional UI&#39;s for
          websites; also known as a <strong>Front End Developer</strong>. I speceialize in
          developing websites that look great on all screen sizes ranging from mobile screens to
          large desktop screens.</p>

        <h3>What can you expect from me?</h3>
        <p>What I bring to the table is the level of detail that I put into any
          project I undertake.</p>
        <ul>
          <li>I take cross <strong>browser compatability</strong> into consideration to make sure
            that your website looks great on any of the modern browsers.</li>
          <li>All assets that are used I my projects are compressed to make sure that
            visitors to your site will be able to download and access your site quickly;
            even on slow internet connections.</li>
          <li>Alot of time is also invested in making sure that all of the code used to
            make your website is optimized and performant. So that visitors can enjoy
            reading through the content of your page without expereincing freezing or lag.</li>
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
