import { Generator } from "../Generator.ts";
import { colors, shades } from "../helpers.ts";

class ColorsGenerator extends Generator {
  constructor() {
    super("colors.md");
  }

  async content(): Promise<string[]> {
    return Promise.all(
      colors.map(async (color) => {
        const grid = await this.html(
          await this.contents([
            '<div class="grid grid-cols-4 md:grid-cols-11 gap-4">',
            ...shades.map((shade) =>
              this.contents([
                '<div class="col">',
                `<div class="h-10 w-full rounded ring ring-inset ring-black/10 dark:ring-1 dark:ring-inset dark:ring-white/10 bg-${color}-${shade}"></div>`,
                `<div class="text-xs text-muted text-center mt-1">${shade}</div>`,
                "</div>",
              ]),
            ),
            "</div>",
          ]),
        );

        return this.contents([this.h(2, this.ucfirst(color)), grid]);
      }),
    );
  }
}

new ColorsGenerator().generate();
