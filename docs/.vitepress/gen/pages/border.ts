import { Generator } from "../Generator.ts";
import { colors } from "../helpers.ts";
// export type BorderStyle = "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export const borderStyles = ["dotted", "dashed", "double"] as const;

export type BorderStyle = (typeof borderStyles)[number];
class BorderGenerator extends Generator {
  constructor() {
    super("border.md");
  }

  async borderColor(style?: BorderStyle): Promise<string> {
    return await this.html(
      await this.contents(
        colors.map(
          (color) =>
            `<div class="border ${style ? `border-${style}-` : "border-"}${color} p-2 rounded mb-2">This is border ${style ? `${style} ` : ""}${color} div.</div>`,
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

  async borderStylesContent(): Promise<string> {
    return await this.contents(
      borderStyles.map(async (style: BorderStyle) =>
        this.contents([
          this.h3(style),
          await this.codePreview(await this.borderColor(style), {
            language: "html",
            parser: "html",
          }),
        ]),
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

      this.h2("Border style"),
      await this.borderStylesContent(),
    ];
  }
}

new BorderGenerator().generate();
