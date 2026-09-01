import { Generator } from "../Generator.ts";
import { colors } from "../helpers.ts";
class BorderGenerator extends Generator {
  constructor() {
    super("border.md");
  }

  async borderColor(): Promise<string> {
    return await this.html(
      await this.contents(
        colors.map(
          (color) =>
            `<div class="border border-${color} p-2 rounded mb-2">This is border color ${color} div</div>`,
        ),
      ),
    );
  }

  async borderSize(): Promise<string> {
    return await this.html(
      await this.contents(
        this.range(1, 5).map(
          (size) =>
            `<div class="border border-${size} p-2 rounded mb-2">This is border size ${size} div</div>`,
        ),
      ),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(
        `<div class="border p-2 rounded">This is bordered div</div>`,
        {
          language: "html",
          parser: "html",
        },
      ),

      this.h2("Border color"),
      await this.codePreview(await this.borderColor(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Border size"),
      await this.codePreview(await this.borderSize(), {
        language: "html",
        parser: "html",
      }),
    ];
  }
}

new BorderGenerator().generate();
