import path from "node:path";
// import fs from "node:fs/promises";
import fs, { promises as fsPromises } from "node:fs";
import { fileURLToPath } from "node:url";
import prettier from "prettier";
import { stringify } from "yaml";
import {
  range,
  ucfirst,
  cssClasses,
  match,
  type CssClassValue,
  HtmlAttrs,
  attrs,
} from "./helpers";

const dirname = path.dirname(fileURLToPath(import.meta.url));

let root = path.dirname(fileURLToPath(import.meta.url));

while (!fs.existsSync(path.join(root, "package.json"))) {
  const parent = path.dirname(root);

  if (parent === root) {
    throw new Error("Project root not found.");
  }

  root = parent;
}

type Frontmatter = Record<string, any>;

type Content = string | Promise<string> | Content[];

export type AlertType =
  "info" | "tip" | "success" | "warning" | "danger" | "error" | "details";

export interface CodeOptions {
  title?: string;
  language?: string;
  parser?: prettier.BuiltInParserName;
  key?: string;
  className?: string;
}

export interface CodeTab {
  lang: string;
  title: string;
  code: string;
}

interface IncludeFilesOptions {
  ext?: string;
  level?: number;
}

interface TabItem {
  title: string;
  content: string;
}

interface TabsOptions {
  variant?: string;
  key?: string;
}
export interface ContainerOptions {
  className?: string;
  atts?: HtmlAttrs;
  tag?: string;
  content?: Content | Content[];
}
export abstract class Generator {
  /**
   * Creates a new documentation generator.
   *
   * @param filename - Output Markdown file path.
   * @param frontmatter - Additional VitePress frontmatter options.
   */
  constructor(
    protected readonly filename: string,
    protected frontmatter: Frontmatter = {
      outline: "deep",
    },
    protected scripts: string[] = [],
  ) {
    if (!this.frontmatter.title) {
      this.frontmatter.title = this.title;
    }
  }

  rootPath(...paths: string[]): string {
    return path.join(root, ...paths);
  }
  /**
   * Generates the page content.
   *
   * Every generator must implement this method.
   *
   * @returns An array of Markdown content blocks.
   */
  abstract content(): Promise<string[]>;

  addScript(raw: string) {
    this.scripts.push(raw);
  }

  async scriptsContent() {
    return this.scripts.length
      ? await this.html(
          [
            '<script setup lang="ts">',
            this.scripts.join("\n"),
            "</script>",
          ].join("\n"),
        )
      : null;
  }

  /**
   * Creates a Markdown heading.
   *
   * @param level - Heading level from 1 to 6.
   * @param title - Heading text.
   * @returns A Markdown heading string.
   */
  h(level: number, title: string): string {
    return `${"#".repeat(level)} ${title}`;
  }

  /**
   * Creates a level-one Markdown heading.
   *
   * @param title - Heading text.
   * @returns A level-one heading.
   */
  h1(title: string): string {
    return this.h(1, title);
  }

  /**
   * Creates a level-two Markdown heading.
   *
   * @param title - Heading text.
   * @returns A level-two heading.
   */
  h2(title: string): string {
    return this.h(2, title);
  }

  /**
   * Creates a level-three Markdown heading.
   *
   * @param title - Heading text.
   * @returns A level-three heading.
   */
  h3(title: string): string {
    return this.h(3, title);
  }

  /**
   * Creates a level-four Markdown heading.
   *
   * @param title - Heading text.
   * @returns A level-four heading.
   */
  h4(title: string): string {
    return this.h(4, title);
  }

  /**
   * Creates a level-five Markdown heading.
   *
   * @param title - Heading text.
   * @returns A level-five heading.
   */
  h5(title: string): string {
    return this.h(5, title);
  }

  /**
   * Creates a level-six Markdown heading.
   *
   * @param title - Heading text.
   * @returns A level-six heading.
   */
  h6(title: string): string {
    return this.h(6, title);
  }

  /**
   * Converts the first character of a string to uppercase.
   *
   * @param value - Input string.
   * @returns The string with its first character capitalized.
   */
  ucfirst(value: string): string {
    return ucfirst(value);
  }

  /**
   * Generates an array of numbers within a given range.
   *
   * Supports both ascending and descending ranges.
   *
   * @param start - Starting number.
   * @param end - Ending number.
   * @param step - Difference between consecutive numbers.
   * @returns An array containing the generated numbers.
   *
   * @throws Error when step is zero.
   */
  range(start: number, end: number, step = 1): number[] {
    return range(start, end, step);
  }

