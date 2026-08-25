import { Generator } from "./Generator.ts";
import { dropdownPositions } from "./helpers.ts";

class DropdownGenerator extends Generator {
  constructor() {
    super("dropdown.md");
  }

  async dropdown(
    label = "Dropdown toggle",
    className?: string,
  ): Promise<string> {
    const classNameText = className ? ` ${className}` : "";

    return this.html(
      await this.contents([
        '<div class="dropdown">',
        `<button class="btn btn-primary dropdown-toggle">${label}</button>`,
        `<div class="dropdown-menu${classNameText}">`,
        this.contents(
          this.range(1, 3).map(
            (num) =>
              `<a href="#!" class="dropdown-link">Dropdown link ${num}</a>`,
          ),
        ),
        "</div>",
        "</div>",
      ]),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Preview"),
      await this.dropdown(),

      this.h2("Usage"),
      await this.source(await this.dropdown(), "html", "html"),

      await this.contents(
        dropdownPositions.map(async (position) =>
          this.contents([
            this.h3(position.label),

            this.h4("Preview"),
            await this.dropdown(position.label, position.class),

            this.h4("Usage"),
            await this.source(
              await this.dropdown(position.label, position.class),
              "html",
              "html",
            ),
          ]),
        ),
      ),
    ];
  }
}

new DropdownGenerator().generate();
