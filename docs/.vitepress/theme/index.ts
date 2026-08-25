import DefaultTheme from "vitepress/theme";
import VPSidebarItem from "./components/VPSidebarItem.vue";
import "./style.css";
import "../../../js/index";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("VPSidebarItem", VPSidebarItem);
  },
};
