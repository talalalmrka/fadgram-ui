import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import sidebar from "./sidebar";
import navbar from "./navbar";
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
    lineNumbers: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
