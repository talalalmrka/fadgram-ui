import { Generator } from "../Generator";

class MdInVueGenerator extends Generator {
  constructor() {
    super("md-in-vue.md");
  }

  async fgMarkdown(content: string): Promise<string> {
    return ["<FgMarkdown>", content, "</FgMarkdown>"].join("\n");
  }

  async mdList(count: number = 5): Promise<string> {
    return await this.contents(
      this.range(1, count).map((num) => `- Item ${num}`),
    );
  }

  async headings(count: number = 5): Promise<string> {
    return await this.contents(
      this.range(1, count).map((num) => this.h(num, `Heading ${num}`)),
    );
  }

  async taskList(): Promise<string> {
    return await this.contents([
      "- [ ] Write the press release",
      "- [x] Update the website",
    ]);
  }

  async table(): Promise<string> {
    return `
    | Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
    `.trim();
  }

  async tips(): Promise<string> {
    return [
      "::: info",
      "This is an info box.",
      ":::",

      "::: tip",
      "This is a tip.",
      ":::",

      "::: warning",
      "This is a warning.",
      ":::",

      "::: danger",
      "This is a dangerous warning.",
      ":::",

      "::: details",
      "This is a details block.",
      ":::",
    ].join("\n");
  }
  async content(): Promise<string[]> {
    return [
      this.h2("List"),
      await this.codePreview(await this.fgMarkdown(await this.mdList()), {
        language: "vue",
        parser: "vue",
      }),

      this.h2("Headings"),
      await this.codePreview(await this.fgMarkdown(await this.headings()), {
        language: "vue",
        parser: "vue",
      }),

      this.h2("Task list"),
      await this.codePreview(await this.fgMarkdown(await this.taskList()), {
        language: "vue",
        parser: "vue",
      }),

      this.h2("Table"),
      await this.codePreview(await this.fgMarkdown(await this.table()), {
        language: "vue",
        parser: "vue",
      }),
    ];
  }
}

new MdInVueGenerator().generate();
