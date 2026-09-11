import { Generator } from "../Generator";
import { type ThemeColor, colors } from "../helpers";
interface ListGroupOptions{
  color?: ThemeColor;
  className?: string;
}

interface ListItem {
  content: string;
  active?: boolean;
}
const items: ListItem[] = [
  "Chat GPT",
  "DeepSeek",
  "Copilot",
  "Gemini",
  "Qwen",
  "Claued",
].map((i) => ({
  content: i,
  active: i === "DeepSeek",
}));

class ListGroupGenerator extends Generator {
  constructor() {
    super("list-group.md");
  }
  
  async group({
    color = undefined,
    className = undefined,
  }: ListGroupOptions = {}){
    const classes = this.cssClasses('list-group', {
      [`list-group-${color}`]: color,
    }, className);
    return await this.html(`<div class="${classes}">
    ${items.map((item: ListItem) => `<div class="${this.cssClasses('list-group-item', {'active': item.active})}">${item.content}</div>`).join("\n")}
</div>`);
  }
  
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.group()),
      
      this.h2("List group flush"),
      await this.codePreview(await this.group({className: "list-group-flush"})),
      
      this.h2("List group color"),
      await this.contents(colors.map(async (color: ThemeColor) => await this.contents([
        this.h3(`List group ${color}`),
        this.codePreview(await this.group({color: color})),
      ]))),
    ];
  }
}

new ListGroupGenerator().generate();
