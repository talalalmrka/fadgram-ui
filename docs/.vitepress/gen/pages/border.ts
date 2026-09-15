import { Generator } from "../Generator";
import { borderRadiuses, colors, jsonPretty } from "../helpers";
export const borderStyles = ["dotted", "dashed", "double"] as const;

export type BorderStyle = (typeof borderStyles)[number];
interface BorderOptions {
  style?: string;
  color?: string;
  size?: number;
  radius?: string | number;
  className?: string;
}
class BorderGenerator extends Generator {
  constructor() {
    super("components/border.md", {
      icon: "bi-dash-square-dotted",
      // order: 6,
    });
  }

  async border(options: BorderOptions = {}) {
    const {
      style = undefined,
      color = undefined,
      size = undefined,
      radius = undefined,
      className = undefined,
    } = options;

    const radiusClass = this.cssClasses({
      rounded: !radius,
      [`rounded-${radius}`]: radius && radius !== "",
    });

    const classes = this.cssClasses(
      "border",
      "p-2",
      {
        [`border-${style}-${color}`]: style && color,
        [`border-${color}`]: !style && color,
        [`border-${size}`]: size,
      },
      radiusClass,
      className,
    );
    const content = ["Border", style, color, size, radiusClass]
      .filter(Boolean)
      .join(" ");
    return `<div class="${classes}">${content}</div>`;
  }

  async borderColor(style?: BorderStyle): Promise<string> {
    return await this.html(
      await this.contents(
        colors.map(
          async (color) =>
            await this.border({
              style: style,
              color: color,
            }),
        ),
      ),
    );
  }

  async borderSize(): Promise<string> {
    return await this.html(
      await this.contents(
        this.range(1, 5).map(
          async (size) =>
            await this.border({
              size: size,
            }),
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
            className: "space-y-3",
          }),
        ]),
      ),
    );
  }
  async borderRadius(): Promise<string> {
    return await this.html(
      await this.contents(
        borderRadiuses.map(
          async (radius) =>
            await this.border({
              radius: radius,
            }),
        ),
      ),
    );
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.border()),

      this.h2("Border color"),
      await this.codePreview(await this.borderColor(), {
        className: "space-y-3",
      }),

      this.h2("Border size"),
      await this.codePreview(await this.borderSize(), {
        className: "space-y-3",
      }),

      this.h2("Border style"),
      await this.borderStylesContent(),

      this.h2("Border radius"),
      await this.codePreview(await this.borderRadius(), {
        className: "space-y-3",
      }),
    ];
  }
}

new BorderGenerator().generate();
