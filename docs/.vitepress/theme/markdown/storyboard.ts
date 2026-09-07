import container from "markdown-it-container";
import type { MarkdownIt, Token } from "markdown-it";

export function storyboardPlugin(md: MarkdownIt) {
  md.use(container, "storyboard", {
    validate(params: string) {
      return params.trim().startsWith("storyboard");
    },

    render(tokens: Token[], index: number) {
      const token = tokens[index];

      if (token.nesting === 1) {
        return `<Story>\n`;
      }

      return `</Story>\n`;
    },
  });
}
