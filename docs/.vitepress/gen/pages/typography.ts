import { Generator } from "../Generator.ts";
import { colors } from "../helpers.ts";

class TypographyGenerator extends Generator {
  constructor() {
    super("typography.md");
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Headings"),
      await this.contents(
        this.range(1, 6).map(
          (level) =>
            `<h${level}>H${level} This is heading ${level}</h${level}>`,
        ),
      ),
      this.h2("Paragraphs"),
      this.h3("Simple paragraph"),
      "<p>This is simple paragraph.</p>",
      this.h3("Lead paragraph"),
      '<p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>',
      this.h2("Blockquote"),
      await this.html(
        await this.contents([
          "<blockquote>",
          "<p>This is a blockquote. It is used to quote a large section of text from another source.</p>",
          "<footer>— Someone famous</footer>",
          "</blockquote>",
        ]),
      ),

      this.h2("Lists"),
      this.h3("Unordered list"),
      await this.html(
        await this.contents([
          "<ul>",
          this.contents(
            this.range(1, 3).map(
              (num) => `<li>Unordered list item ${num}</li>`,
            ),
          ),
          "</ul>",
        ]),
      ),
      this.h3("Ordered list"),
      await this.html(
        await this.contents([
          "<ol>",
          this.contents(
            this.range(1, 3).map((num) => `<li>Ordered list item ${num}</li>`),
          ),
          "</ol>",
        ]),
      ),
      this.h2("Text Color"),
      this.h3("Usage:"),
      await this.source(
        '<div class="text-primary">This is a Primary text</div>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents(
          colors.map(
            (color) =>
              `<h5 class="text-${color}">This is a ${this.ucfirst(color)} text.</h5>`,
          ),
        ),
      ),
      this.h2("Text Gradient"),
      this.h3("Usage:"),
      await this.source(
        '<div class="text-gradient-primary">This is a Gradient Primary text</div>',
        "html",
        "html",
      ),
      this.h3("Previews"),
      await this.html(
        await this.contents(
          colors.map(
            (color) =>
              `<h5 class="text-gradient-${color}">This is a Gradient ${this.ucfirst(color)} text.</h5>`,
          ),
        ),
      ),
    ];
  }
}

new TypographyGenerator().generate();
