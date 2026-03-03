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
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'EthGasStation',
          src: 'img/logo.svg',
          width: 28,
          height: 28,
        },
        items: [
          {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
          {to: '/docs/ai-connect/overview', label: 'AI Connect', position: 'left'},
          {to: '/docs/api/overview', label: 'API', position: 'left'},
          {to: '/docs/alerts/overview', label: 'Alerts', position: 'left'},
          {href: 'https://ethgasstation.io', label: 'App', position: 'right'},
          {
            href: 'https://github.com/ethgasstation-io/ethgasstation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'EthGasStation',
            items: [
              {label: 'App', href: 'https://ethgasstation.io'},
              {label: 'Pricing', href: 'https://ethgasstation.io/pricing'},
            ],
          },
          {
            title: 'Docs',
            items: [
              {label: 'Intro', to: '/docs/intro'},
              {label: 'AI Connect', to: '/docs/ai-connect/overview'},
              {label: 'API', to: '/docs/api/overview'},
              {label: 'Alerts', to: '/docs/alerts/overview'},
              {label: 'FAQ', to: '/docs/faq'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} EthGasStation`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
