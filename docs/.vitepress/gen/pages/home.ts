import { Generator } from "../Generator";
import config from "../../config.mjs";
import { SidebarItem, Feature } from "../../types";
import sidebar from "../../sidebar";
class HomeGenerator extends Generator {
  constructor() {
    super("index.md");
    this.initFrontmatter();
  }

  get features(): Feature[] {
    const items: SidebarItem[] = sidebar.flatMap((item) => {
      if (item.items) {
        const baseLink = item.base || "";
        const processedItems: SidebarItem[] = item.items.map((subItem) => {
          return {
            ...subItem,
            link: subItem.link ? baseLink + subItem.link : undefined,
          };
        });
        return processedItems;
      }
      return [item];
    });
    return items.map((item) => SidebarItem.toFeature(item));
  }

  initFrontmatter() {
    this.frontmatter = {
      layout: "home",
      sidebar: true,
      hero: {
        name: config.title,
        tagline: config.description,
        image: {
          src: config.themeConfig?.logo,
          alt: config.title,
        },
        actions: [
          {
            theme: "brand",
            icon: '<i class="icon bi-lightbulb-fill"></i>',
            text: "Get started",
            link: "/installation",
          },
          {
            theme: "alt",
            icon: '<i class="icon bi-grid-fill"></i>',
            text: "Components",
            link: "/buttons",
          },
        ],
      },
      features: this.features,
    };
  }
  async content(): Promise<string[]> {
    return [];
  }
}

new HomeGenerator().generate();
