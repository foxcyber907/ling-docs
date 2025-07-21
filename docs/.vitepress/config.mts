import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LingChat Docs",
  description: "LingChat的官方文档",
  head: [
    ['link', { rel: 'icon', href: '/avatars/LingChat.png' }]
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '用户手册', link: '/manual/' },
      { text: '开发文档', link: '/develop/' },
      { text: '常见问题', link: '/faq/' },
      {
        text: '官方Q群', items: [
          { text: '安装答疑群', link: 'https://qm.qq.com/q/GTaZGFXqIQ' },
          { text: '开发者群', link: 'https://qm.qq.com/q/ekNYyVX7iM' }
        ]
      },
    ],

sidebar: {
      '/manual/': [
        {
          text: '用户手册',
          items: [
            { text: '介绍', link: '/manual/' }
          ]
        },
        {
          text: '部署方法',
          collapsed: false,
          items: [
            { text: 'Docker部署', link: '/manual/docker/' },
            { text: 'Linux部署', link: '/manual/linux/' },
            { text: 'Windows部署', link: '/manual/windows/' }
          ]}
      ],
      '/faq/': [
            {
          text: '常见错误',
              collapsed: false,
          items: [
            { text: '代码报错', link: '/faq/coding/' },
            {text: '截图错误', link: '/faq/screen/'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SlimeBoyOwO/LingChat/' }
    ],
  }
})
