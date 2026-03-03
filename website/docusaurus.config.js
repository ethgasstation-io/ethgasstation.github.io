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

  // Public docs site
  url: 'https://docs.ethgasstation.io',
  baseUrl: '/',

  // Repo metadata (used for edit links and some deploy tooling)
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
        title: 'EthGasStation Docs',
        items: [
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs'},
          {to: '/docs/ai-connect/overview', label: 'AI Connect', position: 'left'},
          {to: '/docs/api/overview', label: 'API', position: 'left'},
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
            title: 'Product',
            items: [
              {label: 'EthGasStation', href: 'https://ethgasstation.io'},
              {label: 'Pricing', href: 'https://ethgasstation.io/pricing'},
            ],
          },
          {
            title: 'Docs',
            items: [
              {label: 'Getting started', to: '/docs/intro'},
              {label: 'AI Connect (MCP)', to: '/docs/ai-connect/overview'},
              {label: 'API', to: '/docs/api/overview'},
            ],
          },
          {
            title: 'Support',
            items: [
              {label: 'FAQ', to: '/docs/faq'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EthGasStation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
