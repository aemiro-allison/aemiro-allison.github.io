import React, { Component } from 'react';
import { Link } from 'react-router';

/* eslint-disable react/self-closing-comp */
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: props.pathName,
      changeOnScroll: 'wrapper headroom dark-bg',
      lastScrollPos: 0,
    };
    this.updatePath = this.updatePath.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.throttle = this.throttle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 400));
  }

  componentWillReceiveProps({ pathName }) {
    if (this.state.path !== pathName) {
      this.updatePath(pathName);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  throttle(func, wait, options = {}) {
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    const later = () => {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) {
        context = null;
        args = null;
      }
    };

    return function fn() {
      const now = Date.now();
      if (!previous && options.leading === false) previous = now;
      const remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }

  handleScroll(event) {
    const scrollTop = event.target.body.scrollTop;
    const scrollStyles = ['light-bg', 'dark-bg'];
    let prefix = 'wrapper headroom';
    const allowance = 20;
    const winHeight = window.innerHeight;
    console.log('ran');

    if (Math.abs(scrollTop - this.state.lastScrollPos) < allowance) return;

    // headeroom functionality
    if (scrollTop > this.state.lastScrollPos) {
      // downscroll
      prefix += ' headroom--unpinned';
    } else {
      // upscroll
      prefix += ' headroom--pinned';
    }

    // change color and background
    if (scrollTop > 40 && this.state.path !== '/') {
      this.setState({
        changeOnScroll: `${prefix} ${scrollStyles[0]}`,
        lastScrollPos: scrollTop,
      });
    } else if (scrollTop > winHeight && this.state.path === '/') {
      this.setState({
        changeOnScroll: `${prefix} ${scrollStyles[0]}`,
        lastScrollPos: scrollTop,
      });
    } else {
      this.setState({
        changeOnScroll: `${prefix} ${scrollStyles[1]}`,
        lastScrollPos: scrollTop,
      });
    }
  }

  updatePath(path) {
    this.setState({
      path,
    });
  }

  render() {
    const paths = ['/', '/about', '/projects', '/contact'];
    const pathNames = ['Home', 'About', 'Projects', 'Contact'];
    return (
      <header className={this.state.changeOnScroll}>
        <nav className="navbar">
          <div className={this.state.path !== '/' ? 'brand black' : this.state.changeOnScroll === 'navbar dark-bg' ? 'brand white' : ''}><i className="fa fa-graduation-cap fa-2x"></i></div>
          <ul>
            {
              paths.map((el, i) => (
                <li key={el}>
                  <Link
                    className={this.state.path !== '/' ? 'black-color' : this.state.changeOnScroll === 'navbar dark-bg' ? '' : 'white-color'}
                    to={el}
                  >
                    {pathNames[i]}
                  </Link>
                </li>))
            }
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  pathName: React.PropTypes.string.isRequired,
};

Header.defaultProps = {
  pathName: '',
};

export default Header;
