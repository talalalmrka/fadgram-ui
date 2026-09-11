import { Generator } from "../Generator.ts";
import { colors } from "../helpers";
export interface ProgressOptions{
  value?: number;
  className?: string;
  barClassName?: string;
}
class ProgressGenerator extends Generator {
  constructor() {
    super("progress.md");
  }

  async progress(options: ProgressOptions = {}):Promise<string>{
    const {
      value = 75,
      className = undefined,
      barClassName = undefined,
    } = options;
    const classes = this.cssClasses('progress', className);
    const barClasses = this.cssClasses('progress-bar', barClassName);
    return await this.html(`<div class="${classes}" role="progressbar">
    <div class="${barClasses}" style="width: ${value}%;">${value}%</div>
</div>`);
  }
  async progressColors(): Promise<string> {
    return await this.html(await this.contents(colors.map(async (color) => await this.progress({
      className: `progress-${color}`
    }))));
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.progress()),
      this.h2("Progress color"),
      await this.codePreview(await this.progressColors(), {className: 'space-y-2'}),
      this.h2("Progress value"),
      await this.codePreview(await this.progressColors(), {className: 'space-y-2'}),
      /*await this.contents(colors.map(async (color) => await this.contents([
        this.h3(`.progress-${color}`),
        await this.codePreview(await this.progress({
          className: `progress-${color}`,
        })),
      ]))),*/
    ];
  }
}

new ProgressGenerator().generate();
