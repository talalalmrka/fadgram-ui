import { Generator } from "../Generator";
import { colors } from "../helpers";

class CardGenerator extends Generator {
  constructor() {
    super("components/card.md", {
      icon: "bi-card-heading",
      // order: 11,
    });
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
      await this.codePreview(await this.card()),

      // Card without shadow
      this.h2("Card without shadow"),
      await this.codePreview(await this.card("shadow-none")),

      // Card color
      this.h2("Card color"),
      await this.contents(
        colors.map(
          async (color) =>
            await this.contents([
              this.h3(`Card ${color}`),
              await this.codePreview(await this.card(`card-${color}`)),
            ]),
        ),
      ),
    ];
  }
}

new CardGenerator().generate();
