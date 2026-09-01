import { Generator } from "../Generator.ts";
// import path from "node:path";
class ThemeGenerator extends Generator {
  constructor() {
    super("theme.md");
  }

  async content(): Promise<string[]> {
    return [
      // css
      this.h2("Css files"),
      await this.includeFiles(await this.files("../../../css")),

      // js
      this.h2("Js files"),
      await this.includeFiles(await this.files("../../../js")),
    ];
  }
}

new ThemeGenerator().generate();
