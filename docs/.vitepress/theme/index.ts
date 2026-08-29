import DefaultTheme from "vitepress/theme";
import { VPSidebarItem, IconsGrid } from "./components";
import Alpine from "alpinejs";
import { initFadgramUI } from "../../../js/index.js";
import accordion from "../../../js/accordion.js";
import { initEruda } from "./eruda";
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import "./custom.css";
// import "../../../js/index";
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("VPSidebarItem", VPSidebarItem);
    app.component("IconsGrid", IconsGrid);
    if (typeof window !== "undefined") {
      Alpine.plugin(accordion);

      window.Alpine = Alpine;

      Alpine.start();
      if (import.meta.env.DEV) {
        initEruda();
      }
    }
    router.onAfterRouteChange = () => {
      console.log("onAfterRouteChange");
      initFadgramUI();
    };
    enhanceAppWithTabs(app);
  },
};
