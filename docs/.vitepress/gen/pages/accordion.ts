import { Generator } from "../Generator.ts";

class AccordionGenerator extends Generator {
  constructor() {
    super("accordion.md");
  }

  async accordion(multiple?: boolean): Promise<string> {
    const multi = multiple ? ".multiple" : "";
    return await this.html(`<div x-accordion${multi}>
    <div x-accordion-item>
        <div x-accordion-header>
            Item 1
        </div>
        <div x-accordion-body>
            This is the content for Item 1. You can place any HTML content here, such as text, images, or otherelements.
        </div>
    </div>
    <div x-accordion-item>
        <div x-accordion-header>
            Item 2
        </div>
        <div x-accordion-body>
            This is the content for Item 2. You can place any HTML content here, such as text, images, or otherelements.
        </div>
    </div>
    <div x-accordion-item>
        <div x-accordion-header>
            Item 3
        </div>
        <div x-accordion-body>
            This is the content for Item 3. You can place any HTML content here, such as text, images, or otherelements.
        </div>
    </div>
</div>`);
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Requirements"),
      await this.md(
        "this accordion plugin requires Alpine.js for installation read official documentation here [Alpine js installation](https://alpinejs.dev/essentials/installation).",
      ),
      this.h2("Apply accordion plugin"),
      await this.code(
        `
        import Alpine from 'alpinejs';
        import accordion from 'fadgram-ui/alpine/accordion'; /* [!code ++]*/
        Alpine.plugin(accordion); /* [!code ++]*/
      `,
        {
          title: "app.js",
          language: "js",
        },
      ),
      this.h2("Basic Accordion"),
      await this.previewAndUsage(await this.accordion(), 3, "html", "html"),

      this.h2("Accordion Multiple mode"),
      await this.previewAndUsage(await this.accordion(true), 3, "html", "html"),
    ];
  }
}

new AccordionGenerator().generate();
