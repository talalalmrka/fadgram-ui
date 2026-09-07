import { Generator } from "../Generator";
import { colors, progressSizes } from "../helpers";

export interface ProgressOptions {
  value?: number;
  className?: string;
  barClassName?: string;
}

class ProgressBarGenerator extends Generator {
  constructor() {
    super("progress-bar.md");
  }

  async progress(options: ProgressOptions = {}): Promise<string> {
    const {
      value = 75,
      className = undefined,
      barClassName = undefined,
    } = options;
    const classes = this.cssClasses("progress", className);
    const barClasses = this.cssClasses("progress-bar", barClassName);
    return await this.html(`<div class="${classes}" role="progressbar">
    <div class="${barClasses}" style="width: ${value}%;">${value}%</div>
</div>`);
  }

  async progressColors(): Promise<string> {
    return await this.html(
      await this.contents(
        colors.map(
          async (color) =>
            await this.progress({
              className: `progress-${color}`,
            }),
        ),
      ),
    );
  }

  async progressValues(): Promise<string> {
    return await this.html(
      await this.contents(
        this.range(1, 100, 5).map(
          async (value) =>
            await this.progress({
              value: value,
            }),
        ),
      ),
    );
  }

  async progressSizes(): Promise<string> {
    return await this.html(
      await this.contents(
        progressSizes.map(
          async (size) =>
            await this.progress({
              className: `progress-${size}`,
            }),
        ),
      ),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.progress()),

      this.h2("Progress color"),
      await this.codePreview(await this.progressColors(), {
        className: "space-y-2",
      }),

      this.h2("Progress value"),
      await this.codePreview(await this.progressValues(), {
        className: "space-y-2",
      }),

      this.h2("Progress size"),
      await this.codePreview(await this.progressSizes(), {
        className: "space-y-2",
      }),
    ];
  }
}

new ProgressBarGenerator().generate();
