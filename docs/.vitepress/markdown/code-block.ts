import type { MarkdownIt } from "markdown-it";
import container from "markdown-it-container";
// import { MarkdownRenderer } from "vitepress";

export function codeBlock(md: MarkdownIt) {
  md.use(container, "code-block", {
    validate(params) {
      return true;
      // return /^code-block(?:\s+.+)?$/.test(params.trim());
    },

    render(tokens, idx) {
      const token = tokens[idx];
      console.log(token);
      const m = tokens.info.trim().match(/^code-block\s*(.*)$/);

      if (token.nesting === 1) {
        const title = m && m[1] ? m[1] : "CODE-BLOCK";
        const filename = token.info.replace(/^code-block\s*/, "").trim();

        return `
<div class="fg-code-block">
  ${
    filename
      ? `<div class="fg-code-block-header">
          <span class="fg-code-block-filename">${md.utils.escapeHtml(filename)}</span>
        </div>`
      : ""
  }
  <div class="fg-code-block-content">
`;
      }

      return `</div></div>\n`;
    },
  });
}
