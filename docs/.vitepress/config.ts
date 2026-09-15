import { defineConfig } from "vitepress";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { storyboardPlugin } from "./theme/markdown/storyboard";

import sidebar from "./sidebar";
import navbar from "./navbar";

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
    // nav: [
    //   { text: "Home", link: "/" },
    //   {
    //     text: '<i class="bi-lightbulb"></i><span>Guide</span>',
    //     link: "/guide/installation",
    //   },
    //   { text: "Examples", link: "/api/markdown-examples" },
    // ],
    // sidebar: sidebar,
    sidebar,

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
      storyboardPlugin(md);
    },
    lineNumbers: true,
    theme: {
      light: "andromeeda",
      dark: "andromeeda",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@icons": path.resolve(__dirname, "../../icons"),
        "@js": path.resolve(__dirname, "../../src/js"),
        "@css": path.resolve(__dirname, "../../src/css"),
        "@gen": path.resolve(__dirname, "./gen"),
        "@components": path.resolve(__dirname, "./theme/components"),
        "@layout": path.resolve(__dirname, "./theme/layout"),
        "@md": path.resolve(__dirname, "./theme/markdown"),
        "@src": path.resolve(__dirname, "../../src"),
        "@composables": path.resolve(__dirname, "./theme/composables"),
        "@docs": path.resolve(__dirname, "../"),
      },
    },
  },
  lastUpdated: true,
});
