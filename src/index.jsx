import React from 'react';
import reactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import pageNotFound from './pages/pageNotFound';

// eslint-disable-next-line react/prop-types
const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);


const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/contact" mapMenuTitle="Contact" component={Contact} />

    <Route path="*" mapMenuTitle="Page Not Found" component={pageNotFound} />
  </Route>
);


reactDOM.render(
  <Router
    history={hashHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
