import { DarkModeManager } from "./dark-mode-manager";
import { Dropdown } from "./dropdown";
import { NavBar } from "./navbar";
import { Drawer } from "./drawer";
import { Tooltip } from "./tooltip";
import { Modal } from "./modal";

export const initFadgramUI = () => {
    DarkModeManager.init();
    Dropdown.init();
    NavBar.init();
    Drawer.init();
    Tooltip.init();
    Modal.init();
}
document.addEventListener('DOMContentLoaded', () => {
    initFadgramUI();
});