import { Generator } from "../Generator.ts";
// import { icons } from "@iconify-json/bi";
import { fontSizes, biIcons, fgIcons, jsonPretty } from "../helpers.ts";
// import { IconifyJSON } from "@iconify-json/bi/index.js";

class IconsGenerator extends Generator {
  constructor() {
    super("icons.md");
  }

  async testIcons(
    className?: string,
    prefix: string = "bi",
    count: number = 5,
  ): Promise<string> {
    const icons = prefix === "fg" ? fgIcons : biIcons;
    const filteredIcons = icons.slice(0, count);
    return await this.html(`
      <div class="flex flex-wrap items-center gap-4 mb-4">
      ${await this.contents(filteredIcons.map((ic) => `<i class="${this.cssClasses("icon", `${prefix}-${ic}`, className)}"></i>`))}
      </div>
      `);
  }

  async iconSize(
    className?: string,
    prefix: string = "bi",
    count: number = 5,
  ): Promise<string> {
    return await this.html(
      await this.contents(
        fontSizes.map(
          async (s) =>
            await this.testIcons(
              this.cssClasses(`text-${s}`, className),
              prefix,
              count,
            ),
        ),
      ),
    );
  }
  /* async header(): Promise<string[]> {
    return [
      await this.html(`
        <script setup>
          import fgIcons from "./.vitepress/gen/helpers";
        </script>`),
    ];
  } */
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
      await this.codePreview('<i class="icon bi-house-fill"></i>'),

      this.h2("Icon Size"),
      await this.codePreview(await this.iconSize()),

      this.h2("Icons sets"),

      this.h3("Bootstrap icons (bi)"),
      await this.codePreview(await this.testIcons()),

      this.h3("Fadgram icons (fg)"),
      await this.codePreview(await this.testIcons(undefined, "fg")),

      this.h2("Icons list"),

      this.h3("Bootstrab icon sets"),
      `<IconsGrid prefix="bi"/>`,

      this.h3("Fadgram icon sets"),
      `<IconsGrid prefix="fg"/>`,
    ];
  }
}

new IconsGenerator().generate();
