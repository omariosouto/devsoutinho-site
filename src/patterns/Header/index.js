import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header>
      Esse é o Header
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header;