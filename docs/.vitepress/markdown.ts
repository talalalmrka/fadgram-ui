import markdownItContainer from "markdown-it-container";
import type MarkdownIt from "markdown-it";

export function configureMarkdown(md: MarkdownIt) {
  md.use(markdownItContainer, "code", {
    validate(info) {
      return info.trim().startsWith("{");
    },

    render(tokens, index) {
      const token = tokens[index];

      if (token.nesting === 1) {
        const options = JSON.parse(token.info.trim());

        const language = options.language ?? "";
        const title = options.title ? ` [${options.title}]` : "";

        return `::: code-group\n\n\`\`\`${language}${title}\n`;
      }

      return "```\n\n:::\n";
    },
  });
}
