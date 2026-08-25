// .vitepress/sidebars/sidebar.ts
import type { DefaultTheme } from "vitepress";

const navbar: DefaultTheme.NavItem[] = [
  {
    text: "Guide",
    items: [
      {
        text: "Installation",
        link: "/installation",
      },
      {
        text: "Colors",
        link: "/colors",
      },
      {
        text: "Typography",
        link: "/typography",
      },
      {
        text: "Background",
        link: "/background",
      },
      {
        text: "Flex",
        link: "/flex",
      },
      {
        text: "Buttons",
        link: "/buttons",
      },
      {
        text: "Examples",
        items: [
          {
            text: "Markdown Examples",
            link: "/markdown-examples",
          },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
  },
];

export default navbar;
