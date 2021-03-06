import React, { Component } from 'react';
import { Link } from 'react-router';
import Graduate from 'react-icons/lib/fa/graduation-cap';

/* eslint-disable react/self-closing-comp */
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: props.pathName,
    };
    this.updatePath = this.updatePath.bind(this);
  }

  componentWillReceiveProps({ pathName }) {
    if (this.state.path !== pathName) {
      this.updatePath(pathName);
    }
  }

  updatePath(path) {
    this.setState({
      path,
    });
  }

  render() {
    const paths = ['/', '/projects', '/about', '/contact'];
    const pathNames = ['Home', 'Projects', 'About', 'Contact'];

    return (
      <header id="headroom">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">
              <Graduate size={23} color={'#ddd'} />
            </Link>
          </div>
          <ul>
            {
              paths.map((el, i) => (
                <li className="navbar-link" key={el}>
                  <Link
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
