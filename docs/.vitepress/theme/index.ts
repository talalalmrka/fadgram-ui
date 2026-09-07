import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import Alpine from "alpinejs";
import { initFadgramUI } from "../../../js/index.js";
import accordion from "../../../js/accordion.js";
import { initEruda } from "./eruda";

import "./custom.css";
import SidebarItem from "@components/SidebarItem.vue";
import IconsGrid from "@components/IconsGrid.vue";
import FgCode from "@components/FgCode.vue";
import CodeFrame from "@components/CodeFrame.vue";
import SegmentedControl from "@components/SegmentedControl.vue";
import Story from "@components/Story.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("VPSidebarItem", SidebarItem);
    // app.component("NavItem", NavItem);
    // app.component("VPNavBarMenu", NavBarMenu);
    // app.component("FgIcon", FgIcon);
    app.component("IconsGrid", IconsGrid);
    app.component("FgCode", FgCode);
    app.component("CodeFrame", CodeFrame);
    app.component("SegmentedControl", SegmentedControl);
    app.component("Story", Story);
    // app.component("IconsTest", IconsTest);
    // app.component("FgMarkdown", FgMarkdown);
    // app.component("VPSidebarGroup", SidebarGroup);
    // app.component("VPSidebarItem", SidebarItemReal);
    // app.component("VPSidebarItem", VPSidebarItem);
    // app.component("IconsGrid", IconsGrid);

    if (typeof window !== "undefined") {
      Alpine.plugin(accordion);

      window.Alpine = Alpine;

      Alpine.start();
      /* if (import.meta.env.DEV) {
        initEruda();
      } */
    }
    router.onAfterRouteChange = () => {
      setTimeout(() => {
        console.log("onAfterRouteChange");
        initFadgramUI();
      }, 500);
    };
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
} satisfies Theme;
