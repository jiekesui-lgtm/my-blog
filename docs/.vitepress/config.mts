import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/vitepress-blog-starter/',
  description: 'Blog included. Built on top of VitePress and UnoCSS.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: 'VitePress Blog Starter',
      copyright: 'Copyright © 2023 SFXCode',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/vitepress-blog-starter' },
    ],
    editLink: {
      pattern: 'https://github.com/sfxcode/vitepress-blog-starter/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    blog: {
      title: '孙晓杰的个人博客',
      description: "从教程地狱逃生中的前端新人，每天一篇输出记录",
    },

  },
  title: 'VitePress Blog Starter',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: '配置', link: '/config/', activeMatch: '/config/' },
    { text: '博客', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'External Docs',
      items: [
        {
          text: 'Vitepress',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'UnoCSS',
          link: 'https://uno.antfu.me',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/vitepress-blog-starter/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
        { text: 'UnoCSS', link: '/config/unocss' },
      ],
    },
  ]
}
