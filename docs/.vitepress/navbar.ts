import type { DefaultTheme } from "vitepress";

import sidebar from "./sidebar";
import { SidebarItem } from "./types";
import { text } from "node:stream/iter";
import { link } from "node:fs";

const navItems = [
  {
    text: '<i class="icon bi-lightbulb"></i><span>Guide</span>',
    link: "/",
  },
  {
    text: '<i class="icon bi-gear-wide-connected"></i><span>Installation</span>',
    link: "/installation",
  },
  {
    text: "Other",
    items: [
      {
        text: '<i class="icon bi-lightbulb"></i><span>Guide</span>',
        link: "/",
      },
      {
        text: '<i class="icon bi-gear-wide-connected"></i><span>Installation</span>',
        link: "/installation",
      },
    ],
  },
];

const navbar: DefaultTheme.NavItem[] = [
  {
    text: "Guide",
    // items: SidebarItem.toNavItems(sidebar),
    items: navItems,
  },
];

export default navbar;
