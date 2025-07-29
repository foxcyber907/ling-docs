// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import AudioBox from './AudioBox.vue'
import TeamPage from './TeamPage.vue'

import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

// Vuetify - 使用动态导入避免 SSR 问题
let vuetify: any = null

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    app.component('AudioBox', AudioBox)
    app.component('TeamPage', TeamPage)

    if (typeof window !== 'undefined') {
      const { createVuetify } = await import('vuetify')
      const components = await import('vuetify/components')
      const directives = await import('vuetify/directives')

      await import('vuetify/styles')
      await import('@mdi/font/css/materialdesignicons.css')

      vuetify = createVuetify({
        components: components.default || components,
        directives: directives.default || directives,
        theme: {
          defaultTheme: 'light',
          themes: {
            light: {
              colors: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
              },
            },
            dark: {
              colors: {
                primary: '#2196F3',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
              },
            },
          },
        },
      })

      app.use(vuetify)
    }

    app.use(NolebaseGitChangelogPlugin, {
      locales: {
        'zh-CN': {
          changelog: {
            title: null,
            noData: '暂无更新记录',
            lastEdited: '最后编辑于',
            viewFullHistory: '查看完整历史',
            committedOn: '提交于',
          }
        }
      }
    })
  }
} satisfies Theme
