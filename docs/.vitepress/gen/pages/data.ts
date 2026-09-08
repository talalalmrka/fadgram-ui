import { Generator } from "../Generator";

class DataGenerator extends Generator {
  constructor() {
    super("data.md");
  }

  async content(): Promise<string[]> {
    return [];
  }
}

new DataGenerator().generate();
