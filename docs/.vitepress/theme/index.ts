import { App } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import Alpine from "alpinejs";
// import { initFadgramUI } from "../../../js/index.js";
import accordion from "../../../js/accordion.js";
import { initEruda } from "./eruda";
import { dropdown } from "@js/dropdown";
import { modal } from "@js/modal";
import { tabs } from "@js/tabs";
import { Toast } from "@js/toast";
import "./custom.css";

const initAlpine = () => {
  if (typeof window !== "undefined") {
    Alpine.plugin(accordion);
    // window.Alpine = Alpine;
    Alpine.start();
    if (import.meta.env.DEV) {
      initEruda();
    }
  }
};

const registerComponents = async (app: App) => {
  const components = import.meta.glob("./components/**/*.vue");

  for (const path in components) {
    try {
      const loadComponent = components[path];

      if (!loadComponent) {
        continue;
      }

      const module = await loadComponent();

      const name = path.match(/\/([^/]+)\.vue$/)?.[1];

      if (!name) {
        continue;
      }

      const component = (module as { default?: unknown }).default;

      if (!component) {
        continue;
      }

      app.component(name, component as Parameters<App["component"]>[1]);
    } catch {
      // Ignore this component and continue.
      continue;
    }
  }
};

const registerComponentss = (app) => {
  const components = import.meta.glob("./components/**/*.vue", {
    eager: true,
  });

  for (const path in components) {
    const component = components[path];
    const name = path.match(/\/([^\/]+)\.vue$/)?.[1];
    if (name) {
      app.component(name, component.default);
    }
  }
};

export default {
  extends: DefaultTheme,
  // Layout: Layout,
  enhanceApp: async ({ app, router }) => {
    // app.component("VPSidebarItem", SidebarItem);
    // app.component("IconsGrid", IconsGrid);
    // app.component("FgCode", FgCode);
    // app.component("CodeFrame", CodeFrame);
    // app.component("SegmentedControl", SegmentedControl);
    // app.component("Story", Story);

    /* router.onAfterRouteChange = () => {
      setTimeout(() => {
        console.log("onAfterRouteChange");
        initFadgramUI();
      }, 500);
    }; */
    enhanceAppWithTabs(app);
    await registerComponents(app);
    initAlpine();
    dropdown;
    modal;
    router.onAfterRouteChange = () => {
      setTimeout(() => {
        console.log("onAfterRouteChange");
        tabs();
      }, 500);
    };
    Toast.init();
    //initFadgramUI();
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
