// .vitepress/sidebars/sidebar.ts
// import type { DefaultTheme } from "vitepress";
import type { SidebarItem } from "./types";
const sidebar: SidebarItem[] = [
  {
    text: "Installation",
    icon: "bi-gear-wide-connected",
    link: "/installation",
  },
  {
    text: "Colors",
    icon: "bi-palette",
    link: "/colors",
  },
  {
    text: "Typography",
    icon: "bi-type",
    link: "/typography",
  },
  {
    text: "Background",
    icon: "bi-palette",
    link: "/background",
  },
  {
    text: "Flex",
    icon: "bi-columns",
    link: "/flex",
  },
  {
    text: "Buttons",
    icon: "bi-square",
    link: "/buttons",
  },
  {
    text: "Dropdown",
    icon: "bi-menu-button",
    link: "/dropdown",
  },
  {
    text: "Form",
    icon: "bi-ui-checks",
    link: "/form",
  },
  {
    text: "Card",
    icon: "bi-card-heading",
    link: "/card",
  },
  {
    text: "Accordion",
    icon: "bi-arrows-collapse",
    link: "/accordion",
  },
  {
    text: "Icons",
    icon: "bi-emoji-neutral",
    link: "/icons",
  },
  {
    text: "Navbar",
    icon: "bi-segmented-nav",
    link: "navbars",
  },
  {
    icon: "bi-tag-fill",
    text: "Badges",
    link: "badges",
  },
  {
    icon: "bi-bar-chart",
    text: "Progress bar",
    link: "progressbars",
  },
  {
    icon: "bi-layout-sidebar-inset",
    text: "Offcanvas",
    link: "offcanvas",
  },
  {
    icon: "bi-info-square",
    text: "Alerts",
    link: "alerts",
  },
  {
    icon: "bi-table",
    text: "Tables",
    link: "tables",
  },
  {
    icon: "bi-cloud",
    text: "Shadows",
    link: "shadows",
  },
  {
    icon: "bi-chat-left-dots",
    text: "Tooltips",
    link: "tooltips",
  },
  {
    icon: "bi-window",
    text: "Modal",
    link: "modals",
  },
  {
    icon: "bi-list",
    text: "List Group",
    link: "listgroup",
  },
  {
    icon: "bi-star-fill",
    text: "Rating bar",
    link: "ratingbars",
  },
  {
    icon: "bi-folder",
    text: "Tabs",
    link: "tabs",
  },
  {
    icon: "bi-bell",
    text: "Toast",
    link: "toasts",
  },
  {
    icon: "bi-segmented-nav",
    text: "Pagination",
    link: "pagination",
  },
  {
    text: "Examples",
    icon: "bi-markdown",
    collapsed: true,
    items: [
      {
        text: "Markdown Examples",
        icon: "bi-markdown",
        link: "/markdown-examples",
      },
      {
        text: "Runtime API Examples",
        icon: "bi-link",
        link: "/api-examples",
      },
    ],
  },
  {
    text: "Examples",
    icon: "bi-markdown",
    items: [
      {
        text: "Markdown Examples",
        icon: "bi-markdown",
        link: "/markdown-examples",
      },
      {
        text: "Runtime API Examples",
        icon: "bi-link",
        link: "/api-examples",
      },
    ],
  },
];

export default sidebar;
