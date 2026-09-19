import { Generator } from "../Generator";
import { colors, strTitle } from "../helpers";

interface Story {
  title: string;
  code: string;
  lang: string;
}

class FgStoryboardGenerator extends Generator {
  constructor() {
    super("api/fg-storyboard.md");
  }

  buttonsCode() {
    return colors
      .map(
        (color) =>
          `<button type="button" class="btn btn-${color}">${strTitle(color)}</button>`,
      )
      .join("\n");
  }

  cssCode() {
    return [
      `@import "tailwindcss";`,
      `@import "fadgram-ui"; /* [!code ++]*/`,
    ].join("\n");
  }

  tsCode() {
    return `import { initFadgramUI } from "fadgram-ui";
document.addEventListener("DOMContentLoaded", () => {
  initFadgramUI(); // [!code ++]
  initFadgramUI(); // [!code --]
});`;
  }

  highlightTsCode() {
    return `
console.log('Not highlighted')
console.log('Highlighted') // [!code highlight]
console.log('Not highlighted')
`;
  }

  async story(name: string, _raw: string, lang: string = "html") {
    return `<FgStory lang="${lang}">{{ ${name} }}</FgStory>`;
  }

  async content(): Promise<string[]> {
    const stories: Story[] = [
      {
        title: "Html Buttons",
        code: this.buttonsCode(),
        lang: "html",
      },
      {
        title: "Css code",
        code: this.cssCode(),
        lang: "css",
      },
      {
        title: "Typescript",
        code: this.tsCode(),
        lang: "ts",
      },
      {
        title: "Typescript highlight",
        code: this.highlightTsCode(),
        lang: "ts",
      },
    ];

    const script = [
      '<script setup lang="ts">',
      ...stories.map(
        (story, index) =>
          `const story${index} = ${JSON.stringify(story.code)};`,
      ),
      "</script>",
    ].join("\n");

    const sections = await Promise.all(
      stories.map(async (story, index) => {
        return [
          this.h2(story.title),
          await this.story(`story${index}`, story.code, story.lang),
        ].join("\n\n");
      }),
    );

    return [script, ...sections];
  }
}

new FgStoryboardGenerator().generate();
