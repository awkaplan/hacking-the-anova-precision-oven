import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

const config: Config = {
  title: 'Hacking the Anova Precision Oven',
  tagline: 'A novel way to cause house fires',
  favicon: 'img/favicon.ico',

  url: 'https://awkaplan.github.io',
  baseUrl: '/hacking-the-anova-precision-oven/',

  organizationName: 'awkaplan',
  projectName: '/hacking-the-anova-precision-oven/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-JM7LJXW6R7',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/provisioning.yaml',
            id: 'provisioning',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hacking the Anova Precision Oven',
      logo: {
        alt: 'Oven Mitts',
        src: 'img/oven-mitts.png',
      },
      items: [
        {
          href: 'https://github.com/awkaplan/hacking-the-anova-precision-oven',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Hardware',
              to: '/hardware',
            },
            {
              label: 'Software',
              to: '/category/software',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/nE6uug7sWq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/awkaplan/hacking-the-anova-precision-oven',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/awkaplan/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alex Kaplan. <a href="https://creativecommons.org/licenses/by-sa/4.0/">Licensed under CC by-sa 4.0.</a>  Built with Docusaurus.<br/><a href="https://www.flaticon.com/free-icons/oven" title="oven icons">Oven icons created by Nikita Golubev - Flaticon</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
