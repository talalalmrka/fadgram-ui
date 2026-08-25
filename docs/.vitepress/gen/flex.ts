import { Generator } from "./Generator.ts";

class FlexGenerator extends Generator {
  constructor() {
    super("flex.md");
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Flex"),
      this.h3("Usage"),
      await this.source('<div class="flex-space-3">...</div>', "html", "html"),
      this.h3("Previews"),
      await this.contents(
        this.range(0, 12).map(async (gap) =>
          this.contents([
            this.h4(`.flex-space-${gap}`),
            "",
            await this.html(
              await this.contents([
                `<div class="flex flex-space-${gap}">`,
                this.contents(
                  this.range(1, 3).map(
                    (num) =>
                      `<div class="bg-red h-12 w-12 text-white text-center rounded flex items-center justify-center">${num}</div>`,
                  ),
                ),
                "</div>",
              ]),
            ),
          ]),
        ),
      ),
    ];
  }
}

new FlexGenerator().generate();
