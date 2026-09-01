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
        "- [Alpine js version 3 or higher.](https://alpinejs.dev/essentials/installation)",
      ),
      await this.tip(
        "this accordion plugin requires Alpine.js for installation read official documentation here [Alpine js installation](https://alpinejs.dev/essentials/installation)",
      ),
      this.h2("Setup accordion plugin"),
      await this.code(
        `
        import Alpine from 'alpinejs';
        import accordion from 'fadgram-ui/js/accordion'; /* [!code ++]*/
        Alpine.plugin(accordion); /* [!code ++]*/
      `,
        {
          title: "app.js",
          language: "js",
          parser: "babel",
        },
      ),
      this.h2("Basic Accordion"),
      await this.codePreview(await this.accordion()),

      this.h2("Accordion Multiple mode"),
      await this.codePreview(await this.accordion(true)),
    ];
  }
}

new AccordionGenerator().generate();
