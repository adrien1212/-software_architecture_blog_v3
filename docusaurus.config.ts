import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Architecture Logicielle',
  tagline: 'Introduction aux concepts d architecture',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://softwarearchitecture.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Adrien CAUBEL', // Usually your GitHub org/user name.
  projectName: 'softwarearchitecturecourse', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          admonitions: {
            keywords: ['ressources', 'definition'],
            extendDefaults: true,
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-graph'
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: false,
        hideable: true,
      },
    },
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Architecture Logicielle',
      logo: {
        alt: 'Architecture & DDD Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs/concepts-fondamentaux',
          position: 'left',
          label: 'Concepts fondamentaux',
        },
        {
          to: '/docs/architecture-logicielle',
          position: 'left',
          label: 'Architecture logicielle',
        },
        {
          to: '/docs/architecture-monolithique',
          position: 'left',
          label: 'Architecture monolithique',
        },
        {
          to: '/docs/architecture-distribuee',
          position: 'left',
          label: 'Architecture distribuée',
        },
        {
          to: '/docs/ddd',
          position: 'left',
          label: 'DDD',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
