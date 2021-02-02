import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title, description = "Meu nome é Gabriel, sou dev front-end, criativo e organizador de eventos para comunidade." }) {

  return (
    <NextHead>
      <title>
        {title}
      </title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gnun.nes/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://gnun.es/meta.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gnun.nes/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://gnun.es/meta.png" />

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