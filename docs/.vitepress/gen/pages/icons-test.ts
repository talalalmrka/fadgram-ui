import { Generator } from "../Generator.ts";

class IconsTestGenerator extends Generator {
  constructor() {
    super("icons-test.md");
  }

  async content(): Promise<string[]> {
    return [`<IconsTest />`];
  }
}

new IconsTestGenerator().generate();
