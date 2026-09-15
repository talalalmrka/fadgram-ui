import { getIconifyHtml, getIconifyNames } from "@gen/iconify-helpers";
import { Generator } from "../Generator";
// import { icons } from "@iconify-json/bi";
import { fontSizes, biIcons, fgIcons, jsonPretty } from "../helpers";
// import { IconifyJSON } from "@iconify-json/bi/index.js";

class IconsGenerator extends Generator {
  constructor() {
    super("components/icons.md", {
      icon: "bi-emoji-neutral",
      // order: 14,
    });
  }

  icon(name: string, className?: string, prefix: string = "bi") {
    return getIconifyHtml(prefix, name, className);
  }

  async iconsGrid(
    className?: string,
    prefix: string = "bi",
    count: number = 5,
  ): Promise<string> {
    const icons = getIconifyNames(prefix).slice(0, count);
    return await this.html(
      icons.map((ic) => this.icon(ic, className, prefix)).join("\n"),
    );
  }

  async iconSize(
    className?: string,
    prefix: string = "bi",
    count: number = 5,
  ): Promise<string> {
    return await this.contents(
      fontSizes.map(
        async (size) =>
          await this.contents([
            this.h3(`Icon ${size}`),
            await this.codePreview(
              await this.iconsGrid(
                this.cssClasses(`text-${size}`, className),
                prefix,
                count,
              ),
              { className: "flex flex-wrap items-baseline gap-3" },
            ),
          ]),
      ),
    );
  }

  async loaders() {
    const loaderIcons = getIconifyNames("fg");
    return await this.html(
      loaderIcons
        .filter((i) => i.startsWith("loader-"))
        .map((ic) => this.icon(ic, undefined, "fg"))
        .join("\n"),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Requirments"),
      await this.md(
        await this.contents([
          "- [Iconify for Tailwind CSS 4](https://iconify.design/docs/usage/css/tailwind/tailwind4/).",
          "- [Bootstrap icons set](https://icons.getbootstrap.com).",
        ]),
      ),
      this.h2("Basic usage"),
      await this.codePreview(this.icon("house-fill", undefined, "bi")),

      this.h2("Icon Size"),
      await this.iconSize(),

      this.h2("Loaders"),
      await this.codePreview(await this.loaders(), {
        className: "flex flex-wrap gap-3 items-baseline",
      }),

      this.h2("Icons list"),
      `<IconsGrid/>`,
    ];
  }
}

new IconsGenerator().generate();
