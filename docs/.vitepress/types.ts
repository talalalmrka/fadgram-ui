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

export interface Page {
  title: string;
  icon?: string;
  link?: string;
  description?: string;
}

export interface Feature {
  icon?: FeatureIcon;
  title: string;
  details: string;
  link?: string;
  linkText?: string;
  rel?: string;
  target?: string;
}

export type FeatureIcon =
  | string
  | { src: string; alt?: string; width?: string; height: string }
  | {
      light: string;
      dark: string;
      alt?: string;
      width?: string;
      height: string;
    };

export namespace Page {
  export function toSidebarItem(page: Page): SidebarItem {
    return {
      text: page.title,
      icon: page.icon,
      link: page.link,
    };
  }

  export function toFeature(page: Page): Feature {
    return {
      icon: page.icon ? `<i class="icon ${page.icon}"></i>` : undefined,
      title: page.title,
      link: page.link,
      details: "Built for performance.",
    };
  }
}
