import { Generator } from "../Generator";
import { type ThemeColor, colors, strSlug, attrs } from "../helpers";

interface TabItem {
  id: string;
  title: string;
  content: string;
  active?: boolean;
}

interface TabsOptions {
  className?: string;
  active?: string;
}

const items: TabItem[] = [
  {
    title: "Chat GPT",
    content:
      "ChatGPT: Developed by OpenAI, ChatGPT excels in natural language interactions, offering versatile responses for tasks like answering queries, creative writing, and problem-solving. Its GPT architecture enables human-like dialogue, widely used for education, content creation, and customer support.",
  },
  {
    title: "DeepSeek",
    content:
      "DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances research with practical applications in healthcare, finance, and education. It emphasizes efficiency and accuracy, leveraging large-scale data to refine industry-specific solutions.",
  },
  {
    title: "Copilot",
    content:
      "Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding environments to auto-suggest code snippets, debug errors, and streamline development. Trained on public repositories, it accelerates programming workflows while adapting to user styles.",
  },
  {
    title: "Gemini",
    content:
      "Gemini: Google’s multimodal AI, Gemini processes text, images, and data for complex tasks like analytics and creative projects. It emphasizes seamless integration across formats, enhancing productivity in research, design, and decision-making.",
  },
].map((item, index) => ({
  id: strSlug(item.title),
  title: item.title,
  active: index === 0,
  content: item.content,
}));
class TabsGenerator extends Generator {
  constructor() {
    super("components/tabs.md", {
      icon: "bi-window-dock",
      // order: 27,
    });
  }

  tabItem(item: TabItem) {
    const atts = attrs({
      id: `tab-${item.id}`,
      type: "button",
      class: "tab",
      role: "tab",
      "aria-selected": item.active ? "true" : "false",
      "aria-controls": `panel-${item.id}`,
      ...(item.active ? { "tab-index": "-1" } : {}),
    });
    return `<button ${atts}>${item.title}</button>`;
  }

  tabPanel(item: TabItem) {
    const atts = attrs({
      id: `panel-${item.id}`,
      class: "tab-panel",
      role: "tabpanel",
      "aria-labelledby": `tab-${item.id}`,
      "aria-hidden": item.active ? "false" : "true",
      "tab-index": "0",
    });
    return `<div ${atts}>${item.content}</div>`;
  }

  async tabs({ className = undefined, active = undefined }: TabsOptions = {}) {
    const classes = this.cssClasses("tabs", className);
    const activeItem = active
      ? items.filter((item) => item.id === active)[0]
      : items[0];
    return await this.html(`
    <div class="${classes}">
    <div class="tabs-list" role="tablist" aria-label="${activeItem.title}">
    ${items.map((item: TabItem) => this.tabItem(item)).join("\n")}
    </div>
    <div class="tabs-content">
    ${items.map((item: TabItem) => this.tabPanel(item)).join("\n")}
    </div>
    </div>
    `);
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.tabs()),
      await this.contents(
        ["underline", "pills", "fill"].map(
          async (variant) =>
            await this.contents([
              this.h2(`Tabs ${variant}`),
              await this.codePreview(
                await this.tabs({ className: `tabs-${variant}` }),
              ),
            ]),
        ),
      ),
      this.h2("Tabs color"),
      await this.contents(
        colors.map(
          async (color) =>
            await this.contents([
              this.h3(`Tabs ${color}`),
              await this.codePreview(
                await this.tabs({ className: `tabs-${color}` }),
              ),
            ]),
        ),
      ),
    ];
  }
}

new TabsGenerator().generate();
