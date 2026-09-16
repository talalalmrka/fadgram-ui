import fs from "node:fs";
import path from "node:path";
import type { SidebarItem, SidebarOptions, Frontmatter } from "../../types";
export function generateSidebar(
  additionalItems?: SidebarItem[],
  options: SidebarOptions = {},
): SidebarItem[] {
  const {
    docsDir = __dirname + "/../../..",
    basePath = "",
    sort = true,
  } = options;

  const ignorePatterns = loadSidebarIgnore(docsDir);

  const items = scanDirectory(docsDir, basePath, {
    docsDir,
    sort,
    ignorePatterns,
  });

  if (additionalItems?.length) {
    items.push(...additionalItems);
  }

  if (sort) {
    sortItems(items);
  }

  return cleanSidebarItems(items);
}
export function generateSidebarr(
  additionalItems?: SidebarItem[],
  options: SidebarOptions = {},
): SidebarItem[] {
  const {
    docsDir = __dirname + "/../../..",
    basePath = "",
    sort = true,
  } = options;
  const ignorePatterns = loadSidebarIgnore(docsDir);

  const items = scanDirectory(docsDir, basePath, {
    docsDir: docsDir,
    sort: sort,
    ignorePatterns: ignorePatterns,
  });

  return cleanSidebarItems(items);
}

interface ScanOptions {
  docsDir: string;
  sort: boolean;
  ignorePatterns: string[];
}

function scanDirectory(
  directory: string,
  urlPath: string,
  options: ScanOptions,
): SidebarItem[] {
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

  const items: SidebarItem[] = [];

  for (const entry of entries) {
    if (entry.isFile()) {
      const filePath = path.join(directory, entry.name);
      const item = createFileItem(filePath, urlPath);

      if (item) {
        items.push(item);
      }

      continue;
    }

    if (entry.isDirectory()) {
      const directoryPath = path.join(directory, entry.name);

      const item = createDirectoryItem(
        directoryPath,
        entry.name,
        urlPath,
        options,
      );

      if (item) {
        items.push(item);
      }
    }
  }

  if (options.sort) {
    sortItems(items);
  }

  return items;
}

function createFileItem(filePath: string, urlPath: string): SidebarItem | null {
  const fileName = path.basename(filePath, ".md");
  const frontmatter = getFrontmatter(filePath);

  if (frontmatter.sidebar === false) {
    return null;
  }

  // README.md is handled as the directory landing page.
  if (fileName === "README") {
    return null;
  }

  const slug = fileName === "index" ? "" : removeNumericPrefix(fileName);

  const title =
    frontmatter.title ?? getMarkdownTitle(filePath) ?? formatTitle(fileName);

  const order = frontmatter.order ?? getOrder(fileName);
  const icon = frontmatter.icon;

  return {
    text: title,
    link: fileName === "index" ? undefined : buildUrl(urlPath, slug),
    ...(icon ? { icon } : {}),
    order,
    collapsed: frontmatter.collapsed,
  } as SidebarItem;
}

function createDirectoryItem(
  directoryPath: string,
  directoryName: string,
  urlPath: string,
  options: ScanOptions,
): SidebarItem | null {
  /*
   * Ignore directories that do not contain any markdown files.
   *
   * This also checks nested directories, so a directory containing
   * only images, components, assets, or other non-markdown files
   * will not appear in the sidebar.
   */
  if (!hasMarkdownFiles(directoryPath, options)) {
    return null;
  }

  const indexFile = findIndexFile(directoryPath);
  const indexFrontmatter = indexFile ? getFrontmatter(indexFile) : {};

  const children = scanDirectory(
    directoryPath,
    buildPath(urlPath, removeNumericPrefix(directoryName)),
    options,
  );

  const title =
    indexFrontmatter.title ??
    (indexFile ? getMarkdownTitle(indexFile) : null) ??
    formatTitle(directoryName);

  const order = indexFrontmatter.order ?? getOrder(directoryName);
  const icon = indexFrontmatter.icon;

  /*
   * A directory with children is a collapsible group.
   *
   * Collapsible groups should not have a link.
   * The index.md / README.md is still used for metadata such as
   * title, icon, and order.
   *
   * If the directory has no children, its index file can act
   * as the directory link.
   */
  const link =
    children.length === 0 && indexFile && indexFrontmatter.sidebar !== false
      ? buildUrl(urlPath, removeNumericPrefix(directoryName))
      : undefined;

  return {
    text: title,
    ...(link ? { link } : {}),
    ...(icon ? { icon } : {}),
    ...(children.length ? { items: children } : {}),
    collapsed: false,
    order,
  } as SidebarItem;
}

function hasMarkdownFiles(directory: string, options: ScanOptions): boolean {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);
    const relativePath = normalizePath(
      path.relative(options.docsDir, absolutePath),
    );

    if (isIgnored(relativePath, entry.isDirectory(), options.ignorePatterns)) {
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      const frontmatter = getFrontmatter(absolutePath);

      if (frontmatter.sidebar !== false) {
        return true;
      }

      continue;
    }

    if (entry.isDirectory() && hasMarkdownFiles(absolutePath, options)) {
      return true;
    }
  }

  return false;
}

function findIndexFile(directory: string): string | null {
  const candidates = ["index.md", "README.md"];

  for (const name of candidates) {
    const filePath = path.join(directory, name);

    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

function getFrontmatter(filePath: string): Frontmatter {
  const content = fs.readFileSync(filePath, "utf8");

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    return {};
  }

  const result: Frontmatter = {};

  for (const line of match[1].split(/\r?\n/)) {
    const lineMatch = line.match(/^([\w-]+):\s*(.*?)\s*$/);

    if (!lineMatch) {
      continue;
    }

    const [, key, rawValue] = lineMatch;
    const value = cleanFrontmatterValue(rawValue);

    switch (key) {
      case "title":
        result.title = value;
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

      case "collapsed":
        result.collapsed = value === "true";
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

function loadSidebarIgnore(docsDir: string): string[] {
  const filePath = path.join(docsDir, ".sidebarignore");

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

    if (isDirectory && minimatch(normalizedPath, `${normalizedPattern}/**`)) {
      return true;
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

function sortItems(items: SidebarItem[]): void {
  items.sort((a: any, b: any) => {
    const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.order ?? Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return String(a.text).localeCompare(String(b.text));
  });
}

function cleanSidebarItems(items: SidebarItem[]): SidebarItem[] {
  return items.map((item) => {
    const clone: any = { ...item };

    delete clone.order;

    if (clone.items && Array.isArray(clone.items)) {
      clone.items = cleanSidebarItems(clone.items);
    }

    return clone;
  });
}

function getOrder(value: string): number {
  const match = value.match(/^(\d+)[-_]/);

  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function removeNumericPrefix(value: string): string {
  return value.replace(/^\d+[-_]/, "");
}

function formatTitle(value: string): string {
  return removeNumericPrefix(value)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizePath(value: string): string {
  return value.split(path.sep).join("/");
}

function buildPath(parent: string, child: string): string {
  return [parent, child].filter(Boolean).join("/");
}

function buildUrl(parent: string, slug: string): string {
  const value = buildPath(parent, slug);

  return value ? `/${value}` : "/";
}
