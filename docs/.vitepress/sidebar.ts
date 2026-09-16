import type { SidebarItem } from "./types";
import { generateSidebar } from "./theme/composables/sidebar";
const sidebar: SidebarItem[] = generateSidebar();
export default sidebar;