  cssClasses(...classes: CssClassValue[]): string {
    return cssClasses(classes);
  }

  match<T, R>(value: T, cases: Record<string, R>, defaultValue: R): R {
    return match(value, cases, defaultValue);
    // return cases[String(value)] ?? defaultValue;
  }

  async files(dirPath: string, ext?: string): Promise<any[]> {
    const dir = this.rootPath(dirPath);

    const entries = await fsPromises.readdir(dir, {
      withFileTypes: true,
    });

    return entries
      .filter((entry) => entry.isFile())
      .filter((entry) => !ext || entry.name.endsWith(`.${ext}`))
      .map((entry) => path.join(dir, entry.name));
  }

  async list(items: string[]): Promise<string> {
    return items.map(async (item) => `- ${item}`).join("\n");
    // return await this.contents(
    //   items.map(async (item) => await this.md(`- ${item}`)),
    // );
  }

  async include(filePath: string, language?: string): Promise<string> {
    // if (!fs.existsSync(filePath)) {
    //   return await this.html(
    //     `<div class="alert-soft-error">File not exist: ${filePath}</div>`,
    //   );
    // }
    // filePath = path.resolve(dirname, "../../", filePath);
    language = language ?? path.extname(filePath).slice(1);
    return await this.md(
      await this.contents([
        `::: code ${path.basename(filePath)}`,
        `\`\`\`${language}`,
        `<!--@include: ${filePath}-->`,
        "```",
        ":::",
      ]),
    );
  }

  async includeFiles(
    files: string[],
    options: IncludeFilesOptions = {},
  ): Promise<string> {
    const { ext, level = 3 } = options;
    try {
      return await this.contents(
        files.map(
          async (file) =>
            await this.contents([
              this.h(level, path.basename(file)),
              await this.include(file, path.extname(file).slice(1)),
            ]),
        ),
      );
    } catch (e) {
      return await this.alert(e as string, "error");
    }
  }

  async alert(content: string, type: AlertType = "info"): Promise<string> {
    return await this.md(await this.contents([`::: ${type}`, content, ":::"]));
  }

  async info(content: string): Promise<string> {
    return await this.alert(content, "info");
  }

  async tip(content: string): Promise<string> {
    return await this.alert(content, "tip");
  }

  async warning(content: string): Promise<string> {
    return await this.alert(content, "warning");
  }

  async danger(content: string): Promise<string> {
    return await this.alert(content, "danger");
  }

  async success(content: string): Promise<string> {
    return await this.alert(content, "success");
  }

  /**
   * Formats source code using Prettier.
   *
   * @param raw - Raw source code.
   * @param parser - Prettier parser to use.
   * @returns Formatted source code.
   */
  async format(
    raw: string,
    parser: prettier.BuiltInParserName,
  ): Promise<string> {
    return prettier.format(raw.trim(), {
      parser,
    });
  }

  /**
   * Formats source code and wraps it in a Markdown fenced code block.
   *
   * @param raw - Raw source code.
   * @param language - Language identifier used by Markdown syntax highlighting.
   * @param parser - Prettier parser used to format the source code.
   * @returns A Markdown code block containing the formatted source.
   */
  async source(
    raw: string,
    language: string,
    parser: prettier.BuiltInParserName = language as prettier.BuiltInParserName,
  ): Promise<string> {
    const formatted = await this.format(raw, parser);

    return [`\`\`\`${language}`, formatted.trim(), "```"].join("\n");
  }

  parserFromLanguage(language: string): prettier.BuiltInParserName {
    const parsers: Record<string, prettier.BuiltInParserName> = {
      html: "html",
      vue: "vue",
      css: "css",
      scss: "scss",
      less: "less",
      js: "babel",
      javascript: "babel",
      jsx: "babel",
      ts: "typescript",
      typescript: "typescript",
      tsx: "typescript",
      json: "json",
      json5: "json5",
      yaml: "yaml",
      markdown: "markdown",
      md: "markdown",
    };

    return parsers[language.toLowerCase()] ?? "babel";
  }

