import { DarkModeManager } from "./dark-mode-manager";
import { Dropdown } from "./dropdown";
import { NavBar } from "./navbar";
import { Drawer } from "./drawer";

export const initFadgramUI = () => {
    DarkModeManager.init();
    Dropdown.init();
    NavBar.init();
    Drawer.init();
}

document.addEventListener('DOMContentLoaded', () => {
    initFadgramUI();
});