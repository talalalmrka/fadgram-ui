import { Generator } from "../Generator";
import { badgeSizes, colors } from "../helpers.js";

interface BadgeOptions {
  label?: string;
  className?: string;
}

interface BadgesOptions {
  prefix?: string;
  className?: string;
}

class BadgeGenerator extends Generator {
  constructor() {
    super("badge.md");
  }

  async badge(options: BadgeOptions = {}): Promise<string> {
    const { label = "Badge", className = "" } = options;
    const classes = this.cssClasses("badge", className);
    return await this.html(`<span class="${classes}">${label}</span>`);
  }

  async badges(options: BadgesOptions = {}): Promise<string> {
    const { prefix = "badge", className = undefined } = options;
    return await this.html(
      await this.contents(
        colors.map(
          async (color) =>
            await this.badge({
              label: this.ucfirst(color),
              className: this.cssClasses(`${prefix}-${color}`, className),
            }),
        ),
      ),
    );
  }

  async badgeSize(options: BadgesOptions = {}): Promise<string> {
    const { prefix = "badge", className = undefined } = options;
    return await this.html(
      await this.contents(
        badgeSizes.map(
          async (size) =>
            await this.badge({
              label: this.ucfirst(size),
              className: this.cssClasses(`${prefix}-${size}`, className),
            }),
        ),
      ),
    );
  }

  async content(): Promise<string[]> {
    const badgeGridClasses = "flex flex-wrap gap-3 items-baseline";
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.badge(), {
        className: badgeGridClasses,
      }),

      this.h2("Badge color"),
      await this.codePreview(await this.badges(), {
        className: badgeGridClasses,
      }),

      this.h2("Badge outline"),
      await this.codePreview(await this.badges({ prefix: "badge-outline" }), {
        className: badgeGridClasses,
      }),

      this.h2("Badge pill"),
      await this.codePreview(await this.badges({ className: "pill" }), {
        className: badgeGridClasses,
      }),

      this.h2("Badge size"),
      await this.codePreview(await this.badgeSize(), {
        className: badgeGridClasses,
      }),
    ];
  }
}

new BadgeGenerator().generate();
