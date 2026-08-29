import type MarkdownIt from "markdown-it";
import container from "markdown-it-container";

export function fgCode(md: MarkdownIt) {
  md.use(container, "fg-code", {
    validate(params) {
      return /^fg-code\s+/.test(params.trim());
    },

    render(tokens, idx) {
      const token = tokens[idx];

      if (token.nesting === 1) {
        const info = token.info.trim();

        const match = info.match(
          /^fg-code\s+(\S+)(?:\s+\[([^\]]+)\])?$/,
        );

        const language = match?.[1] ?? "";
        const filename = match?.[2] ?? "";

        return `
<div class="fg-code" data-language="${language}" data-filename="${filename}">
  <div class="fg-code-header">
    <span class="fg-code-language">${language}</span>
    ${filename ? `<span class="fg-code-filename">${filename}</span>` : ""}
  </div>
`;
      }

      return `</div>\n`;
    },
  });
}

// import type MarkdownIt from "markdown-it";
// import container from "markdown-it-container";

// export function fgCode(md: MarkdownIt) {
//   md.use(container, "fg-code", {
//     render(tokens, idx) {
//       if (tokens[idx].nesting === 1) {
//         return `<div class="bg-gray-900 text-white p-2 rounded">\n Fg Code`;
//       }

//       return `</div>\n`;
//     },
//   });
// }