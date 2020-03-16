module.exports = {
  title: 'Sauce Labs Technical Docs',
  description: 'Code Snippets for Sauce Labs',
  serviceWorker: true,
  theme: 'craftdocs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/about/', 'About'],
      ['/contact/', 'Contact'],
      ['/parallel/', 'Parallel Testing']
    ],
    codeLanguages: {
      java: 'Java',
      csharp: 'C#',
      cs: "C#",
      python: 'Python',
      py: 'Python',
      sh: 'Mac',
      powershell: 'Windows'
    }
  },
  markdown: {
    anchor: {
      level: [2, 3]
    },
    config(md) {
      let markup = require('vuepress-theme-craftdocs/markup')
      md.use(markup)
      md.use(require('markdown-it-fontawesome'))
    }
  }
}
