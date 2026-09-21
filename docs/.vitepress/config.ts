import { defineConfig } from "vitepress";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { storyboardPlugin } from "./theme/markdown/storyboard";

import sidebar from "./sidebar";
import navbar from "./navbar";
import {
  transformerNotationWordHighlight,
  transformerRenderIndentGuides,
} from "@shikijs/transformers";
import { transformerCodeBlock } from "./theme/markdown/code-block";
import transformers from "./theme/markdown/transformers";
// import { transformerCodeBlockReal } from "./theme/markdown/code-block-real";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fadgram Ui",
  description: "Tailwindcss 4 modern plugin with powerfull components",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.svg",
    search: {
      provider: "local",
    },
    nav: navbar,
    sidebar: sidebar,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/talalalmrka/fadgram-ui",
      },
      {
        icon: "npm",
        link: "https://www.npmjs.com/package/fadgram-ui",
      },
    ],
  },
  markdown: {
    container: {
      customContainers: {
        code: "CODE",
        success: "SUCCESS",
        error: "ERROR",
      },
    },
    config: (md) => {
      md.use(tabsMarkdownPlugin);
      // md.use(storyboardPlugin);
      // storyboardPlugin(md);
    },
    preWrapper: false,
    lineNumbers: false,
    theme: {
      light: "andromeeda",
      dark: "andromeeda",
    },
    /*codeTransformers: [
      transformerCodeBlock({
        lang: false,
      }),
      transformerNotationWordHighlight(),
      transformerRenderIndentGuides(),
      // transformerCodeBlockReal(),
    ],*/
    codeTransformers: transformers,
    toc: {},
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@theme": path.resolve(__dirname, "./theme"),
        "@icons": path.resolve(__dirname, "../../icons"),
        "@js": path.resolve(__dirname, "../../src/js"),
        "@css": path.resolve(__dirname, "../../src/css"),
        "@gen": path.resolve(__dirname, "./gen"),
        "@components": path.resolve(__dirname, "./theme/components"),
        "@layout": path.resolve(__dirname, "./theme/layout"),
        "@src": path.resolve(__dirname, "../../src"),
        "@composables": path.resolve(__dirname, "./theme/composables"),
        "@docs": path.resolve(__dirname, "../"),
        // "@fadgram-ui": path.resolve(__dirname, "../../"),
      },
    },
  },
  lastUpdated: true,
});
