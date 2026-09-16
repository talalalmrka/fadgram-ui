import type { DefaultTheme } from "vitepress";
import { SidebarItem } from "./types";
import { generateSidebar } from "./theme/composables/sidebar";
const sidebarItems: SidebarItem[] = generateSidebar();
const navbar: DefaultTheme.NavItem[] = sidebarItems.map((item) =>
  SidebarItem.toNavItem(item),
);
export default navbar;
