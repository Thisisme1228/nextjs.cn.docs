import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Reverse the sidebar items ordering (including nested category items)
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === "category") {
      return { ...item, items: reverseSidebarItems(item.items) };
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}

const config: Config = {
  title: "Next.js",
  tagline: "中文网站",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Thisisme1228", // Usually your GitHub org/user name.
  projectName: "nextjs.cn.docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "zh-Hans",
  //   locales: ["zh-Hans"],
  // },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/vercel/next.js/blob/canary/docs/01-getting-started/index.mdx",
          breadcrumbs: false,
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/vercel/next.js/blob/canary/docs/01-getting-started/index.mdx",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      // title: "14",
      logo: {
        alt: "Next.js",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "中文文档",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://nextjs.org/docs",
          label: "英文文档",
          position: "right",
        },
        {
          href: "https://vercel.com/new",
          label: "部署",
          position: "right",
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    algolia: {
      appId: "AUJYIQ70HN",
      apiKey: "25243dbf9049cf036e87f64b361bd2b9",
      indexName: "nextjs.cn.docs",
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "中文文档出处：Thisisme1228/nextjs.cn.docs 仓库",
          position: "center",
          href: "https://github.com/Thisisme1228/nextjs.cn.docs",
        },
      ],
      copyright: `本站点用于展示 Next.js 14中文文档，所有中文文档由个人翻译. `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
