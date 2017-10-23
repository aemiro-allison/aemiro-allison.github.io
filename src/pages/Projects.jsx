import React from 'react';
import EditIcon from 'react-icons/lib/fa/edit';
// http://artist-roger-22830.bitballoon.com/
// https://simply-weather-app.herokuapp.com/
// https://agile-cliffs-12286.herokuapp.com/
// https://ontrack-productivity-app.herokuapp.com

const openNewWindowAtUrl = url => e => {
  e.preventDefault();
  e.stopPropagation();
  window.open(url);
}

const iconStyle = {
  fontSize: '1.25rem',
};

const Projects = () => (
  <section className="page">

 <div className="container-fluid" style={{ overflow: 'hidden' }}>
    <h1 className="page-title">Projects</h1>

    <h2>Web Apps</h2>
    <div className="projects-container">
      <div className="card">
        <div onClick={openNewWindowAtUrl("http://artist-roger-22830.bitballoon.com/")}>
          <img className="card-image" src="assets/images/nyan-cat-chase.png" alt="Nyan Cat Chase - landing page screenshot" />
          <div className="card-content">
            <h3 className="card-title">Nyan Cat Chase</h3>

            <button className="card-source" onClick={openNewWindowAtUrl("https://git.generalassemb.ly/aemiro-allison/project-1")}>
             <EditIcon style={iconStyle} /> Source
            </button>

            <p className="card-desc">This game uses a basic physics engine which allows features such as gravity and in-game collisions etc. to work. The game was made more interactive and lively by utilizing the physics engine mentioned above, along with CSS animations.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div onClick={openNewWindowAtUrl("https://ontrack-productivity-app.herokuapp.com")}>
          <img className="card-image" src="assets/images/on-track-app.png" alt="Simply weather app - screenshot" />
          <div className="card-content">
            <h3 className="card-title">OnTrack Productivity App</h3>

            <button className="card-source" onClick={openNewWindowAtUrl("https://git.generalassemb.ly/aemiro-allison/on-track")}>
             <EditIcon style={iconStyle} /> Source
            </button>

            <p className="card-desc">Fight off your overwelming load of things to do with OnTrack. OnTrack is a one stop solution
            for all your organizing needs. Our app will intelligently schedule users&#39; task do be done in the most efficient
            way possible; creating more time for you to enjoy life.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div onClick={openNewWindowAtUrl("https://agile-cliffs-12286.herokuapp.com/")}>
          <img className="card-image" src="assets/images/build-a-smoothie.png" alt="Build a Smoothie - landing page screenshot" />
          <div className="card-content">
            <h3 className="card-title">Build a Smoothie</h3>

            <button className="card-source" onClick={openNewWindowAtUrl("https://git.generalassemb.ly/aemiro-allison/project-2")}>
              <EditIcon style={iconStyle} /> Source
            </button>

            <p className="card-desc">The "Build a Smoothie" website will allow users to create, view, update or delete smoothies.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div onClick={openNewWindowAtUrl("https://simply-weather-app.herokuapp.com/")}>
          <img className="card-image" src="assets/images/simply-weather-app.png" alt="Simply weather app - screenshot" />
          <div className="card-content">
            <h3 className="card-title">Simply Weather App</h3>

            <button className="card-source" onClick={openNewWindowAtUrl("https://github.com/aemiro-allison/simply-weather-app")}>
             <EditIcon style={iconStyle} /> Source
            </button>

            <p className="card-desc">A simple weather application that allows users to create, view, update and delete the weather for entered locations across the world.</p>
          </div>
        </div>
      </div>
    </div>

    <h2>Articles</h2>
    <div className="projects-container">
      <a href="https://medium.com/@aemiro.allison/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76">
        <div className="card">
          <img className="card-image" src="https://cdn-images-1.medium.com/max/2000/1*RpcwelDN22hysIviXiW95w.png" alt="medium article main image" />
          <div className="card-content">
            <h3 className="card-title">Deploying a Node.js + PostgreSQL app to Heroku Hosting Platform</h3>
            <p className="card-desc">A guide to help developers get started with hosting their Node.js apps with a Postgres database on the Heroku hosting platform.</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
);


export default Projects;
