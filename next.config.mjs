import nextra from 'nextra'

const withNextra = nextra({
  // Tell Nextra to use the custom theme as the layout
  theme: './src/index.tsx',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  codeHighlight: true
})

export default withNextra({
  async redirects() {
    return [
      {
        source: '/(docs|docs/getting-started)',
        destination: '/docs/overview/getting-started',
        permanent: true
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/VQrkpsgSx7',
        permanent: true
      },
      {
        source: '/play',
        destination: 'https://play.panda-css.com',
        permanent: true
      },
      {
        source: '/learn',
        destination: 'https://pandamastery.com',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }]
  },
  // i18n: {
  //   locales: ["en-US", "zh-CN", "vi-VN"],
  //   defaultLocale: "en-US"
  //   //localeDetection: false
  // },
  experimental: {
    scrollRestoration: true
  }
})

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error)
})
