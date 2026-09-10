import {
  attrs,
  colors,
  ThemeColor,
  TooltipPosition,
  tooltipPositions,
} from "@gen/helpers";
import { Generator } from "../Generator";

interface TooltipOptions {
  position?: TooltipPosition;
  content?: string;
  className?: string;
  label?: string;
}
class TooltipGenerator extends Generator {
  constructor() {
    super("tooltip.md");
  }

  tooltip({
    position = undefined,
    content = undefined,
    className = undefined,
    label = undefined,
  }: TooltipOptions = {}) {
    const atts = attrs({
      type: "button",
      role: "button",
      class: this.cssClasses("btn", className),
      "data-tooltip": content ?? "Tooltip example",
      "data-tooltip-position": position,
    });
    return `<button ${atts}>${label ?? "Tooltip"}</button>`;
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(
        this.tooltip({
          label: "Basic tooltip",
          content: "This is basic tooltip.",
        }),
      ),

      this.h2("Tooltip position"),
      await this.codePreview(
        tooltipPositions.map((position: TooltipPosition) =>
          this.tooltip({
            position: position,
            label: `Tooltip ${position}`,
            content: `This is ${position} tooltip.`,
          }),
        ),
        { className: "flex flex-wrap items-baseline gap-3" },
      ),

      this.h2("Tooltip color"),
      await this.codePreview(
        colors.map((color: ThemeColor) =>
          this.tooltip({
            label: this.ucfirst(color),
            className: `tooltip-${color}`,
            content: `This is ${color} tooltip.`,
          }),
        ),
        { className: "flex flex-wrap items-baseline gap-3" },
      ),
    ];
  }
}

new TooltipGenerator().generate();
