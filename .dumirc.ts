import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components', '/mdx'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'AiPM UI is an open-source UI component library for building AIGC web apps',
  footer: 'Made with 🌿 by AiPMHub',

  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOMNDKq84Cgci4',
    repo: 'aipmhub/aipm-ui',
    repoId: 'R_kgDOMNDKqw',
  },
  nav: [
    { link: '/components/action-icon', title: 'Components' },
    { link: '/mdx/callout', title: 'Mdx' },
    { link: '/colors', title: 'Colors' },
    { link: 'http://icons.theforage.cn', mode: 'override', title: 'Icons' },
    { link: 'https://ant.design/components/overview', mode: 'override', title: 'Antd Components' },
    { link: 'https://lucide.dev/icons', mode: 'override', title: 'Lucide Icons' },
    { link: 'https://ant-design.github.io/antd-style', mode: 'override', title: 'CSSinJS' },
    { link: '/changelog', title: 'Changelog' },
  ],
  socialLinks: {
    discord: 'https://discord.gg/sYB5zSyD',
    github: homepage,
  },
  title: 'AiPM UI',
};

export default defineConfig({
  alias: {
    '@aipmorg/ui/mdx': resolve(__dirname, './src/mdx'),
  },
  apiParser: isProduction ? {} : false,
  base: '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://npm.elemecdn.com/@aipmorg/assets-favicons/assets/favicon.ico'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'AiPM UI',
});
