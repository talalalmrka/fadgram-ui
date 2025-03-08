import { DarkModeManager } from "./dark-mode-manager";
import { RtlToggler } from "./rtl-toggler";
import { Dropdown } from "./dropdown";
import { NavBar } from "./navbar";
import { Offcanvas } from "./offcanvas";
import { Tooltip } from "./tooltip";
import { Modal } from "./modal";
import { ButtonBackTop } from "./button-backtop";
import { PasswordToggle } from "./password-toggle";
import { Tabs } from "./tabs";
import Toast from "./toast";

export const initFadgramUI = () => {
    DarkModeManager.init();
    RtlToggler.init();
    ButtonBackTop.init();
    Dropdown.init();
    NavBar.init();
    Offcanvas.init();
    Tooltip.init();
    Modal.init();
    PasswordToggle.init();
    Tabs.init();
    window.Toast = Toast;
}
document.addEventListener('DOMContentLoaded', () => {
    initFadgramUI();
});