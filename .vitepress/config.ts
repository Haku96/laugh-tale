import { defineConfigWithTheme } from 'vitepress'
import { usePosts } from '../src/composables/usePosts'
import type { ThemeConfig } from '../src/types'

const { posts, rewrites } = await usePosts({
  pageSize: 6,
  homepage: true,
  srcDir: 'posts',
  autoExcerpt: 150,
})

export default defineConfigWithTheme<ThemeConfig>({
  title: '只抄',
  titleTemplate: 'VitePress Theme Minimalism',
  description: 'VitePress Theme Minimalism',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    posts,
    page: {
      max: 5,
    },
    logo: '/profile.png',
    outline: { level: 2 },
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/doc1' },
      { text: '分类', link: '/category' },
      { text: '标签', link: '/tags' },
      { text: '归档', link: '/archives' },
    ],
    sidebar: {
      '/docs': [
        {
          text: '如何使用电饭煲',
          items: [{ text: '选择合适的电饭煲', link: '/docs/doc1' }],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/izhichao/vitepress-theme-minimalism',
      },
    ],
    footer: {
      message:
        'Theme by <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">Minimalism</a>',
      copyright:
        'Copyright © 2017-2024 <a href="https://github.com/izhichao" target="_blank">只抄</a>',
    },
    search: { provider: 'local' },
  },
  markdown: {
    theme: 'dark-plus',
    lineNumbers: true,
  },
  srcExclude: ['README.md'],
})
