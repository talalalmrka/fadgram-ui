import { Generator } from "../Generator.ts";

class IconsGenerator extends Generator {
  constructor() {
    super("icons.md");
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
      await this.previewAndUsage(
        '<i class="icon bi-house-fill"></i>',
        2,
        "html",
      ),
      this.h2("Icons list"),
      "<IconsGrid/>",
    ];
  }
}

new IconsGenerator().generate();
