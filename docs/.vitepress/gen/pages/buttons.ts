import { Generator } from "../Generator";
import { buttonSizes, colors } from "../helpers.ts";

interface ButtonOptions {
  label?: string;
  className?: string;
}

interface ButtonsGridOptions {
  outline?: boolean;
  gradient?: boolean;
  className?: string;
  containerClassName?: string;
}

interface ButtonClassNameOptions {
  color: string;
  options?: ButtonsGridOptions;
}

interface ButtonGroupOptions {
  count?: number;
  className?: string;
}

class ButtonsGenerator extends Generator {
  constructor() {
    super("buttons.md");
  }

  async button({
    label = "Button",
    className = "btn-primary",
  }: ButtonOptions = {}): Promise<string> {
    const classes = this.cssClasses("btn", className);
    return `<button type="button" role="button" class="${classes}">${label}</button>`;
  }

  buttonClassName({ color, options = {} }: ButtonClassNameOptions): string {
    const { outline = false, gradient = false, className = "" } = options;
    const variant = gradient
      ? `btn-gradient-${color}`
      : outline
        ? `btn-outline-${color}`
        : `btn-${color}`;
    return this.cssClasses(variant, className);
  }

  async buttonsGrid(options: ButtonsGridOptions = {}): Promise<string> {
    const containerClass = this.cssClasses(
      "flex",
      "flex-wrap",
      "gap-3",
      "items-baseline",
      options.containerClassName,
    );

    const buttons = await this.html(
      await this.contents(
        colors.map((color) =>
          this.button({
            label: this.ucfirst(color),
            className: this.buttonClassName({ color, options }),
          }),
        ),
      ),
    );

    return this.html(`
      <div class="${containerClass}">
      ${buttons}
      </div>
    `);
  }

  async buttonsSizeGrid(options: ButtonsGridOptions = {}): Promise<string> {
    const containerClass = this.cssClasses(
      "flex",
      "flex-wrap",
      "gap-3",
      "items-baseline",
      options.containerClassName,
    );

    const buttons = await this.html(
      await this.contents(
        buttonSizes.map((size) =>
          this.button({
            label: this.ucfirst(size),
            className: this.cssClasses("btn-primary", `btn-${size}`),
          }),
        ),
      ),
    );

    return this.html(`
      <div class="${containerClass}">
      ${buttons}
      </div>
    `);
  }

  async buttonGroup(options: ButtonGroupOptions = {}): Promise<string> {
    const classes = this.cssClasses("btn-group", options.className);
    let current = 0;
    let groupColors = ["primary", "green", "blue", "red", "emerald", "sky"];
    const buttons = await this.html(
      await this.contents(
        this.range(1, 4).map((num) => {
          if (current > groupColors.length) {
            current = 0;
          }
          const color = groupColors[current];
          current++;
          return this.button({
            label: this.ucfirst(`Button ${num}`),
            className: `btn-${color}`,
          });
        }),
      ),
    );

    return this.html(`
      <div class="${classes}">
      ${buttons}
      </div>
    `);
  }

  async content(): Promise<string[]> {
    return [
      // Basic usage
      this.h2("Basic usage"),
      await this.codePreview(await this.button(), {
        language: "html",
      }),

      // Colors
      this.h2("Button Colors"),
      await this.codePreview(await this.buttonsGrid(), {
        language: "html",
      }),

      // Graidient Colors
      this.h2("Button Gradient Colors"),
      await this.codePreview(
        await this.buttonsGrid({
          gradient: true,
        }),
        {
          language: "html",
        },
      ),

      // Outline Colors
      this.h2("Button Outline Colors"),
      await this.codePreview(
        await this.buttonsGrid({
          outline: true,
        }),
        {
          language: "html",
        },
      ),

      // Pill
      this.h2("Button Pill"),
      await this.codePreview(
        await this.buttonsGrid({
          className: "pill",
        }),
        {
          language: "html",
        },
      ),

      // Size
      this.h2("Button size"),
      await this.codePreview(await this.buttonsSizeGrid(), {
        language: "html",
      }),

      // Button group
      this.h2("Button group"),

      // Basic usage
      this.h3("Basic usage"),
      await this.codePreview(await this.buttonGroup(), {
        language: "html",
      }),

      // Button group size
      this.h3("Button group size"),
      await this.codePreview(
        await this.html(
          await this.contents([
            '<div class="flex flex-col space-y-2">',
            buttonSizes.map(
              async (size) => await this.buttonGroup({ className: size }),
            ),
            "</div>",
          ]),
        ),
        {
          language: "html",
        },
      ),
    ];
  }
}

new ButtonsGenerator().generate();
