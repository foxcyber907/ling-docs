import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LingChat Docs",
  description: "LingChat的非官方文档",
  head: [
    ['link', { rel: 'icon', href: '/avatars/MaiM.png' }]
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
          { text: 'QQ安装答疑群', link: 'https://qm.qq.com/q/GTaZGFXqIQ' },
          { text: 'Telegram安装答疑群', link: 'https://t.me/aigalgame' }
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
            { text: '基于Lingchat的开发文档', link: '/manual/开发文档.md' },
            { text: 'Windows环境配置与使用指南', link: '/manual/Windows环境配置与使用指南.md' },
            { text: 'AI-Galgame 剧情创作指南', link: '/manual/AI-Galgame剧情创作指南.md' }
          ]
        },
      ],
      '/faq/': [
        {
          text: '常见错误',
          collapsed: false,
          items: [
            { text: '代码报错', link: '/faq/coding/' },
            { text: '截图错误', link: '/faq/screen/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SlimeBoyOwO/LingChat/' }
    ],
  }
})
