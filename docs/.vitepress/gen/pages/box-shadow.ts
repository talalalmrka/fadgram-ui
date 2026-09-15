import { colors, ShadowSize, shadowSizes, ThemeColor } from "@gen/helpers";
import { Generator } from "../Generator";
interface ShadowOptions {
  color?: ThemeColor;
  size?: ShadowSize;
  className?: string;
  content?: string;
}
class BoxShadowGenerator extends Generator {
  constructor() {
    super("components/box-shadow.md", {
      icon: "mdi-box-shadow",
      // order: 22,
    });
  }

  shadow({
    color = undefined,
    size = undefined,
    className = undefined,
    content = undefined,
  }: ShadowOptions = {}): string {
    const shadowContent =
      content ??
      ["Box shadow", size, color, color === undefined ? "default" : undefined]
        .filter(Boolean)
        .join("\n");
    const classes = this.cssClasses(
      {
        shadow: size === undefined,
        [`shadow-${color}`]: color,
        [`shadow-${size}`]: size,
      },
      className,
    );
    return `<div class="${classes}">${shadowContent}</div>`;
  }

  async shadows(items: ShadowOptions[]): Promise<string> {
    return items
      .map((options: ShadowOptions) => this.shadow(options))
      .join("\n");
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(this.shadow({ content: "Shadow" }), {
        className: "shadows-grid",
      }),

      this.h2("Box shadow size"),
      await this.codePreview(
        await this.shadows(
          shadowSizes.map((size: ShadowSize) => ({
            size: size,
            content: `shadow-${size}`,
          })),
        ),
        { className: "shadows-grid flex flex-wrap items-baseline gap-4" },
      ),

      this.h2("Box shadow color"),
      await this.codePreview(
        await this.shadows(
          colors.map((color: ThemeColor) => ({
            color: color,
            // className: "size-24 rounded-lg",
            content: this.ucfirst(color),
          })),
        ),
        { className: "shadows-grid flex flex-wrap items-baseline gap-4" },
      ),
    ];
  }
}

new BoxShadowGenerator().generate();
