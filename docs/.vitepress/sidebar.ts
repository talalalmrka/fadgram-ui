// .vitepress/sidebars/sidebar.ts
// import type { DefaultTheme } from "vitepress";
import pages from "./pages";
import { Page, SidebarItem } from "./types";

const children: SidebarItem[] = [
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
  {
    text: "Markdown",
    icon: "bi-markdown",
    link: "/markdown",
  },
  {
    text: "Code",
    icon: "bi-code",
    link: "/code",
  },
  {
    text: "Tips",
    icon: "bi-info-circle",
    link: "/tips",
  },
  {
    text: "Markdown in vue",
    icon: "bi-markdown",
    link: "/md-in-vue",
  },
  {
    text: "Plugin tabs",
    icon: "bi-folder",
    link: "/plugin-tabs",
  },
  {
    text: "Storyboard",
    icon: "bi-pen",
    link: "/storyboard",
  },
  {
    text: "Data",
    icon: "bi-database",
    link: "/data",
  },
];

const sidebar: SidebarItem[] = [
  ...pages.map((page: Page) => Page.toSidebarItem(page)),
  ...[
    {
      text: "Expanded group",
      icon: "bi-arrows-expand",
      collapsed: false,
      items: children,
    },
    {
      text: "Collapsed group",
      icon: "bi-arrows-collapse",
      collapsed: true,
      items: children,
    },
    {
      text: "Layouts",
      icon: "bi-grid-fill",
      base: "/layouts/",
      items: [
        {
          text: "Home",
          icon: "bi-house-fill",
          link: "home",
        },
        {
          text: "Doc",
          icon: "bi-code",
          link: "doc",
        },
        {
          text: "Page",
          icon: "bi-file",
          link: "page",
        },
        {
          text: "None",
          icon: "bi-x-lg",
          link: "none",
        },
      ],
    },
  ],
];
const sidebarr: SidebarItem[] = [
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
    text: "Theme",
    icon: "bi-brush",
    link: "/theme",
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
    text: "Border",
    icon: "bi-dash",
    link: "/border",
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
    text: "Overview Card",
    icon: "bi-postcard-heart-fill",
    link: "/overview-card",
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
    link: "navbar",
  },
  {
    icon: "bi-tag-fill",
    text: "Badge",
    link: "badge",
  },
  {
    icon: "bi-bar-chart",
    text: "Progress bar",
    link: "progress-bar",
  },
  {
    icon: "bi-layout-sidebar-inset",
    text: "Offcanvas",
    link: "offcanvas",
  },
  {
    icon: "bi-info-square",
    text: "Alert",
    link: "alert",
  },
  {
    text: "Segmented control",
    icon: "bi-toggle-off",
    link: "/segmented-control",
  },
  {
    icon: "bi-table",
    text: "Table",
    link: "table",
  },
  {
    icon: "bi-cloud",
    text: "Shadow",
    link: "shadow",
  },
  {
    icon: "bi-chat-left-dots",
    text: "Tooltip",
    link: "tooltip",
  },
  {
    icon: "bi-window",
    text: "Modal",
    link: "modal",
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
    link: "toast",
  },
  {
    icon: "bi-segmented-nav",
    text: "Pagination",
    link: "pagination",
  },
  {
    text: "Expanded group",
    icon: "bi-arrows-expand",
    collapsed: false,
    items: children,
  },
  {
    text: "Collapsed group",
    icon: "bi-arrows-collapse",
    collapsed: true,
    items: children,
  },
  {
    text: "Collapsed group",
    icon: "bi-arrows-collapse",
    collapsed: true,
    items: children,
  },
];

export default sidebar;
