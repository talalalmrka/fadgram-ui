import { CodeTab, Generator } from "../Generator";

class InstallationGenerator extends Generator {
  constructor() {
    super("guide/installation.md", {
      icon: "bi-gear-wide-connected",
      order: 1,
    });
  }

  async quickStart() {
    return await this.contents([
      this.h2("Quick start"),
      await this.md(
        `Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.`,
      ),
    ]);
  }

  async requirments() {
    return await this.contents([
      this.h2("Requirments"),
      await this
        .md(`- [Tailwindcss](https://tailwindcss.com/) version 4 or higher.
- [Iconify](https://iconify.design/docs/usage/css/tailwind/tailwind4/) for tailwindcss 4 or higher.`),
    ]);
  }

  async installation() {
    const pms = ["npm", "pnpm", "yarn", "bun", "deno"];
    const tabs: CodeTab[] = pms.map((pm) => ({
      lang: "sh",
      title: pm,
      code: `${pm} add -D fadgram-ui@latest`,
    }));

    return await this.contents([
      this.h2("Installation"),
      await this.codeGroup(tabs),
    ]);
  }
  async usage() {
    return await this.contents([
      this.h2("Usage"),
      await this.md(
        `- Add the plugin to your main style file like (app.css or main.css).`,
      ),
      await this.md(
        `To use Fadgram UI in your project, you need to import it in your main style file like: (main.css or app.css) or any main style file after import tailwindcss.`,
      ),
      await this.code(
        [
          `@import "tailwindcss";`,
          `@import "fadgram-ui"; /* [!code ++]*/`,
        ].join("\n"),
        { language: "css", parser: "css" },
      ),
      await this.md(
        `- Add the plugin javascript helpers to your main js file(app.js or main.js).`,
      ),
      await this.md(
        `Add javascript helpers to your main javascript file (main.js) or (app.js). javascript helpers required by some components like (dropdown, modal, tooltip, offcanvas, tabs, toast ...etc).`,
      ),
      await this.code(`import "fadgram-ui"; /* [!code ++]*/`, {
        language: "js",
        parser: "babel",
      }),
      this.h3("Javascript modules."),
      this.h4("Initialize all components helpers:"),
      await this.code(
        `
        import { initFadgramUI } from "fadgram-ui";
        document.addEventListener("DOMContentLoaded", () => {
        initFadgramUI();
        });`,
        { language: "js", parser: "babel" },
      ),
      this.tip("How initFadgramUI works?"),
      await this.include("../../src/js/index.ts", "ts"),
      this.h4("Initialize required components helpers only:"),
      await this.code(
        `
        import { Dropdown } from "fadgram-ui/js/dropdown";
        document.addEventListener("DOMContentLoaded", () => {
        Dropdown.init();
        });`,
        { language: "js", parser: "babel", title: "app.js" },
      ),
    ]);
  }
  async content(): Promise<string[]> {
    return [
      await this.quickStart(),
      await this.requirments(),
      await this.installation(),
      await this.usage(),
    ];
  }
}

new InstallationGenerator().generate();
