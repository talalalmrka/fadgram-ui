import { Generator } from "../Generator.ts";
import { dropdownPositions } from "../helpers.ts";

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
      this.h2("Basic usage"),
      await this.codePreview(await this.dropdown()),

      await this.contents(
        dropdownPositions.map(async (position) =>
          this.contents([
            this.h3(position.label),
            await this.codePreview(
              await this.dropdown(position.label, position.class),
            ),
          ]),
        ),
      ),
    ];
  }
}

new DropdownGenerator().generate();
