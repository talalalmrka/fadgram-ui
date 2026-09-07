import { Generator } from "../Generator";
import {
  colors,
  fontFamilies,
  fontSizes,
  fontStretches,
  fontWeights,
} from "../helpers.ts";

class TypographyGenerator extends Generator {
  constructor() {
    super("typography.md");
  }

  async fontSize(): Promise<string> {
    return await this.html(
      await this.contents(
        fontSizes.map(
          (size) =>
            `<div class="text-${size}">This is a text with font size ${size}.</div>`,
        ),
      ),
    );
  }

  async fontWeight(): Promise<string> {
    return await this.html(
      await this.contents(
        fontWeights.map(
          (w) =>
            `<div class="font-${w}">This is a text with font weight ${w}.</div>`,
        ),
      ),
    );
  }

  async fontFamily(): Promise<string> {
    return await this.html(
      await this.contents(
        fontFamilies.map(
          (family) =>
            `<div class="font-${family}">This is a text with font family ${family}.</div>`,
        ),
      ),
    );
  }

  async fontStretch(): Promise<string> {
    return await this.html(
      await this.contents(
        fontStretches().map(
          (s) =>
            `<div class="font-stretch-${s}">This is a text with font stretch ${s}.</div>`,
        ),
      ),
    );
  }

  async headings(): Promise<string> {
    return await this.html(
      await this.contents(
        this.range(1, 6).map(
          (level) =>
            `<h${level}>H${level} This is heading ${level}</h${level}>`,
        ),
      ),
    );
  }

  async blockquote(): Promise<string> {
    return await this.html(`
      <blockquote>
        <p>This is a blockquote. It is used to quote a large section of text from another source.</p>
        <footer>— Someone famous</footer>
      </blockquote>
    `);
  }
  async listContent(
    orderd: boolean = false,
    count: number = 5,
  ): Promise<string> {
    const tag = orderd ? "ol" : "ul";
    return await this.html(`
      <${tag}>
      ${await this.contents(this.range(1, count).map((num) => `<li>This is list item ${num}.</li>`))}
      </${tag}>
    `);
  }

  async textColors(gradient: boolean = false): Promise<string> {
    return await this.html(
      await this.contents(
        colors.map(
          (color) =>
            `<h5 class="${this.cssClasses({ [`text-${color}`]: !gradient, [`text-gradient-${color}`]: gradient })}">This is a text ${gradient ? "gradient " : ""}${this.ucfirst(color)}.</h5>`,
        ),
      ),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Font size"),
      await this.codePreview(await this.fontSize(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Font weight"),
      await this.codePreview(await this.fontWeight(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Font family"),
      await this.codePreview(await this.fontFamily(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Font stretch"),
      await this.codePreview(await this.fontStretch(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Headings"),
      await this.codePreview(await this.headings(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Paragraphs"),

      this.h3("Simple paragraph"),

      await this.codePreview("<p>This is simple paragraph.</p>", {
        language: "html",
        parser: "html",
      }),

      this.h3("Lead paragraph"),
      await this.codePreview(
        '<p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>',
        {
          language: "html",
          parser: "html",
        },
      ),

      this.h2("Blockquote"),
      await this.codePreview(await this.blockquote(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Lists"),

      this.h3("Unordered list"),
      await this.codePreview(await this.listContent(), {
        language: "html",
        parser: "html",
      }),

      this.h3("Ordered list"),
      await this.codePreview(await this.listContent(true), {
        language: "html",
        parser: "html",
      }),

      this.h2("Text color"),
      await this.codePreview(await this.textColors(), {
        language: "html",
        parser: "html",
      }),

      this.h2("Text gradient"),
      await this.codePreview(await this.textColors(true), {
        language: "html",
        parser: "html",
      }),
    ];
  }
}

new TypographyGenerator().generate();
