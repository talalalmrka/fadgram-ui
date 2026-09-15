import { Generator } from "../Generator";
import { jsonPretty } from "@gen/helpers";
import path from "node:path";

// import path from "node:path";
class ThemeGenerator extends Generator {
  constructor() {
    super("guide/theme.md", {
      icon: "bi-brush",
      order: 3,
    });
  }

  async content(): Promise<string[]> {
    const paths = {
      root: this.rootPath(),
      docs: this.rootPath("docs"),
      vitepress: this.rootPath("docs/.vitepress"),
      theme: this.rootPath("docs/.vitepress/theme"),
      gen: this.rootPath("docs/.vitepress/gen"),
    };
    const cssFiles = (await this.files("src/css", "css")).map((f) =>
      path.join("../../src/css/", path.basename(f)),
    );

    const jsFiles = (await this.files("src/js", "ts")).map((f) =>
      path.join("../../src/js/", path.basename(f)),
    );

    return [
      // css
      this.h2("Css files"),
      await this.includeFiles(cssFiles),
      // js
      this.h2("Js files"),
      await this.includeFiles(jsFiles),
    ];
  }
}

new ThemeGenerator().generate();
