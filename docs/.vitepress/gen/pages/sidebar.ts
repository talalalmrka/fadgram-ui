import { jsonPretty } from "@gen/helpers";
import { generateSidebar } from "@composables/sidebar";
import { Generator } from "../Generator";

class SidebarGenerator extends Generator {
  constructor() {
    super("api/sidebar.md", {
      icon: "bi-layout-sidebar-inset",
    });
  }

  async content(): Promise<string[]> {
    return [
      await this.code(jsonPretty(generateSidebar()), { language: "json" }),
    ];
  }
}

new SidebarGenerator().generate();
