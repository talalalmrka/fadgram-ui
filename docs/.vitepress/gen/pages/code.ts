import { colors, strTitle } from "@gen/helpers";
import { Generator } from "../Generator";
import "../extensions";
interface Story {
  title: string;
  code: string;
  lang: string;
}
class CodeGenerator extends Generator {
  constructor() {
    super("api/code.md", {
      icon: "bi-code",
      order: 2,
    });
  }
  get highlights() {
    return ["highlight", "++", "--", "focus", "warning", "error"];
  }

  syn(name: string, lang: string) {
    switch (lang) {
      case "html":
        return `<!-- [!code ${name}] -->`;
      case "ts":
      case "js":
        return `// [!code ${name}]`;
      default:
        return `/* [!code ${name}] */`;
    }
  }

  async buttonsCode() {
    return await colors
      .map((color, index) => {
        const hiIndex =
          index > 2 && index < this.highlights.length ? index - 2 : null;
        const hi = hiIndex !== null ? this.highlights[hiIndex] : null;
        const suffix = hi ? this.syn(hi, "html") : "";
        return `<button type="button" class="btn btn-${color}">${strTitle(color)}</button>${suffix}`;
      })
      .join("\n")
      .format("html");
  }

  async cssCode() {
    return await `@import "tailwindcss";
@import "@css/index.css";
@import "./theme.css";
@custom-variant dark (&:where(.dark, .dark *));
@plugin "@iconify/tailwind4" {
  prefixes: bi, fg, mdi;
  iconselector: ".{prefix}-{name}";
  maskselector: ".icon";
}
@layer base {
  body {
    @apply font-poppins antialiased;
  }

  ol,
  ul {
    @apply list-none m-0 p-0;
  }

  .vp-doc h2,
  .vp-doc h3,
  .vp-doc h4 {
    @apply relative mb-3!;
    &::before {
      content: "";
      @apply absolute top-full mt-0.5 w-full max-w-14 h-0.5 rounded bg-primary;
    }
  }
}`
      .lines()
      .map((line, index) => {
        const hiIndex =
          index > 4 && index < this.highlights.length ? index - 4 : null;
        const hi = hiIndex !== null ? this.highlights[hiIndex] : null;
        const suffix = hi ? this.syn(hi, "css") : "";
        return `${line}${suffix}`;
      })
      .join("\n")
      .format("css");
  }

  async tsCode() {
    return await `
    // [!code word:Hello]
    import { initFadgramUI } from "fadgram-ui";
    document.addEventListener("DOMContentLoaded", () => {
      initFadgramUI();
      console.log('Not highlighted')
      console.log('Highlighted') // [!code highlight]
      console.log('Added code') // [!code ++]
      console.log('Removed code') // [!code --]
      console.log('Focused code') // [!code focus]
      console.log('Warning code') // [!code warning]
      console.log('Error code') // [!code error]
      console.log('Hello world')
    });`
      .trim()
      .format("babel-ts");
  }

  async stories(): Promise<Story[]> {
    return [
      {
        title: "Html code",
        lang: "html",
        code: await this.buttonsCode(),
      },
      {
        title: "Css code",
        lang: "css",
        code: await this.cssCode(),
      },
      {
        title: "Typescript code",
        lang: "ts",
        code: await this.tsCode(),
      },
    ];
  }
  story(raw: string, lang: string = "html") {
    return `<FgCoder lang="${lang}">{{ ${JSON.stringify(raw.trim())} }}</FgCoder>`;
  }
  async content(): Promise<string[]> {
    const stories = await this.stories();
    return await Promise.all(
      stories.map(async (item: Story) => {
        return await this.contents([
          this.h2(item.title),
          this.h3("Story"),
          this.story(item.code, item.lang),
          this.h3("Real"),
          await this.codePlain(item.code, {
            language: item.lang,
            title: "app.ts",
          }),
        ]);
      }),
    );
  }
}

new CodeGenerator().generate();
