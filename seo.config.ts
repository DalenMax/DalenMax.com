import { getPublicUrl } from '@/public-url'
import type { Metadata } from 'next'

const defineMetadata = <T extends Metadata>(metadata: T) => metadata

const publicUrl = getPublicUrl()

const seoConfig = defineMetadata({
  metadataBase: new URL(publicUrl),
  title: {
    template: '%s - Dalen Max',
    default:
      'Dalen Max - Together! We learn, build and grow'
  },
  description: 'Together! We learn, build and grow',
  openGraph: {
  themeColor: '#F6E458',
    images: `${publicUrl}/og`,
    url: publicUrl
  },
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', url: '/favicon.ico' },
    { rel: 'image/x-icon', url: '/favicon.ico' }
  ],
  twitter: {
    site: '@realDalenMax',
    creator: '@realDalenMax'
  }
})

export default seoConfig
