import { Generator } from "../Generator";
import { colors } from "../helpers";

class BackgroundGenerator extends Generator {
  constructor() {
    super("background.md");
  }

  async backgroundColors(gradient: boolean = false): Promise<string> {
    return await this.html(
      await this.contents(
        colors.map(
          (color) =>
            `<div class="${this.cssClasses({ [`bg-${color}`]: !gradient, [`bg-gradient-${color}`]: gradient })} text-bg-${color} p-2 rounded">This is a text with background ${gradient ? "gradient " : ""}${this.ucfirst(color)}.</div>`,
        ),
      ),
    );
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Background color"),
      await this.codePreview(await this.backgroundColors(), {
        className: "space-y-3",
      }),

      this.h2("Background gradient"),
      await this.codePreview(await this.backgroundColors(true), {
        className: "space-y-3",
      }),
    ];
  }
}

new BackgroundGenerator().generate();
