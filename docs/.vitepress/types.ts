import type { DefaultTheme } from "vitepress";

export interface SidebarItem extends DefaultTheme.SidebarItem {
  icon?: string;
  items?: SidebarItem[] | undefined;
}
