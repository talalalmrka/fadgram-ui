import { Generator } from "../Generator";
import { colors } from "../helpers.js";

interface AlertGroupOptions {
  outline?: boolean;
  soft?: boolean;
  size?: string;
  className?: string;
}

interface AlertOptions extends AlertGroupOptions {
  color?: string;
}

class AlertGenerator extends Generator {
  constructor() {
    super("alert.md");
  }

  async fgAlert(options: AlertOptions = {}): Promise<string> {
    const {
      color = undefined,
      outline = false,
      soft = false,
      size = undefined,
      className = undefined,
    } = options;
    const classes = this.cssClasses(
      // "alert",
      {
        [`alert-${color}`]: color && !outline && !soft,
        [`alert-outline-${color}`]: color && outline && !soft,
        [`alert-soft-${color}`]: color && !outline && soft,
        [`alert-${size}`]: size,
      },
      className,
    );
    const content =
      `This is alert ` +
      [
        outline ? "outline" : undefined,
        soft ? "soft" : undefined,
        color ? color : undefined,
      ]
        .filter(Boolean)
        .join(" ");
    return await this.html(
      `<div class="${classes}" role="alert">${content}.</div>`,
    );
  }

  async alertColors(options: AlertGroupOptions = {}): Promise<string> {
    const {
      outline = false,
      soft = false,
      size = undefined,
      className = undefined,
    } = options;

    const allColors = [...["default", "info", "success", "error"], ...colors];
    return await this.html(
      await this.contents(
        allColors.map(
          async (color) =>
            await this.fgAlert({
              color: color,
              outline,
              soft,
              className,
              size,
            }),
        ),
      ),
    );
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.fgAlert()),

      this.h2("Alert Colors"),
      await this.codePreview(await this.alertColors(), {
        className: "space-y-2",
      }),

      this.h2("Alert soft"),
      await this.codePreview(await this.alertColors({ soft: true }), {
        className: "space-y-2",
      }),

      this.h2("Alert outline"),
      await this.codePreview(await this.alertColors({ outline: true }), {
        className: "space-y-2",
      }),
    ];
  }
}

new AlertGenerator().generate();
