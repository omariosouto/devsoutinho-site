import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return (
    <footer>
      Esse é o footer
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer;