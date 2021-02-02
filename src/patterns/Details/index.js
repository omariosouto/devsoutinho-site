import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

function Details({ children, icon, title }) {
  return (
    <section className="details">
        <div className="headerDetails">
            <img src={icon} width="32" height="32" title={title} />
            <h3>{title}</h3> 
        </div>
        {children}
    </section>
  );
}

Details.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string
}

export default Details;