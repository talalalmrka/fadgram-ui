import { Generator } from "../Generator";
import prettier from "prettier";

class FlexGenerator extends Generator {
  constructor() {
    super("flex.md");
  }

  item(num: number) {
    return `<div class="bg-red h-12 w-12 text-white text-center rounded flex items-center justify-center">${num}</div>`;
  }

  async flex(gap: number): Promise<string> {
    return await this.contents([
      `<div class="flex-space-${gap}">`,
      this.range(1, 3)
        .map((num) => this.item(num))
        .join("\n"),
      "</div>",
    ]);
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.flex(3)),

      this.h2("Flex gap"),
      await this.contents(
        this.range(0, 12).map(async (gap) =>
          this.contents([
            this.h3(`.flex-space-${gap}`),
            await this.codePreview(await this.flex(gap)),
          ]),
        ),
      ),
    ];
  }
}

new FlexGenerator().generate();
