import type { DefaultTheme } from "vitepress";
import { SidebarItem } from "./types";
import { generateSidebar } from "./sidebar/index";

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

const navbarr: DefaultTheme.NavItem[] = [
  {
    text: "Guide",
    // items: SidebarItem.toNavItems(sidebar),
    items: navItems,
  },
];
const sidebarItems: SidebarItem[] = generateSidebar({
  docsDir: __dirname + "/..",
});
const navbar: DefaultTheme.NavItem[] = sidebarItems.map((item) =>
  SidebarItem.toNavItem(item),
);
export default navbar;
