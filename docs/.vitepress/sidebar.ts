// import type { DefaultTheme } from "vitepress";
//import pages, { Page } from "../pages.data";
import type { SidebarItem } from "./types";
import { generateSidebar } from "./sidebar/index";
const sidebar: SidebarItem[] = generateSidebar({
  docsDir: __dirname + "/..",
});
export default sidebar;
/*
export function createSidebar(): SidebarItem[] {
  return pages
    .filter((page: Page) => page.inSidebar !== false)
    .map((page: Page) => ({
      text: page.title,
      icon: page.icon,
      link: page.link,
    }));
}*/
