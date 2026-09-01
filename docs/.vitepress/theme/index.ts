import DefaultTheme from "vitepress/theme";
import SidebarItem from "./components/SidebarItem.vue";
import IconsGrid from "./components/IconsGrid.vue";
/* import Alpine from "alpinejs";
import { initFadgramUI } from "../../../js/index.js";
import accordion from "../../../js/accordion.js";
import { initEruda } from "./eruda";*/
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("VPSidebarItem", SidebarItem);
    app.component("IconsGrid", IconsGrid);
    // app.component("VPSidebarGroup", SidebarGroup);
    // app.component("VPSidebarItem", SidebarItemReal);
    // app.component("VPSidebarItem", VPSidebarItem);
    // app.component("IconsGrid", IconsGrid);
    enhanceAppWithTabs(app);
  },
  /* enhanceApp({ app, router }) {
    app.component("VPSidebarItem", VPSidebarItem);
    // app.component("IconsGrid", IconsGrid);
    // app.component("IconsGridTest", IconsGridTest);
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
  }, */
};
