import { useRouter } from 'next/router'
import { useFSRoute } from 'nextra/hooks'
import seoConfig from './seo.config'
import {
  Callout,
  Card,
  Cards,
  DocsThemeConfig,
  FileTree,
  Tab,
  Tabs,
  useConfig
} from './src'
import { Steps } from './src/mdx/steps'
import { css } from './styled-system/css'
//import { Icon } from './theme/icons'
//import { languageMap } from 'translations/text'
import { Logo } from './theme/logo'
import { MyGithubIcon, MyTelegramIcon, MyXIcon, MyYoutubeIcon } from '@/icons/my-icon'

const config: DocsThemeConfig = {
  components: {
    blockquote: Callout,
    //
    Card: Card,
    Cards: Cards,
    Callout: Callout,
    FileTree: FileTree,
    Steps: Steps,
    Tab: Tab,
    Tabs: Tabs
  },
  //logo: <Icon icon="LogoWithText" />,
  logo: () => {
    return (
      <>
        <Logo height={30} />
      </>
    );
  },
  project: { link: 'https://github.com/DalenMax/TON-full-course' },
  useNextSeoProps() {
    const { frontMatter } = useConfig()

    const { route } = useRouter()
    const { url, images } = seoConfig.openGraph

    if (route === '/') {
      return { titleTemplate: 'Dalen Max - %s' }
    }

    const fsRoute = useFSRoute()
    const category = fsRoute.split('/')[2]

    const ogUrl = new URL(images)
    ogUrl.searchParams.set('title', frontMatter.title)
    if (category) ogUrl.searchParams.set('category', category)

    return {
      title: frontMatter.title,
      description: frontMatter.description,
      titleTemplate: seoConfig.title.template,
      openGraph: { url, images: [{ url: ogUrl.toString() }] }
    }
  },
  docsRepositoryBase: 'https://github.com/DalenMax/TON-full-course',
  sidebar: {
    toggleButton: true
  },
  // i18n: Object.entries(languageMap).map(([locale, text]) => ({
  //  locale,
  //  text,
  // })),
  // i18n: [
  //   { locale: 'en-US', text: 'English' },
  //   { locale: 'vi-VN', text: 'Tiếng Việt' },
  //   { locale: 'zh-CN', text: '中文' }
  // ],
  footer: {
    text: (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          gap: '4',
          width: '100%',
          fontSize: 'sm'
        })}
      >

        <a
          className={css({ color: 'current', textDecoration: 'none' })}
          href="https://x.com/realDalenMax"
        >
          Made by Dalen Max
        </a>
        <span>Copyright © {new Date().getFullYear()}</span>

        <a
          className={css({ color: 'current', textDecoration: 'none' })}
          href="https://github.com/DalenMax"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyGithubIcon />
        </a>
        <a
          className={css({ color: 'current', textDecoration: 'none' })}
          href="https://www.youtube.com/@DalenMax"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyYoutubeIcon />
        </a>
        <a
          className={css({ color: 'current', textDecoration: 'none' })}
          href="https://t.me/devanything"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyTelegramIcon />
        </a>
        <a
          className={css({ color: 'current', textDecoration: 'none' })}
          href="https://x.com/realDalenMax"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyXIcon />
        </a>
      </div>
    )
  },
  head: () => {
    const { frontMatter: meta } = useConfig()
    const { title } = meta

    return (
      <>
        {seoConfig.icons.map((icon, index) => (
          <link key={index} rel={icon.rel} href={icon.url} />
        ))}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={meta['description'] || seoConfig.description}
        />
        <meta
          name="og:title"
          content={title ? title + ' – Dalen Max' : seoConfig.title.default}
        />
        <meta
          name="og:description"
          content={meta['description'] || seoConfig.description}
        />
        <meta name="og:image" content={seoConfig.openGraph.images} />
        <meta name="og:url" content={seoConfig.openGraph.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.creator} />
        <meta name="apple-mobile-web-app-title" content="Dalen Max" />
      </>
    )
  }
}

export default config
