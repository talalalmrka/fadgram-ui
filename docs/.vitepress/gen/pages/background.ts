import { Generator } from "../Generator.ts";
import { colors } from "../helpers.ts";

class BackgroundGenerator extends Generator {
  constructor() {
    super("background.md");
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Background Color"),
      this.h3("Usage"),
      await this.source(
        '<div class="bg-primary text-bg-primary">this is text with background primary</div>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="space-y-2">',
          this.contents(
            colors.map(
              (color) =>
                `<div class="bg-${color} text-bg-${color} p-2 rounded mt-4">this is text with background ${color}</div>`,
            ),
          ),
          "</div>",
        ]),
      ),
      this.h2("Background Gradient"),
      this.h3("Usage"),
      await this.source(
        '<div class="bg-gradient-primary text-bg-primary">this is text with background gradient primary</div>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="space-y-2">',
          this.contents(
            colors.map(
              (color) =>
                `<div class="bg-gradient-${color} text-bg-${color} p-2 rounded mt-4">this is text with background gradient ${color}</div>`,
            ),
          ),
          "</div>",
        ]),
      ),
    ];
  }
}

new BackgroundGenerator().generate();
