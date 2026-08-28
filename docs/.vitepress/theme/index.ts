import DefaultTheme from "vitepress/theme";
import { VPSidebarItem, IconsGrid } from "./components";
import Alpine from "alpinejs";
import { initFadgramUI } from "../../../js/index.js";
import accordion from "../../../js/accordion.js";

import "./custom.css";
import "../../../js/index";
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("VPSidebarItem", VPSidebarItem);
    app.component("IconsGrid", IconsGrid);
    if (typeof window !== "undefined") {
      Alpine.plugin(accordion);

      window.Alpine = Alpine;

      Alpine.start();
    }
    router.onAfterRouteChange = () => {
      console.log("onAfterRouteChange");
      initFadgramUI();
    };
  },
};
