import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LingChat Docs",
  description: "LingChat的非官方文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SlimeBoyOwO/LingChat/' }
    ]
  }
})
