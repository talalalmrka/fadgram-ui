import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import prettier from "prettier";
import {
  range,
  ucfirst,
  cssClasses,
  match,
  type CssClassValue,
} from "./helpers";

/**
 * Absolute path to the directory containing this generator file.
 */
const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Frontmatter values used by the generated Markdown page.
 */
type Frontmatter = Record<string, unknown>;

/**
 * Supported content types.
 *
 * Content can be:
 * - A string
 * - A Promise that resolves to a string
 * - An array containing other Content values
 */
type Content = string | Promise<string> | Content[];

// type CssClassValue = string | false | null | undefined | Record<string, boolean> | CssClassValue[];

export type AlertType =
  "info" | "tip" | "success" | "warning" | "danger" | "error" | "details";

interface CodeOptions {
  title?: string;
  language?: string;
  parser?: prettier.BuiltInParserName;
}

interface IncludeFilesOptions {
  ext?: string;
  level?: number;
}

/**
 * Base class for generating Markdown documentation pages.
 *
 * Provides helpers for:
 * - Markdown headings
 * - Text formatting
 * - Source code blocks
 * - HTML, TypeScript, JavaScript, CSS, JSON and Markdown formatting
 * - Frontmatter generation
 * - Nested asynchronous content
 * - Preview and usage sections
 * - Writing the final Markdown file
 */
export abstract class Generator {
  /**
   * Creates a new documentation generator.
   *
   * @param filename - Output Markdown file path.
   * @param frontmatter - Additional VitePress frontmatter options.
   */
  constructor(
    protected readonly filename: string,
    protected readonly frontmatter: Frontmatter = {
      outline: "deep",
    },
  ) {}

  /**
   * Generates the page content.
   *
   * Every generator must implement this method.
   *
   * @returns An array of Markdown content blocks.
   */
  abstract content(): Promise<string[]>;

  async header(): Promise<string[]> {
    return [];
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
    const dir = path.resolve(dirname, dirPath);

    const entries = await fs.readdir(dir, {
      withFileTypes: true,
    });

    return entries
      .filter((entry) => entry.isFile())
      .filter((entry) => !ext || entry.name.endsWith(`.${ext}`))
      .map((entry) => path.join(dir, entry.name));
    /* const dir = path.resolve(dirname, dirPath);
    const scan = await fs.readdir(dir, {
      withFileTypes: true,
    });
    let files = scan.filter((file) => file.isFile());
    if (ext) {
      files = files.filter((file) => file.name.endsWith(`.${ext}`));
    }
    // return files;
    return files.map((file) => path.join(dir, file.name)); */
  }

  async list(items: string[]): Promise<string> {
    return await this.contents(
      items.map(async (item) => await this.md(`- ${item}`)),
    );
  }

  async include(filePath: string, language?: string): Promise<string> {
    // filePath = path.resolve(dirname, "../../", filePath);
    language = language ?? path.extname(filePath);
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
    // const files = await this.files(dirPath, ext);
    try {
      return await this.contents(
        files.map(
          async (file) =>
            await this.contents([
              this.h(level, path.basename(file)),
              path.basename(path.dirname(file)),
              await this.include(
                path.join(
                  `../${path.basename(path.dirname(file))}`,
                  path.basename(file),
                ),
                // `../css/${file.name}`,
                path.extname(file),
              ),
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
  async code(raw: string, options: CodeOptions = {}): Promise<string> {
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

  async codePreview(raw: string, options: CodeOptions = {}): Promise<string> {
    const { title, language = "html", parser: customParser } = options;

    const parser = customParser ?? this.parserFromLanguage(language);

    const formatted = await this.format(raw, parser);

    const out = [
      "::: tabs",
      "== Preview",
      formatted.trim(),
      "== Code",
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
    return this.format(raw, "html");
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

  /**
   * Resolves and joins nested content values.
   *
   * Supports strings, promises and arbitrarily nested arrays.
   * All promises are resolved before joining the final content.
   *
   * @param contents - Content values to flatten and combine.
   * @returns A single Markdown content string.
   */
  async contents(contents: (Content | Content[])[]): Promise<string> {
    /**
     * Recursively flattens nested content arrays.
     *
     * @param items - Content items to flatten.
     * @returns A flat array of content values.
     */
    const flatten = (items: (Content | Content[])[]): Content[] =>
      items.flatMap((item) => (Array.isArray(item) ? flatten(item) : item));

    return (await Promise.all(flatten(contents))).join("\n");
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
    const header = (await this.header()).filter(Boolean).join("\n\n").trim();
    const content = (await this.content()).filter(Boolean).join("\n\n").trim();

    const mdContent = [
      header,
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

    await fs.mkdir(path.dirname(file), {
      recursive: true,
    });

    const content = await this.mdPage();

    await fs.writeFile(file, content, "utf8");

    console.log("Done.");
  }
}
