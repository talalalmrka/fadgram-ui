import { Generator } from "../Generator";
import { type ThemeColor, colors, fontSizes } from "../helpers";
interface RatingOptions{
  max?: number;
  value?: number;
  color?: ThemeColor;
  className?: string;
}
class RatingBarGenerator extends Generator {
  constructor() {
    super("rating-bar.md");
  }
  
  async rating({
    max = 5,
    value = 3,
    color = undefined,
    className = undefined,
  }: RatingOptions = {}){
    const classes = this.cssClasses('rating-bar', {
      [`rating-bar-${color}`]: color,
    }, className);
    return await this.html(`<div class="${classes}">
    ${this.range(1, 5).map((i) => `<span${i <= value ? ` class="active"`: ''}><i class="icon bi-star-fill"></i></span>`).join("\n")}
    </div>`);
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.rating()),
      
      this.h2("Rating bar color"),
      await this.contents(colors.map(async (color: ThemeColor) => await this.contents([
        this.h3(`Rating bar ${color}`),
        await this.codePreview(await this.rating({color: color})),
      ]))),

      this.h2("Rating bar size"),
      await this.contents(fontSizes.map(async (size) => await this.contents([
        this.h3(`Rating bar ${size}`),
        await this.codePreview(await this.rating({className: `text-${size}`})),
      ]))),
    ];
  }
}

new RatingBarGenerator().generate();
