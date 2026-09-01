import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
// import container from "markdown-it-container";
import sidebar from "./sidebar";
import navbar from "./navbar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fadgram Ui",
  description: "Tailwindcss 4 modern plugin with powerfull components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.svg",
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
    container: {
      customContainers: {
        code: "CODE",
        success: "SUCCESS",
        error: "ERROR",
      },
    },
    config: (md) => {
      md.use(tabsMarkdownPlugin);
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
