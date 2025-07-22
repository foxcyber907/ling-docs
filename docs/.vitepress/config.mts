import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LingChat Docs",
  description: "LingChat的官方文档",
  head: [
    ['link', { rel: 'icon', href: '/avatars/LingChat.png' }]
  ],

  themeConfig: {
      editLink: {
      pattern: 'https://github.com/foxcyber907/ling-docs/edit/main/docs/:path',
      text: '在 GitHub 编辑此页'
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '用户手册', link: '/manual/' },
      { text: '开发文档', link: '/develop/' },
      { text: '常见问题', link: '/faq/' },
      {
        text: '官方群聊', items: [
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
            { text: 'Windows部署', link: '/manual/deployment/win_deploy' },
            { text: 'Android部署', link: '/manual/deployment/android_deploy' },
            { text: 'Linux部署', link: '/manual/deployment/linux_deploy' },
              { text: '从源码构建', link: '/manual/deployment/source_deploy' },
          ]
        },
        // {
        //   text: '额外功能',
        //   collapsed: false,
        //   items: [
        //     { text: 'RGA', link: '/manual/deployment/win_deploy' },
        //     { text: '语音生成', link: '/manual/deployment/android_deploy' }
        //   ]
        // },
      ],
      '/faq/': [
        {
          text: '常见错误',
          collapsed: false,
          items: [
            { text: '代码报错', link: '/faq/coding/' },
            { text: '截图错误', link: '/faq/screen/' },
            {text: '联系与支持', link: '/faq/contact'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SlimeBoyOwO/LingChat/' }
    ],
        lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  }
})
