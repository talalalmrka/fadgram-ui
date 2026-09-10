import { icons } from "@icons/fg";
import { Generator } from "../Generator";
import { colors, alertColors, alertIcons, AlertColor } from "../helpers";

interface AlertGroupOptions {
  outline?: boolean;
  soft?: boolean;
  size?: string;
  className?: string;
  icons?: boolean;
}

interface AlertOptions extends AlertGroupOptions {
  color?: AlertColor;
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
      icons = false,
    } = options;
    const classes = this.cssClasses(
      // "alert",
      {
        alert: !color && !outline && !soft,
        [`alert-${color}`]: color && !outline && !soft,
        "alert-outline": !color && outline && !soft,
        [`alert-outline-${color}`]: color && outline && !soft,
        "alert-soft": !color && !outline && soft,
        [`alert-soft-${color}`]: color && !outline && soft,
        [`alert-${size}`]: size,
        "flex items-start sm:items-center sm:gap-2": icons,
      },
      className,
    );
    const content = [
      "This is alert",
      outline ? "outline" : undefined,
      soft ? "soft" : undefined,
      color ? color : undefined,
    ]
      .filter(Boolean)
      .join(" ");
    const alertIcon = color ? alertIcons[color] : undefined;
    const icon = icons ? alertIcon : undefined;
    const alerContent = icon
      ? `<i class="icon ${icon}"></i><div>${content}</div>`
      : content;
    return await this.html(
      `<div class="${classes}" role="alert">${alerContent}.</div>`,
    );
  }

  async alerts({
    outline = false,
    soft = false,
    size = undefined,
    className = undefined,
    icons = false,
  }: AlertGroupOptions = {}): Promise<string> {
    return await this.html(
      await this.contents(
        [undefined, ...alertColors].map(
          async (color) =>
            await this.fgAlert({
              color: color,
              outline: outline,
              soft: soft,
              className: className,
              size: size,
              icons: icons,
            }),
        ),
      ),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.fgAlert()),

      this.h2("Alert color"),
      await this.codePreview(await this.alerts(), {
        className: "space-y-2",
      }),

      this.h2("Alert soft"),
      await this.codePreview(await this.alerts({ soft: true }), {
        className: "space-y-2",
      }),

      this.h2("Alert outline"),
      await this.codePreview(await this.alerts({ outline: true }), {
        className: "space-y-2",
      }),

      this.h2("Alert with icon"),
      await this.codePreview(await this.alerts({ icons: true }), {
        className: "space-y-2",
      }),

      this.h2("Alert dashed"),

      this.h3("Alert dashed soft"),
      await this.codePreview(
        await this.alerts({ className: "border-dashed", soft: true }),
        {
          className: "space-y-2",
        },
      ),

      this.h3("Alert dashed outline"),
      await this.codePreview(
        await this.alerts({ className: "border-dashed", outline: true }),
        {
          className: "space-y-2",
        },
      ),
    ];
  }
}

new AlertGenerator().generate();
