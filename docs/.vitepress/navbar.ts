import type { DefaultTheme } from "vitepress";
import { SidebarItem } from "./types";
import { generateSidebar } from "./theme/composables/sidebar";
const sidebarItems: SidebarItem[] = generateSidebar();
const navbarItems: DefaultTheme.NavItem[] = sidebarItems.map((item) =>
  SidebarItem.toNavItem(item),
);
const navbar: DefaultTheme.NavItem[] = [
  ...navbarItems,
  ...[
    {
      component: "DarkModeToggle",
    },
  ],
];
export default navbar;
