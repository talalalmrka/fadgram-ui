import { Generator, AlertType } from "../Generator";

class TipsGenerator extends Generator {
  constructor() {
    super("api/tips.md");
  }
  types(): AlertType[] {
    return ["info", "tip", "success", "warning", "danger", "error", "details"];
  }
  async content(): Promise<string[]> {
    return [
      await this.contents(
        this.types().map(
          async (type: AlertType) =>
            await this.contents([
              this.ucfirst(type),
              await this.alert(`This is an ${type} box.`, type),
            ]),
        ),
      ),
    ];
  }
}

new TipsGenerator().generate();
