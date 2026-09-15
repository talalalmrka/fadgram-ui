import fs from "node:fs";
import path from "node:path";
import { computed, type ComputedRef } from "vue";
import type { PageData } from "vitepress";

type Frontmatter = PageData["frontmatter"];

interface ScanOptions {
  docsDir: string;
  sort: boolean;
  ignorePatterns: string[];
}

const docsDir = path.resolve(__dirname, "../../../..");

export function usePages(): ComputedRef<PageData[]> {
  return computed(() => {
    return scanDirectory(docsDir, {
      docsDir,
      sort: true,
      ignorePatterns: loadPagesIgnore(docsDir),
    });
  });
}

function scanDirectory(directory: string, options: ScanOptions): PageData[] {
  const entries = fs
    .readdirSync(directory, {
      withFileTypes: true,
    })
    .filter((entry) => {
      if (entry.name.startsWith(".")) {
        return false;
      }

      const absolutePath = path.join(directory, entry.name);

      const relativePath = normalizePath(
        path.relative(options.docsDir, absolutePath),
      );

      if (
        isIgnored(relativePath, entry.isDirectory(), options.ignorePatterns)
      ) {
        return false;
      }

      if (entry.isDirectory()) {
        return true;
      }

      return entry.isFile() && entry.name.endsWith(".md");
    });

  const pages: PageData[] = [];

  for (const entry of entries) {
    if (entry.isFile()) {
      const filePath = path.join(directory, entry.name);

      const page = createPageData(filePath, options.docsDir);

      if (page) {
        pages.push(page);
      }

      continue;
    }

    if (entry.isDirectory()) {
      const directoryPath = path.join(directory, entry.name);

      pages.push(...scanDirectory(directoryPath, options));
    }
  }

  if (options.sort) {
    sortPages(pages);
  }

  return pages;
}

function createPageData(filePath: string, docsDir: string): PageData | null {
  const frontmatter = getFrontmatter(filePath);

  if (frontmatter.sidebar === false) {
    return null;
  }

  const relativePath = normalizePath(path.relative(docsDir, filePath));

  const fileName = path.basename(filePath, ".md");

  const title =
    frontmatter.title ?? getMarkdownTitle(filePath) ?? formatTitle(fileName);

  const url = buildUrl(relativePath);

  return {
    title,
    description: frontmatter.description ?? "",
    frontmatter,
    relativePath,
    filePath,
    headers: [],
    // url,
  };
}

function getFrontmatter(filePath: string): Frontmatter {
  const content = fs.readFileSync(filePath, "utf8");

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    return {};
  }

  const result: Frontmatter = {};

  for (const line of match[1].split(/\r?\n/)) {
    const match = line.match(/^([\w-]+):\s*(.*?)\s*$/);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;

    const value = cleanFrontmatterValue(rawValue);

    switch (key) {
      case "title":
        result.title = value;
        break;

      case "description":
        result.description = value;
        break;

      case "icon":
        result.icon = value;
        break;

      case "order":
        result.order = Number(value);
        break;

      case "sidebar":
        result.sidebar = value !== "false";
        break;

      default:
        result[key] = value;
        break;
    }
  }

  return result;
}
function cleanFrontmatterValue(value: string): string {
  return value.trim().replace(/^["']|["']$/g, "");
}
function getMarkdownTitle(filePath: string): string | null {
  const content = fs.readFileSync(filePath, "utf8");

  const match = content.match(/^#\s+(.+?)(?:\s+#)?\s*$/m);

  return match?.[1]?.trim() ?? null;
}

function loadPagesIgnore(docsDir: string): string[] {
  const filePath = path.join(docsDir, ".pagesignore");

  if (!fs.existsSync(filePath)) {
    return [];
  }

  return fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}

function isIgnored(
  relativePath: string,
  isDirectory: boolean,
  patterns: string[],
): boolean {
  const normalizedPath = normalizePath(relativePath);

  return patterns.some((pattern) => {
    const normalizedPattern = normalizePath(pattern);

    if (normalizedPath === normalizedPattern) {
      return true;
    }

    if (normalizedPattern.endsWith("/")) {
      const directory = normalizedPattern.slice(0, -1);

      return (
        normalizedPath === directory ||
        normalizedPath.startsWith(`${directory}/`)
      );
    }

    if (minimatch(normalizedPath, normalizedPattern)) {
      return true;
    }

    if (!normalizedPattern.includes("/")) {
      const basename = path.posix.basename(normalizedPath);

      if (minimatch(basename, normalizedPattern)) {
        return true;
      }
    }

    if (isDirectory) {
      return minimatch(normalizedPath, `${normalizedPattern}/**`);
    }

    return false;
  });
}

function minimatch(value: string, pattern: string): boolean {
  return globToRegex(pattern).test(value);
}

function globToRegex(pattern: string): RegExp {
  let result = "^";

  let i = 0;

  while (i < pattern.length) {
    const char = pattern[i];

    if (char === "*") {
      if (pattern[i + 1] === "*") {
        result += ".*";
        i += 2;
        continue;
      }

      result += "[^/]*";
      i++;
      continue;
    }

    if (char === "?") {
      result += "[^/]";
      i++;
      continue;
    }

    result += escapeRegex(char);
    i++;
  }

  result += "$";

  return new RegExp(result);
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sortPages(pages: PageData[]): void {
  pages.sort((a, b) => {
    const orderA =
      typeof a.frontmatter.order === "number"
        ? a.frontmatter.order
        : Number.MAX_SAFE_INTEGER;

    const orderB =
      typeof b.frontmatter.order === "number"
        ? b.frontmatter.order
        : Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.title.localeCompare(b.title);
  });
}

function formatTitle(value: string): string {
  return value
    .replace(/^\d+[-_]/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizePath(value: string): string {
  return value.split(path.sep).join("/");
}

function buildUrl(relativePath: string): string {
  const segments = relativePath
    .replace(/\.md$/, "")
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.replace(/^\d+[-_]*/, ""));

  if (segments.at(-1) === "index") {
    segments.pop();
  }

  return segments.length ? `/${segments.join("/")}` : "/";
}