  /**
   * Formats source code and wraps it in a Markdown fenced code block.
   *
   * If no language is provided, `html` is used by default. The Prettier
   * parser is automatically resolved from the language unless a custom
   * parser is explicitly provided.
   *
   * When a title is provided, the code block is wrapped in a custom
   * `code` container with the title.
   *
   * @param raw - Raw source code to format.
   * @param options - Code block options, including language, title, and parser.
   * @returns A Markdown code block containing the formatted source code.
   */
  async codeOld(raw: string, options: CodeOptions = {}): Promise<string> {
    const { title, language = "html", parser: customParser } = options;

    const parser = customParser ?? this.parserFromLanguage(language);

    const formatted = await this.format(raw, parser);

    const out = title
      ? [
          `::: code ${title}`,
          `\`\`\`${language}`,
          formatted.trim(),
          "```",
          ":::",
        ].join("\n")
      : [`\`\`\`${language}`, formatted.trim(), "```"].join("\n");

    return await this.md(out);
  }

  async code(raw: string, options: CodeOptions = {}): Promise<string> {
    const { title, language = "html", parser: customParser } = options;
    const parser = customParser ?? this.parserFromLanguage(language);
    const titleContent = title ? ` [${title}]` : "";
    const formatted = await this.format(raw, parser);
    return await this.format(
      [`\`\`\`${language}${titleContent}`, formatted.trim(), "```"].join("\n"),
      "markdown",
    );
  }

  async codePlain(raw: string, options: CodeOptions = {}): Promise<string> {
    const { title, language = "html", parser: customParser } = options;
    const parser = customParser ?? this.parserFromLanguage(language);
    const titleContent = title ? ` [${title}]` : "";
    const formatted = await this.format(raw, parser);
    return await this.format(
      [`\`\`\`${language}${titleContent}`, formatted.trim(), "```"].join("\n"),
      "markdown",
    );
  }

  async codeGroup(tabs: CodeTab[]) {
    return await this.md(
      await this.contents([
        "::: code-group",
        await this.contents(
          tabs.map(
            async (tab) =>
              await this.contents([
                `\`\`\`${tab.lang} [${tab.title}]`,
                tab.code,
                "```",
              ]),
          ),
        ),
        ":::",
      ]),
    );
  }
  async codePreview(
    raw: string | string[],
    options: CodeOptions = {},
  ): Promise<string> {
    const {
      language = "html",
      parser: customParser,
      className = undefined,
      key = "code",
    } = options;
    const parser = customParser ?? this.parserFromLanguage(language);
    if (Array.isArray(raw)) {
      raw = raw.join("\n");
    }
    const formatted = await this.format(raw, parser);
    const previewClasses = this.cssClasses("preview-container", className);
    const preview = await this.html(
      `<div class="${previewClasses}">${formatted.trim()}</div>`,
    );
    const out = [
      "::: tabs variant:code" + (key ? ` key:${key}` : ""),
      "== Preview",
      preview,
      `== ${language.toLocaleUpperCase()}`,
      await this.code(raw, options),
      ":::",
    ].join("\n");

    return await this.md(out);
  }

  /**
   * Formats HTML source code.
   *
   * @param raw - Raw HTML source.
   * @returns Formatted HTML.
   */
  html(raw: string): Promise<string> {
    const parsed = raw
      .replace(/>\s+</g, "><")
      .replace(/></g, ">\n<")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .join("\n");
    return this.format(parsed, "html");
  }

  /**
   * Formats TypeScript source code.
   *
   * @param raw - Raw TypeScript source.
   * @returns Formatted TypeScript.
   */
  ts(raw: string): Promise<string> {
    return this.format(raw, "typescript");
  }

  /**
   * Formats JavaScript source code.
   *
   * Uses the Babel parser for JavaScript compatibility.
   *
   * @param raw - Raw JavaScript source.
   * @returns Formatted JavaScript.
   */
  js(raw: string): Promise<string> {
    return this.format(raw, "babel");
  }

  /**
   * Formats CSS source code.
   *
   * @param raw - Raw CSS source.
   * @returns Formatted CSS.
   */
  css(raw: string): Promise<string> {
    return this.format(raw, "css");
  }

  /**
   * Formats JSON source code.
   *
   * @param raw - Raw JSON source.
   * @returns Formatted JSON.
   */
  json(raw: string): Promise<string> {
    return this.format(raw, "json");
  }

  /**
   * Formats Markdown source code.
   *
   * @param raw - Raw Markdown source.
   * @returns Formatted Markdown.
   */
  md(raw: string): Promise<string> {
    return this.format(raw, "markdown");
  }

