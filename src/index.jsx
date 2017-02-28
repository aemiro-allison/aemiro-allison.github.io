import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import reactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
// import Projects from './pages/Projects';
import pageNotFound from './pages/pageNotFound';

import '../assets/css/styles.css';

// eslint-disable-next-line react/prop-types
const App = ({ children, location }) => (
  <div>
    <Header pathName={location.pathname} />
    <ReactCSSTransitionGroup
      component="div"
      transitionName="page"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      transitionAppearTimeout={1000}
    >
      {React.cloneElement(children, {
        key: location.pathname,
      })}
    </ReactCSSTransitionGroup>
    <Footer />
  </div>
);

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/contact" mapMenuTitle="Contact" component={Contact} />
    {/* <Route path="/projects" mapMenuTitle="Projects" component={Projects} /> */}

    <Route path="*" mapMenuTitle="Page Not Found" component={pageNotFound} />
  </Route>
);


reactDOM.render(
  <Router
    onUpdate={() => window.scrollTo(0, 0)}
    history={hashHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
