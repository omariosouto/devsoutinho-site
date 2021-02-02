import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header className="headerContainer">
      <a href="/" className="eu"><img src="/eu.svg" /></a>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header;