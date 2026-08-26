import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import container from "markdown-it-container";
import sidebar from "./sidebar";
import navbar from "./navbar";
import { configureMarkdown } from "./markdown";
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
      md.use(container, "exercise", {
        validate: (params) => {
          return params.trim().match(/^exercise\s*(.*)$/);
        },
        render: (tokens, idx) => {
          const m = tokens[idx].info.trim().match(/^exercise\s*(.*)$/);

          if (tokens[idx].nesting === 1) {
            // Opening tag: extract custom title or use default
            const title = m && m[1] ? m[1] : "EXERCISE";
            return `<div class="custom-container exercise">
                      <p class="custom-container-title">${title}</p>\n`;
          } else {
            // Closing tag
            return `</div>\n`;
          }
        },
      });

      // M code
      md.use(container, "mcode", {
        validate(info) {
          // return info.trim().startsWith("{");
          return true;
        },

        render(tokens, index) {
          const token = tokens[index];

          if (token.nesting === 1) {
            let options = { language: "", title: "" };
            try {
              options = JSON.parse(token.info.trim());
            } catch (e) {
              console.error("Failed to parse container JSON options:", e);
            }

            const language = options.language ?? "";
            const title = options.title ?? "";

            // 1. Simulate VitePress code-group tabs block
            // 2. Open standard VitePress code block wrapping
            return `<div class="vp-code-group vp-adaptive-theme">
                      <div class="tabs">
                        <input type="radio" name="group-1" id="tab-1" checked>
                        <label for="tab-1">${title || language || "Code"}</label>
                      </div>
                      <div class="blocks">
                        <div class="language-${language} active">
                          <button title="Copy Code" class="copy"></button>
                          <span class="lang">${language}</span>
                          <pre class="shiki"><code>`;
          }

          // Close all raw HTML blocks opened above
          return `</code></pre></div></div></div>\n`;
        },
      });

      /* md.use(container, "fgcode", {
        validate(params) {
          return true;
          // return params.trim().startsWith("{");
        },
        render(tokens, index) {
          const token = tokens[index];

          if (token.nesting === 1) {
            // const options = JSON.parse(token.info.trim());

            // const language = options.language ?? "";
            // const title = options.title ? ` [${options.title}]` : "";
            let options = { language: "", title: "" };
            try {
              options = JSON.parse(token.info.trim());
            } catch (e) {
              console.error("Failed to parse container JSON options:", e);
            }

            const language = options.language ?? "";
            const title = options.title ?? "";

            return `::: code-group\n\n\`\`\`${language}${title}\n`;
          }

          return "```\n\n:::\n";
        },
        renderr(tokens, index) {
          const token = tokens[index];

          if (token.nesting === 1) {
            let options = { language: "", title: "" };
            try {
              options = JSON.parse(token.info.trim());
            } catch (e) {
              console.error("Failed to parse container JSON options:", e);
            }

            const language = options.language ?? "";
            const title = options.title ?? "";

            // 1. Simulate VitePress code-group tabs block
            // 2. Open standard VitePress code block wrapping
            return `<div class="vp-code-group vp-adaptive-theme">
                      <div class="tabs">
                        <input type="radio" name="group-1" id="tab-1" checked>
                        <label for="tab-1">${title || language || "Code"}</label>
                      </div>
                      <div class="blocks">
                        <div class="language-${language} active">
                          <button title="Copy Code" class="copy"></button>
                          <span class="lang">${language}</span>
                          <pre class="shiki"><code>`;
          }

          // Close all raw HTML blocks opened above
          return `</code></pre></div></div></div>\n`;
        },
      });*/
    },
    lineNumbers: true,
    theme: {
      light: "dracula",
      dark: "andromeeda",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
