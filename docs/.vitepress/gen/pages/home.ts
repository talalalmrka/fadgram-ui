import { Generator } from "../Generator";
import config from "../../config.mjs";
import type { Feature } from "../../types";
import pages from "../../pages";
import { Page } from "../../types";
class HomeGenerator extends Generator {
  constructor() {
    super("index.md");
    this.initFrontmatter();
  }

  get features(): Feature[] {
    return pages.map((page: Page) => Page.toFeature(page));
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
