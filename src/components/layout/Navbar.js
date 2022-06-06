import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
      <Link to="/">
        <i className={icon} />
        {'   '}
        {title}
        </Link>
      </h1>
      <ul>
      <Link to="/" className="btn btn-primary">
       Back to Search
      </Link>
  
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'GH',
  icon: 'fa fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
