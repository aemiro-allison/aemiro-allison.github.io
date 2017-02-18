import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <div className="bg">
      <div className="center-title">

        <h1>Hi, I&#39;m Aemiro</h1>
        <h4>I like to code cool things</h4>
        <Link to="/about">read more</Link>
          <div><img alt="meaning text" src="http://www1.nyc.gov/assets/home/images/content/home/program-nyc-lightgreen.png" className="rounded-img" /></div>
      </div>
    </div>
    <div className="container page">
      <h1 className="page-title">A Little About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid
        idunt ut lab
        ore et do
        lore magna aliqua. Ut e
        nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co
        mmodo consequat. Duis aute irure dolor in reprehenderit in vo
        luptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa
        ecat cupidatat non proident, sunt in culpa qui off
        icia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
);

export default Home;
