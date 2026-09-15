import { Generator } from "../Generator";

class PagesGenerator extends Generator {
  constructor() {
    super("api/pages.md", {
      icon: "bi-files",
    });
  }

  async pre(raw: any) {
    return await this.html(`<pre>${raw}</pre>`);
  }

  /* async scripts(): Promise<string[]> {
    return [
      await this.html(`<script setup>
import { usePages } from "@composables";
const pages = usePages();
</script>`),
    ];
  } */
  async content(): Promise<string[]> {
    return [this.h2("Pages"), `<Pages/>`];
  }
}

new PagesGenerator().generate();
