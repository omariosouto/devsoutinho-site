import React from 'react';
import PropTypes from 'prop-types';

function Typography({ children }) {
  return (
    <p>
      {children}
    </p>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
}

export default Typography;