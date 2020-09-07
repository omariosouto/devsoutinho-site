module.exports = {
  // 1) https://nextjs.org/docs/api-reference/next.config.js/trailing-slash
  // https://webmasters.googleblog.com/2010/04/to-slash-or-not-to-slash.html
  // trailingSlash: true,
  // 2) https://nextjs.org/docs/api-reference/next.config.js/redirects
  // https://moz.com/learn/seo/redirection
  async redirects() {
    return [
      {
        source: '/redirect-404',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // 3) https://nextjs.org/docs/api-reference/next.config.js/headers
  // https://gtmetrix.com/enable-gzip-compression.html#:~:text=The%20reason%20gzip%2FBrotli%20works,by%20up%20to%2070%25!
  // https://javascript.info/clickjacking
  async headers() {
    return [
      {
        source: '/',
        headers: [
          // {
          //   key: 'Content-Encoding',
          //   value: 'gzip',
          // },
          {
            key: 'x-frame-options',
            value: 'DENY',
          }
        ],
      }
    ]
  }
}