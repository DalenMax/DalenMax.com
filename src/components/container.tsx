'use client'

import Image from 'next/image';
import { Cards, Card } from '../../src';
import { useRouter } from 'next/navigation';
import { MyTelegramIcon } from '@/icons/my-icon';

// SVG Icons as components
const TelegramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const translations = {
  'en': {
    greeting: "Hey! I'm Dalen Max.",
    bio: "I'm a developer specializing in blockchain and smart contracts, building decentralized applications with secure and efficient solutions. You can find me on the platforms below. I also love sharing my knowledge through blog posts here!",
    community: {
      title: "Join Our Community",
      description: "A place for developers passionate about blockchain and smart contracts. Let's learn, share, and build breakthrough projects together! 🚀"
    },
    youtube: {
      title: "Follow my YouTube channel!",
      description: "I make super easy-to-understand videos about programming, blockchain, and smart contracts. 👉 Subscribe to learn and grow together!"
    },
    twitter: {
      title: "Follow me on 𝕏",
      description: "Follow me on 𝕏 for quick updates on interesting programming tips, blockchain, and smart contracts!"
    },
    github: {
      title: "Github",
      description: "I share code and projects about blockchain and smart contracts on GitHub."
    }
  },
  'zh': {
    greeting: "嗨！我是 Dalen Max。",
    bio: "我是一名专注于区块链和智能合约的开发者，致力于构建安全高效的去中心化应用。您可以在下方平台找到我。我也喜欢在这里通过博客分享我的知识！",
    community: {
      title: "加入我们的社区",
      description: "这里是热爱区块链和智能合约的开发者的天地。让我们一起学习、分享、构建突破性项目！🚀"
    },
    youtube: {
      title: "关注我的 YouTube 频道！",
      description: "我制作超易懂的编程、区块链和智能合约视频。👉 订阅频道，让我们一起学习和成长！"
    },
    twitter: {
      title: "在 𝕏 上关注我",
      description: "在 𝕏 上关注我，获取有趣的编程技巧、区块链和智能合约的快速更新！"
    },
    github: {
      title: "Github",
      description: "我在 GitHub 上分享区块链和智能合约的代码与项目。"
    }
  },
  'vi': {
    greeting: "Xin chào! Mình là Dalen Max.",
    bio: "Mình là developer chuyên về blockchain và smart contract, xây dựng các ứng dụng phi tập trung với giải pháp an toàn và hiệu quả. Bạn có thể tìm thấy mình trên các nền tảng bên dưới. Mình cũng thích chia sẻ những gì mình biết qua các bài blog ở đây!",
    community: {
      title: "Tham gia cộng đồng của chúng tôi",
      description: "Nơi dành cho các dev đam mê blockchain và smart contract. Cùng học hỏi, chia sẻ, và xây dựng những dự án đột phá! 🚀"
    },
    youtube: {
      title: "Theo dõi kênh YouTube của mình!",
      description: "Mình làm video về lập trình, blockchain và smart contract siêu dễ hiểu. 👉 Subscribe kênh mình để cùng học và phát triển nhé!"
    },
    twitter: {
      title: "Theo dõi mình trên 𝕏",
      description: "Theo dõi mình trên 𝕏 để cập nhật nhanh các mẹo lập trình, blockchain và smart contract thú vị nhé!"
    },
    github: {
      title: "Github",
      description: "Mình chia sẻ code và dự án về blockchain, smart contract trên GitHub."
    }
  }
};

const Container = () => {
  const router = useRouter();
  // tạm thời dể tiếng việt trước fix sau
  //const { locale = 'en-US' } = router;
  const locale = 'vi';
  const t = translations[locale];

  const containerStyle = {
    maxWidth: '1260px',
    margin: '0 auto',
    padding: '2em 0',
    minHeight: 'calc(100vh - 240px)'
  };

  const contentWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2em',
    padding: '0 20px'
  };

  const textContentStyle = {
    flex: '1',
    maxWidth: '500px'
  };

  const imageStyle = {
    width: 500,
    height: 400,
    objectFit: 'cover',
    borderRadius: 8
  };

 const iconStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '8px'
  };

  return (
    <section style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={textContentStyle}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>
            {t.greeting}
          </h1>
          <p style={{ fontSize: '1.2em', lineHeight: '1.6', color: '#666' }}>
            {t.bio}
          </p>
        </div>
        <div style={{width:500, height: 400, position: 'relative'}}>
          <Image
            src="/profiles/avatar-2.jpg"
            fill
            alt="Dalen Max"
            style={{borderRadius:8}}
            objectFit='cover'
          />
      </div>
      </div>
      <Cards>
        <Card
          arrow
          title={t.community.title}
          icon = {<TelegramIcon />}
          description={t.community.description}
          href="https://t.me/devanything"
        />
        <Card
          arrow
          title= {t.youtube.title}
          icon = {<YoutubeIcon/>}
          description={t.youtube.description}
          href="https://www.youtube.com/@DalenMax"
        />
        <Card
          arrow
          title = {t.twitter.title}
          icon = {<XIcon/>}
          description={t.twitter.description}
          href="https://x.com/realDalenMax"
        />
        <Card
          arrow
          title= {t.github.title}
          icon = {<GithubIcon/>}
          description={t.github.description}
          href="https://github.com/DalenMax"
        />
      </Cards>
    </section>
  );
};

export default Container;
