import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "开始",
      link: { type: "doc", id: "index" },
      items: [
        "getting-started/installation",
        "getting-started/project-structure",
      ],
    },
    {
      type: "autogenerated",
      dirName: "content",
    },
    // {
    //   type: "autogenerated",
    //   dirName: "getting-started", // Generate sidebar slice from docs/api
    // },
    // {
    //   type: "category",
    //   label: "Tutorials",
    //   items: [
    //     "tutorial-intro",
    //     {
    //       type: "autogenerated",
    //       dirName: "tutorials/easy", // Generate sidebar slice from docs/tutorials/easy
    //     },
    //     "tutorial-medium",
    //     {
    //       type: "autogenerated",
    //       dirName: "tutorials/advanced", // Generate sidebar slice from docs/tutorials/advanced
    //     },
    //     "tutorial-end",
    //   ],
    // },
    // {
    //   type: "autogenerated",
    //   dirName: "api", // Generate sidebar slice from docs/api
    // },
    // {
    //   type: "category",
    //   label: "Community",
    //   items: ["team", "chat"],
    // },
  ],
};

export default sidebars;
