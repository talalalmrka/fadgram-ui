import type { DefaultTheme, PageData } from "vitepress";
export interface SidebarItem extends DefaultTheme.SidebarItem {
  icon?: string;
  items?: SidebarItem[];
  order?: number;
}

export namespace SidebarItem {
  export function toFeature(item: SidebarItem): Feature {
    return {
      icon: item.icon ? `<i class="icon ${item.icon}"></i>` : "",
      title: item.text ?? "",
      link: item.link,
      details: "",
    };
  }

  export function fromPage(page: PageData) {
    return {
      text: page.title,
      icon: page.frontmatter.icon
        ? `<i class="icon ${page.frontmatter.icon}"></i>`
        : undefined,
      link: page.filePath,
    };
  }
  export function toNavItem(item: SidebarItem): DefaultTheme.NavItem {
    return {
      text: item.icon
        ? `<i class="icon ${item.icon}"></i><span>${item.text}</span>`
        : item.text,
      link: item.link,
      items: item.items?.map((child: SidebarItem) =>
        SidebarItem.toNavItem(child),
      ),
    };
  }
  /*export function toNavItem(item: SidebarItem): NavItem {
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
  }*/
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
export namespace Feature {
  export function fromSidebarItem(item: SidebarItem) {
    return {
      icon: item.icon ? `<i class="icon ${item.icon}"></i>` : undefined,
      title: item.text,
      link: item.link,
    };
  }
}
export type NavItem =
  | DefaultTheme.NavItemComponent
  | DefaultTheme.NavItemWithLink
  | DefaultTheme.NavItemChildren;

export interface SidebarOptions {
  docsDir?: string;
  basePath?: string;
  sort?: boolean;
}

export type Frontmatter = PageData["frontmatter"];
