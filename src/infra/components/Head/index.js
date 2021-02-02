import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title }) {
  return (
    <NextHead>
      <title>
        {title}
      </title>
      <meta name="description" content="Dev front-end, criativo e organizador de eventos para comunidade"></meta>
      <link rel="shortcut icon" href="/favicon.png"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
    </NextHead>  
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head;