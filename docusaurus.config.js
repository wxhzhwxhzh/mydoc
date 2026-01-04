// @ts-check
// 引入代码高亮主题
const { themes } = require('prism-react-renderer');
// 引入数学公式插件
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- 基础信息 ---
  title: 'Fuer Yang',
  tagline: 'Geophysics | InSAR | Fault Inversion', // 你的学术标签
  favicon: 'img/favicon.ico',

  // --- GitHub Pages 部署配置 ---
  url: 'https://wxhzhwxhzh.github.io', 
  baseUrl: '/FuerYang/', // 你的仓库名，必须前后有斜杠
  organizationName: 'wxhzhwxhzh', 
  projectName: 'FuerYang',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn', // 链接错误时警告而不是报错停止
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  // --- 插件配置 ---
  plugins: [
    // 搜索插件（你原本选择的）
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexBlog: true,
        indexDocs: true,
      },
    ],
  ],

  // --- 数学公式样式表 ---
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 开启文档部分的数学公式支持
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '近期随笔',
          blogSidebarCount: 'ALL',
          // 开启博客部分的数学公式支持
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // --- 顶部导航栏 ---
      navbar: {
        title: 'Fuer Yang', // 网站左上角标题
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg', // 建议后续换成你的头像
        },
        items: [
          // 左侧主要导航
          {
            type: 'doc',
            docId: 'intro', // 默认跳转到 docs/intro.md
            position: 'left',
            label: '📚 科研笔记',
          },
          {
            to: '/blog', 
            label: '💡 思考与随笔', 
            position: 'left'
          },
          {
            to: '/about', // 指向 src/pages/about.md
            label: '🧑‍🎓 个人简历', 
            position: 'left'
          },

          // 右侧链接
          {
            href: 'https://github.com/wxhzhwxhzh',
            label: 'GitHub',
            position: 'right',
          },
          // 语言切换（如果你以后想做双语版）
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      // --- 底部页脚 ---
      footer: {
        style: 'dark',
        links: [
          {
            title: '科研方向',
            items: [
              { label: 'InSAR 数据处理', to: '/docs/intro' },
              { label: '断层滑动反演', to: '/docs/intro' },
            ],
          },
          {
            title: '联系方式',
            items: [
              { label: 'GitHub', href: 'https://github.com/wxhzhwxhzh' },
              // 可以加邮箱 { label: 'Email', href: 'mailto:your@email.com' },
            ],
          },
          {
            title: '更多',
            items: [
              { label: '博客', to: '/blog' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fuer Yang. Built with Docusaurus.`,
      },

      // --- 代码高亮配置 ---
      prism: {
        theme: themes.github,    // 亮色模式主题
        darkTheme: themes.nightOwl, // 暗色模式主题
        // 关键：添加 MATLAB, Python, LaTeX, Shell 支持
        additionalLanguages: ['matlab', 'python', 'latex', 'bash', 'powershell'],
      },

      // --- 公告栏 (可选，不需要可以注释掉) ---
      announcementBar: {
        id: 'welcome',
        content:
          '👋 欢迎来到我的科研主页，这里记录了 InSAR 处理与断层反演的学习历程。',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;
