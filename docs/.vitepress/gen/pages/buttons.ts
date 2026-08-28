import { Generator } from "../Generator.ts";
import { buttonSizes, colors } from "../helpers.ts";

class ButtonsGenerator extends Generator {
  constructor() {
    super("buttons.md");
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Colors"),
      this.h3("Usage"),
      await this.source(
        '<button type="button" role="button" class="btn btn-primary">Button</button>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="flex flex-wrap gap-4">',
          this.contents(
            colors.map(
              (color) =>
                `<button type="button" role="button" class="btn btn-${color}">${this.ucfirst(color)}</button>`,
            ),
          ),
          "</div>",
        ]),
      ),

      this.h2("Gradient"),
      this.h3("Usage"),
      await this.source(
        '<button type="button" role="button" class="btn btn-primary gradient">Button</button>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="flex flex-wrap gap-4">',
          this.contents(
            colors.map(
              (color) =>
                `<button type="button" role="button" class="btn btn-${color} gradient">${this.ucfirst(color)}</button>`,
            ),
          ),
          "</div>",
        ]),
      ),

      this.h2("Outline"),
      this.h3("Usage"),
      await this.source(
        '<button type="button" role="button" class="btn btn-outline-primary">Button</button>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="flex flex-wrap gap-4">',
          this.contents(
            colors.map(
              (color) =>
                `<button type="button" role="button" class="btn btn-outline-${color}">${this.ucfirst(color)}</button>`,
            ),
          ),
          "</div>",
        ]),
      ),

      this.h2("Pill"),
      this.h3("Usage"),
      await this.source(
        '<button type="button" role="button" class="btn btn-primary pill">Button</button>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="flex flex-wrap gap-4">',
          this.contents(
            colors.map(
              (color) =>
                `<button type="button" role="button" class="btn btn-${color} pill">${this.ucfirst(color)}</button>`,
            ),
          ),
          "</div>",
        ]),
      ),

      this.h2("Size"),
      this.h3("Usage"),
      await this.source(
        '<button type="button" role="button" class="btn btn-sm btn-primary pill">Button</button>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents([
          '<div class="flex flex-wrap gap-4">',
          this.contents(
            buttonSizes.map(
              (size) =>
                `<div><button type="button" role="button" class="btn btn-${size} btn-primary pill">${this.ucfirst(size)}</button></div>`,
            ),
          ),
          "</div>",
        ]),
      ),

      this.h2("Button group"),
      this.h3("Usage"),
      await this.source('<div class="btn-group">...</div>', "html", "html"),
      this.h3("Preview"),
      await this.html(
        await this.contents([
          '<div class="btn-group">',
          this.contents(
            this.range(1, 3).map(
              (num) =>
                `<button type="button" class="btn btn-primary">Button ${num}</button>`,
            ),
          ),
          "</div>",
        ]),
      ),

      this.h3("Size"),
      await this.contents(
        buttonSizes.map(async (size) =>
          this.contents([
            this.h4(this.ucfirst(size)),
            await this.html(
              await this.contents([
                `<div class="btn-group ${size}">`,
                this.contents(
                  this.range(1, 3).map(
                    (num) =>
                      `<button type="button" class="btn btn-primary">Button ${num}</button>`,
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

new ButtonsGenerator().generate();
