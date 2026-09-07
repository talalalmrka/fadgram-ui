import { Generator } from "../Generator";
import { colors } from "../helpers.ts";

class BackgroundGenerator extends Generator {
  constructor() {
    super("background.md");
  }

  async backgroundColors(gradient: boolean = false): Promise<string> {
    return await this.html(`
      <div class="space-y-3">
      ${await this.contents(
        colors.map(
          (color) =>
            `<div class="${this.cssClasses({ [`bg-${color}`]: !gradient, [`bg-gradient-${color}`]: gradient })} text-bg-${color} p-2 rounded">This is a text with background ${gradient ? "gradient " : ""}${this.ucfirst(color)}.</div>`,
        ),
      )}
      </div>
    `);
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Background color"),
      await this.codePreview(await this.backgroundColors(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Background gradient"),
      await this.codePreview(await this.backgroundColors(true), {
        language: "html",
        parser: "html",
      }),
    ];
  }
}

new BackgroundGenerator().generate();
