import { Generator } from "../Generator";
import { buttonSizes, colors } from "../helpers";

interface ButtonOptions {
  label?: string;
  color?: string;
  gradient?: boolean;
  outline?: boolean;
  pill?: boolean;
  size?: string;
  circle?: boolean;
  className?: string;
}

interface ButtonsGridOptions {
  outline?: boolean;
  gradient?: boolean;
  pill?: boolean;
  circle?: boolean;
  className?: string;
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
    super("components/buttons.md", {
      icon: "mdi-square-rounded-outline",
      // order: 8,
    });
  }

  button({
    label = undefined,
    color = undefined,
    gradient = false,
    outline = false,
    pill = false,
    size = undefined,
    circle = false,
    className = undefined,
  }: ButtonOptions = {}) {
    const classes = this.cssClasses(
      {
        btn: !circle && !color,
        [`btn-${color}`]: color && !circle && !gradient && !outline,
        [`btn-gradient-${color}`]: !circle && color && gradient && !outline,
        [`btn-outline-${color}`]: !circle && color && outline && !gradient,
        pill: pill,
        [`btn-${size}`]: size && !circle,
        [`btn-circle`]: !color && circle && !gradient && !outline,
        [`btn-circle-${color}`]: color && circle && !gradient && !outline,
        [`btn-circle-outline-${color}`]:
          color && circle && outline && !gradient,
        [`btn-circle-gradient-${color}`]:
          color && circle && gradient && !outline,
        [`btn-circle-${size}`]: size && circle,
      },
      className,
    );
    const colorLabel = color ? this.ucfirst(color) : undefined;
    const sizeLabel = size ? this.ucfirst(size) : undefined;
    let buttonLabel = label ?? colorLabel ?? sizeLabel ?? "Button";
    if (circle && className !== "btn-backtop show") {
      buttonLabel = '<i class="icon bi-command"></i>';
    }
    return `<button type="button" role="button" class="${classes}">${buttonLabel}</button>`;
  }

  async buttonsGrid({
    gradient = false,
    outline = false,
    pill = false,
    circle = false,
    className = undefined,
  }: ButtonsGridOptions = {}): Promise<string> {
    return await this.contents(
      colors.map((color) =>
        this.button({
          label: this.ucfirst(color),
          color: color,
          outline: outline,
          gradient: gradient,
          pill: pill,
          circle: circle,
          className: className,
        }),
      ),
    );
  }

  async buttonSizeGrid({
    gradient = false,
    outline = false,
    pill = false,
    circle = false,
    className = undefined,
  }: ButtonsGridOptions = {}): Promise<string> {
    return await this.contents(
      buttonSizes.map((size) =>
        this.button({
          label: this.ucfirst(size),
          color: "primary",
          outline: outline,
          gradient: gradient,
          pill: pill,
          size: size,
          circle: circle,
          className: className,
        }),
      ),
    );
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
      this.h2("Button"),

      this.h3("Basic usage"),
      await this.codePreview(await this.button()),

      this.h3("Button color"),
      await this.codePreview(await this.buttonsGrid(), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h3("Button outline"),
      await this.codePreview(await this.buttonsGrid({ outline: true }), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h3("Button gradient"),
      await this.codePreview(await this.buttonsGrid({ gradient: true }), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h3("Button pill"),
      await this.codePreview(await this.buttonsGrid({ pill: true }), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h3("Button outline pill"),
      await this.codePreview(
        await this.buttonsGrid({ pill: true, outline: true }),
        {
          className: "flex flex-wrap items-baseline gap-3",
        },
      ),

      this.h3("Button gradient pill"),
      await this.codePreview(
        await this.buttonsGrid({ pill: true, gradient: true }),
        {
          className: "flex flex-wrap items-baseline gap-3",
        },
      ),

      this.h3("Button size"),
      await this.codePreview(await this.buttonSizeGrid(), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h2("Button circle"),
      this.h3("Basic usage"),
      await this.codePreview(this.button({ circle: true })),

      this.h3("Button circle color"),
      await this.codePreview(await this.buttonsGrid({ circle: true }), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h3("Button circle outline"),
      await this.codePreview(
        await this.buttonsGrid({ circle: true, outline: true }),
        {
          className: "flex flex-wrap items-baseline gap-3",
        },
      ),

      this.h3("Button circle gradient"),
      await this.codePreview(
        await this.buttonsGrid({ circle: true, gradient: true }),
        {
          className: "flex flex-wrap items-baseline gap-3",
        },
      ),

      this.h3("Button circle size"),
      await this.codePreview(await this.buttonSizeGrid({ circle: true }), {
        className: "flex flex-wrap items-baseline gap-3",
      }),

      this.h2("Button group"),

      this.h3("Basic usage"),
      await this.codePreview(await this.buttonGroup()),

      this.h3("Button group size"),
      await this.codePreview(
        await this.contents(
          buttonSizes.map(
            async (size) => await this.buttonGroup({ className: size }),
          ),
        ),
        { className: "flex flex-col gap-3 w-full overflow-x-auto" },
      ),

      this.h2("Button back top"),
      await this.codePreview(
        this.button({
          label: '<i class="icon bi-chevron-up"></i>',
          color: "primary",
          circle: true,
          className: "btn-backtop show",
        }),
      ),
      // Graidient Colors
      /*this.h2("Button Gradient Colors"),
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
      ),*/
    ];
  }
}

new ButtonsGenerator().generate();