  async mdTabs(tabs: TabItem[], options: TabsOptions = {}): Promise<string> {
    const start = Object.entries(options)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${key}:${value}`;
        }
        return false;
      })
      .filter(Boolean)
      .join(" ");

    return await this.md(
      [
        `::: tabs ${start}`,
        ...tabs.map((tab: TabItem) =>
          [`== ${tab.title}`, tab.content].join("\n"),
        ),
        ":::",
      ].join("\n"),
    );
  }
  /**
   * Gets the page title from the output filename.
   *
   * Removes the file extension and replaces dashes or underscores
   * with whitespace before capitalizing the first character.
   *
   * @returns The generated page title.
   */
  get title(): string {
    const name = path.basename(this.filename, path.extname(this.filename));
    return this.ucfirst(name).replace(/[-_]/g, " ");
  }

  /**
   * Converts the configured frontmatter object into Markdown frontmatter lines.
   *
   * The page title is automatically added before custom frontmatter values.
   *
   * @returns An array of frontmatter lines.
   */
  getFrontmatter(): string[] {
    return Object.entries({
      title: this.title,
      ...this.frontmatter,
    }).map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
  }
  frontmatterToMd(frontmatter: Record<string, unknown>): string {
    return `---\n${stringify(frontmatter)}---\n`;
  }
  /**
   * Resolves and joins nested content values.
   *
   * Supports strings, promises and arbitrarily nested arrays.
   * All promises are resolved before joining the final content.
   *
   * @param contents - Content values to flatten and combine.
   * @returns A single Markdown content string.
   */
  async contents(
    contents: (Content | Content[])[],
    sep: number = 1,
  ): Promise<string> {
    /**
     * Recursively flattens nested content arrays.
     *
     * @param items - Content items to flatten.
     * @returns A flat array of content values.
     */
    const flatten = (items: (Content | Content[])[]): Content[] =>
      items.flatMap((item) => (Array.isArray(item) ? flatten(item) : item));

    return (await Promise.all(flatten(contents))).join("\n".repeat(sep));
  }

  /**
   * Creates a documentation section containing a preview and usage example.
   *
   * The code is formatted and displayed first as a preview,
   * followed by the same code inside a Markdown source block.
   *
   * @param code - Source code to display.
   * @param level - Heading level for the Preview and Usage sections.
   * @param language - Language identifier for syntax highlighting.
   * @param parser - Prettier parser used to format the code.
   * @returns Generated Preview and Usage Markdown.
   */
  async previewAndUsage(
    code: string,
    level: number = 2,
    language: string,
    parser: prettier.BuiltInParserName = language as prettier.BuiltInParserName,
  ): Promise<string> {
    return this.contents([
      this.h(level, "Preview"),
      await this.format(code, parser),
      this.h(level, "Usage"),
      await this.source(code, language, parser),
    ]);
  }

  async container({
    className = undefined,
    atts = undefined,
    tag = "div",
    content = "",
  }: ContainerOptions = {}) {
    const attributes = attrs({ class: className, ...atts });
    const htmlTag = [tag, attributes].join(" ");
    return await this.html(
      await this.contents([
        `<${htmlTag}>`,
        Array.isArray(content) ? await this.contents(content) : content,
        `</${tag}>`,
      ]),
    );
  }

  /**
   * Builds the complete Markdown page.
   *
   * Combines:
   * - Frontmatter
   * - Page title
   * - Generated content
   *
   * The final result is formatted using Prettier.
   *
   * @returns The complete formatted Markdown document.
   */
  async mdPage(): Promise<string> {
    // const scripts = (await this.scripts()).filter(Boolean).join("\n").trim();
    const scripts = await this.scriptsContent();
    const content = (await this.content()).filter(Boolean).join("\n\n").trim();
    return await prettier.format(
      [
        this.frontmatterToMd({
          outline: "deep",
          ...this.frontmatter,
        }),
        scripts,
        "",
        this.frontmatter.layout !== "home" ? this.h(1, this.title) : undefined,
        "",
        content,
        "",
      ].join("\n"),
      { parser: "markdown" },
    );
  }

  /**
   * Generates the Markdown page and writes it to disk.
   *
   * Creates the destination directory when it does not exist.
   *
   * @returns A promise that resolves when the file has been generated.
   */
  async generate(): Promise<void> {
    const file = path.resolve(dirname, "../../", this.filename);

    console.log(`Generating: ${file}`);

    await fsPromises.mkdir(path.dirname(file), {
      recursive: true,
    });

    const content = await this.mdPage();
    console.log("Content", content);

    await fsPromises.writeFile(file, content, "utf8");

    console.log("Done.");
  }
}
