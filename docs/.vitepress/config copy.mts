import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import sidebar from "./sidebar";
import navbar from "./navbar";
import container from "markdown-it-container";
// import { codeBlock } from "./markdown/code-block";
// import { MarkdownIt } from "markdown-it";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fadgram Ui",
  description: "Tailwindcss 4 modern plugin with powerfull components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: navbar,
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],

    sidebar: sidebar,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/talalalmrka/fadgram-ui",
      },
      {
        icon: "github",
        link: "https://www.npmjs.com/package/fadgram-ui",
      },
    ],
  },
  markdown: {
    config: (md) => {
      // codeBlock(md);
      md.use(container, "code-block", {
        validate(params) {
          return /^code-block(?:\s+.+)?$/.test(params.trim());
        },

        render(tokens, idx) {
          const token = tokens[idx];

          if (token.nesting === 1) {
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
    },
    lineNumbers: true,
    theme: {
      light: "andromeeda",
      dark: "andromeeda",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
