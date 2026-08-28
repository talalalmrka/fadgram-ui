import { Generator } from "../Generator.ts";
import { colors } from "../helpers.ts";

class CardGenerator extends Generator {
  constructor() {
    super("card.md");
  }

  async card(className?: string): Promise<string> {
    const cssClassName = className ? ` ${className}` : "";
    return await this.html(`
        <div class="card${cssClassName}">
            <div class="card-header">
                <h5 class="card-title">Card title</h5>
            </div>
            <div class="card-body">
                <p>Voluptatum dolor dignissimos laboriosam consectetur totam laborum rerum.</p>
                <p>Ut iste in dolorem natus dolorum et possimus.</p>
                <p class="mb-0">Et hic minus doloribus fugit voluptatem excepturi mollitia quis.</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary sm">Button</button>
            </div>
        </div>
    `);
  }

  async content(): Promise<string[]> {
    return [
      // Basic usage
      await this.previewAndUsage(await this.card(), 2, "html"),

      // Card without shadow
      this.h2("Card without shadow"),
      await this.previewAndUsage(await this.card("shadow-none"), 3, "html"),

      // Card color
      this.h2("Card color"),
      await this.contents(
        colors.map(
          async (color) =>
            await this.contents([
              this.h3(`Card ${color}`),
              await this.previewAndUsage(
                await this.card(`card-${color}`),
                4,
                "html",
              ),
            ]),
        ),
      ),
    ];
  }
}

new CardGenerator().generate();
