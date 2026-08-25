import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import prettier from "prettier";

const dirname = path.dirname(fileURLToPath(import.meta.url));

type Frontmatter = Record<string, unknown>;
type Content = string | Promise<string> | Content[];
export abstract class Generator {
  constructor(
    protected readonly filename: string,
    protected readonly frontmatter: Frontmatter = {
      outline: "deep",
    },
  ) {}

  abstract content(): Promise<string[]>;

  h(level: number, title: string): string {
    return `${"#".repeat(level)} ${title}`;
  }

  h1(title: string): string {
    return this.h(1, title);
  }

  h2(title: string): string {
    return this.h(2, title);
  }

  h3(title: string): string {
    return this.h(3, title);
  }

  h4(title: string): string {
    return this.h(4, title);
  }

  h5(title: string): string {
    return this.h(5, title);
  }

  h6(title: string): string {
    return this.h(5, title);
  }

  ucfirst(value: string): string {
    return value.length ? value.charAt(0).toUpperCase() + value.slice(1) : "";
  }

  range(start: number, end: number, step = 1): number[] {
    if (step === 0) {
      throw new Error("Step cannot be zero");
    }

    const result: number[] = [];
    const increment = Math.abs(step);

    if (start <= end) {
      for (let i = start; i <= end; i += increment) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i -= increment) {
        result.push(i);
      }
    }

    return result;
  }

  async format(
    raw: string,
    parser: prettier.BuiltInParserName,
  ): Promise<string> {
    return prettier.format(raw, {
      parser,
    });
  }

  async source(
    raw: string,
    language: string,
    parser: prettier.BuiltInParserName = language as prettier.BuiltInParserName,
  ): Promise<string> {
    const formatted = await this.format(raw, parser);

    return [`\`\`\`${language}`, formatted.trim(), "```"].join("\n");
  }

  html(raw: string): Promise<string> {
    return this.format(raw, "html");
  }

  ts(raw: string): Promise<string> {
    return this.format(raw, "typescript");
  }

  js(raw: string): Promise<string> {
    return this.format(raw, "babel");
  }

  css(raw: string): Promise<string> {
    return this.format(raw, "css");
  }

  json(raw: string): Promise<string> {
    return this.format(raw, "json");
  }

  md(raw: string): Promise<string> {
    return this.format(raw, "markdown");
  }

  get title(): string {
    const name = path.basename(this.filename, path.extname(this.filename));

    return this.ucfirst(name);
  }

  getFrontmatter(): string[] {
    return Object.entries({
      title: this.title,
      ...this.frontmatter,
    }).map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
  }
  async contents(contents: (Content | Content[])[]): Promise<string> {
    const flatten = (items: (Content | Content[])[]): Content[] =>
      items.flatMap((item) => (Array.isArray(item) ? flatten(item) : item));

    return (await Promise.all(flatten(contents))).join("\n");
  }
  contentss(lines: string[]): string {
    return lines.join("\n");
  }

  async mdPage(): Promise<string> {
    const content = (await this.content()).filter(Boolean).join("\n\n").trim();

    const mdContent = [
      "---",
      ...this.getFrontmatter(),
      "---",
      "",
      this.h(1, this.title),
      "",
      content,
      "",
    ].join("\n");

    return this.md(mdContent);
  }

  async generate(): Promise<void> {
    const file = path.resolve(dirname, "../..", this.filename);

    console.log(`Generating: ${file}`);

    await fs.mkdir(path.dirname(file), {
      recursive: true,
    });

    const content = await this.mdPage();

    await fs.writeFile(file, content, "utf8");

    console.log("Done.");
  }
}
