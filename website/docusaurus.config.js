// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EthGasStation Docs',
  tagline: 'Live Ethereum gas stats, alerts, API, and AI Connect (MCP).',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ethgasstation.io',
  baseUrl: '/',

  organizationName: 'ethgasstation-io',
  projectName: 'ethgasstation.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ethgasstation-io/ethgasstation.github.io/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'EthGasStation',
        items: [
          {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
          {to: '/docs/api/overview', label: 'API', position: 'left'},
          {
            href: 'https://ethgasstation.io',
            label: 'Open app',
            position: 'right',
            className: 'navbar-action navbar-action-secondary',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} EthGasStation. Support: <a href="mailto:help@ethgasstation.io">help@ethgasstation.io</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
