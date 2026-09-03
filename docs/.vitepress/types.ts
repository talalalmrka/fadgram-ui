import type { DefaultTheme } from "vitepress";

export type NavItem =
  | DefaultTheme.NavItemComponent
  | DefaultTheme.NavItemWithLink
  | DefaultTheme.NavItemChildren;

export interface SidebarItem extends DefaultTheme.SidebarItem {
  icon?: string;
  items?: SidebarItem[];
}

export namespace SidebarItem {
  export function toNavItem(item: SidebarItem): NavItem {
    const textWithIcon = item.icon
      ? `<i class="icon ${item.icon}"><i><span>${item.text}</span>`
      : item.text;
    if (item.items?.length) {
      return {
        text: textWithIcon,
        items: item.items.map(toNavItem),
      };
    }

    return {
      text: textWithIcon,
      link: item.link,
    };
  }

  export function toNavItems(items: SidebarItem[]): NavItem[] {
    return items.map(toNavItem);
  }
}
