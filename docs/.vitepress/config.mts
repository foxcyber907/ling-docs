import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "LingChat Docs",
    description: "LingChat的官方文档",
    head: [
      ['link', { rel: 'icon', href: '/avatars/LingChat.png' }]
    ],

    // Mermaid 配置
    mermaid: {
      // 可选：Mermaid 配置，参考 https://mermaid.js.org/config/
      theme: 'default',
      themeVariables: {
        primaryColor: '#ff0000'
      }
    },

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
                // { text: '从源码构建', link: '/manual/deployment/source_deploy' },
            ]
          },
          {
            text: '额外功能',
            collapsed: false,
            items: [
              { text: 'RAG 系统', link: '/manual/expand/rag' },
              { text: '语音生成', link: '/manual/expand/voice' },
              { text: '视觉功能', link: '/manual/expand/vision' }
            ]
          },
        ],
        '/faq/': [
            { text: '首页', link: '/faq/' },
          {
            text: '常见错误',
            collapsed: false,
            items: [
              { text: 'LingChat 排障速查', link: '/faq/tech/error' },
              { text: '界面与启动排障', link: '/faq/ui/' },
              { text: '安卓部署排障', link: '/faq/tech/android' },

            ]
          },
            {text: '联系与支持', link: '/faq/support'}
        ],
        '/develop/': [
          {
            text: '开发文档',
            items: [
              { text: '介绍', link: '/develop/' },
              { text: '开发流程', link: '/develop/dev_process' },
              { text: 'Windows 开发环境搭建', link: '/develop/windows_dev' },
              { text: '项目结构与实现概述', link: '/develop/project_structure' },
              {text : '剧情创作指南（测试版）',  link: '/develop/story_guide'}
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
)
