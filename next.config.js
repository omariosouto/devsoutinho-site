module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about/',
        destination: '/sobre/',
        permanent: true, // 308 | false=307
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          }
        ]
      }
    ]
  }
}