import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Can Code, But Can It Engineer?',
  tagline: 'How to turn AI-generated code into maintainable, scalable, and secure software.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://miladtsx.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/webbook',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'miladtsx', // Usually your GitHub org/user name.
  projectName: 'webbook_programming_with_ai', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '🏠',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'webbook',
          position: 'left',
          label: 'Learn Now!',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          href: "https://github.com/miladtsx/webbook/issues",
          label: "Have feedback? Contribute on GitHub!"
        }
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
