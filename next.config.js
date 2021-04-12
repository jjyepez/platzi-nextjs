module.exports = {
  async rewrites() {
    return [
      {
        source: '/drink/:id*',
        destination: '/product/:id*',
      },
    ]
  },
  images: {
    domains: ['www.thecocktaildb.com'],
  },
}
