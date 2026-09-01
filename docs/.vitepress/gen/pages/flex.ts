import { Generator } from "../Generator.ts";

class FlexGenerator extends Generator {
  constructor() {
    super("flex.md");
  }

  async flex(gap: number): Promise<string> {
    return await this.html(`
      <div class="flex-space-${gap}">
      ${await this.contents(
        this.range(1, 3).map(
          (num) =>
            `<div class="bg-red h-12 w-12 text-white text-center rounded flex items-center justify-center">${num}</div>`,
        ),
      )}
      </div>
    `);
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Flex"),

      this.h3("Basic usage"),
      await this.codePreview(await this.flex(3), {
        language: "html",
        parser: "html",
      }),

      this.h3("Flex gap"),
      await this.contents(
        this.range(0, 12).map(async (gap) =>
          this.contents([
            this.h4(`.flex-space-${gap}`),
            await this.codePreview(await this.flex(gap), {
              language: "html",
              parser: "html",
            }),
          ]),
        ),
      ),
    ];
  }
}

new FlexGenerator().generate();
