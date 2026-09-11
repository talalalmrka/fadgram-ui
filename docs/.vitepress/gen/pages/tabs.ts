import { Generator } from "../Generator";
import { type ThemeColor, colors, strSlug, attrs } from "../helpers";

interface TabItem{
  id: string;
  title: string;
  content: string;
  active?: boolean;
}

interface TabsOptions{
  className?: string;
  active?: string;
}

const items: TabItem[] = [
  {
    title: "Chat GPT",
    content: "ChatGPT: Developed by OpenAI, ChatGPT excels in natural language interactions, offering versatile responses for tasks like answering queries, creative writing, and problem-solving. Its GPT architecture enables human-like dialogue, widely used for education, content creation, and customer support.",
  },
  {
    title: "DeepSeek",
    content: "DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances research with practical applications in healthcare, finance, and education. It emphasizes efficiency and accuracy, leveraging large-scale data to refine industry-specific solutions.",
  },
  {
    title: "Copilot",
    content: "Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding environments to auto-suggest code snippets, debug errors, and streamline development. Trained on public repositories, it accelerates programming workflows while adapting to user styles.",
  },
  {
    title: "Gemini",
    content: "Gemini: Google’s multimodal AI, Gemini processes text, images, and data for complex tasks like analytics and creative projects. It emphasizes seamless integration across formats, enhancing productivity in research, design, and decision-making.",
  },
].map((i) => ({
  id: strSlug(i.title),
  title: i.title,
  content: i.content,
}))
class TabsGenerator extends Generator {
  constructor() {
    super("tabs.md");
  }
  
  async tabs({
    className = undefined,
    active = undefined,
  }: TabsOptions = {}){
    const classes = this.cssClasses(className);
    return await this.html(`
    <div aria-label="Tabs" role="tablist"${attrs({class: classes})}>
    <div class="tabs-nav">
    ${items.map((item: TabItem) => `<button type="button" role="tab" id="tab-${item.id}-btn" aria-controls="tab-${item.id}">
            ${item.title}
        </button>`).join("\n")}
    </div>
    <div class="tabs-container">
    ${items.map((item: TabItem) => `<div id="tab-${item.id}" role="tabpanel" aria-labelledby="tab-${item.id}-btn">
    <p>${item.content}</p>
    </div>`).join("\n")}
    </div>
    </div>
    `);
  }
  
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.tabs()),
    ];
  }
}

new TabsGenerator().generate();
