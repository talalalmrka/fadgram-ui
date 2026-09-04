import { readFile } from "node:fs/promises";

import { locate } from "@iconify/json";

import type {
  IconifyAlias,
  IconifyIcon,
  IconifyInfo,
  IconifyJSON,
} from "@iconify/types";

import { getIconData } from "@iconify/utils";

import { getIcons, parseIconSet } from "@iconify/utils";

import { iconToSVG } from "@iconify/utils";

import { replaceIDs } from "@iconify/utils";

import {
  getIconCSS,
  getIconsCSS,
  getIconContentCSS,
  getIconsContentCSS,
} from "@iconify/utils";

const jsonCache = new Map<string, Promise<IconifyJSON>>();

const iconCache = new Map<string, IconifyIcon | null>();

export interface IconifySVGOptions {
  width?: string | number;
  height?: string | number;
  inline?: boolean;
  hAlign?: "left" | "center" | "right";
  vAlign?: "top" | "middle" | "bottom";
  slice?: boolean;
  hFlip?: boolean;
  vFlip?: boolean;
  rotate?: number;
  replaceIDs?: boolean;
  idPrefix?: string;
}

export interface IconifyCSSOptions {
  iconSelector?: string;
  commonSelector?: string;
  overrideSelector?: string;
  pseudoSelector?: string;
  varName?: string;
  mode?: "background" | "mask";
  color?: string;
  forceSquare?: boolean;
}

export interface IconifySVGData {
  attributes: Record<string, string>;
  viewBox: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  body: string;
}

function normalizePrefix(prefix: string): string {
  return prefix.trim();
}

function normalizeName(name: string): string {
  return name.trim();
}

function cacheKey(prefix: string, name: string): string {
  return `${prefix}:${name}`;
}

/**
 * Load IconifyJSON by prefix.
 */
export async function getIconifyJSON(prefix: string): Promise<IconifyJSON> {
  prefix = normalizePrefix(prefix);

  if (!prefix) {
    throw new Error("Iconify prefix cannot be empty.");
  }

  const cached = jsonCache.get(prefix);

  if (cached) {
    return cached;
  }

  const promise = (async () => {
    const filename = locate(prefix);

    if (!filename) {
      throw new Error(`Iconify collection not found: ${prefix}`);
    }

    const source = await readFile(filename, "utf8");

    return JSON.parse(source) as IconifyJSON;
  })();

  jsonCache.set(prefix, promise);

  try {
    return await promise;
  } catch (error) {
    jsonCache.delete(prefix);

    throw error;
  }
}

/**
 * Check whether an icon collection exists.
 */
export async function hasIconifyJSON(prefix: string): Promise<boolean> {
  try {
    await getIconifyJSON(prefix);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get one icon by prefix and name.
 */
export async function getIconifyIcon(
  prefix: string,
  name: string,
): Promise<IconifyIcon | null> {
  prefix = normalizePrefix(prefix);
  name = normalizeName(name);

  if (!prefix || !name) {
    return null;
  }

  const key = cacheKey(prefix, name);

  if (iconCache.has(key)) {
    return iconCache.get(key) ?? null;
  }

  const iconSet = await getIconifyJSON(prefix);

  const icon = getIconData(iconSet, name);

  iconCache.set(key, icon);

  return icon;
}

/**
 * Check whether an icon exists.
 */
export async function hasIconifyIcon(
  prefix: string,
  name: string,
): Promise<boolean> {
  return (await getIconifyIcon(prefix, name)) !== null;
}

/**
 * Get raw icon without alias resolution.
 */
export async function getRawIconifyIcon(
  prefix: string,
  name: string,
): Promise<IconifyIcon | null> {
  const iconSet = await getIconifyJSON(prefix);

  return iconSet.icons[name] ?? null;
}

/**
 * Get raw alias data.
 */
export async function getIconifyAlias(
  prefix: string,
  name: string,
): Promise<IconifyAlias | null> {
  const iconSet = await getIconifyJSON(prefix);

  return iconSet.aliases?.[name] ?? null;
}

/**
 * Get all icon names.
 */
export async function getIconifyNames(
  prefix: string,
  includeAliases = true,
): Promise<string[]> {
  const iconSet = await getIconifyJSON(prefix);

  const names = Object.keys(iconSet.icons);

  if (includeAliases && iconSet.aliases) {
    names.push(...Object.keys(iconSet.aliases));
  }

  return names;
}

/**
 * Get a subset of icons.
 */
export async function getIconifyIcons(
  prefix: string,
  names: string[],
): Promise<IconifyJSON> {
  const iconSet = await getIconifyJSON(prefix);

  return getIcons(iconSet, names);
}

/**
 * Parse all icons.
 */
export async function parseIconify(
  prefix: string,
  callback: (name: string, icon: IconifyIcon | null) => void,
): Promise<void> {
  const iconSet = await getIconifyJSON(prefix);

  parseIconSet(iconSet, callback);
}

/**
 * Generate SVG data.
 */
export async function getIconifySVGData(
  prefix: string,
  name: string,
  options: IconifySVGOptions = {},
): Promise<IconifySVGData | null> {
  const icon = await getIconifyIcon(prefix, name);

  if (!icon) {
    return null;
  }

  const result = iconToSVG(icon, {
    width: options.width ?? "1em",
    height: options.height ?? "1em",
    inline: options.inline ?? false,
    hAlign: options.hAlign ?? "center",
    vAlign: options.vAlign ?? "middle",
    slice: options.slice ?? false,
    hFlip: options.hFlip ?? false,
    vFlip: options.vFlip ?? false,
    rotate: options.rotate ?? 0,
  });

  let body = result.body;

  if (options.replaceIDs !== false) {
    body = replaceIDs(body, options.idPrefix);
  }

  return {
    attributes: result.attributes,
    viewBox: result.viewBox,
    body,
  };
}

/**
 * Generate complete SVG.
 */
export async function getIconifySVG(
  prefix: string,
  name: string,
  options: IconifySVGOptions = {},
): Promise<string | null> {
  const result = await getIconifySVGData(prefix, name, options);

  if (!result) {
    return null;
  }

  const attributes = Object.entries(result.attributes)
    .map(([key, value]) => `${key}="${escapeAttribute(value)}"`)
    .join(" ");

  return ["<svg", attributes, ">", result.body, "</svg>"].join(" ");
}

/**
 * Generate CSS for one icon.
 */
export async function getIconifyCSS(
  prefix: string,
  name: string,
  options: IconifyCSSOptions = {},
): Promise<string> {
  const iconSet = await getIconifyJSON(prefix);

  return getIconCSS(iconSet, name, options);
}

/**
 * Generate CSS for multiple icons.
 */
export async function getIconifyIconsCSS(
  prefix: string,
  names: string[],
  options: IconifyCSSOptions = {},
): Promise<string> {
  const iconSet = await getIconifyJSON(prefix);

  return getIconsCSS(iconSet, names, options);
}

/**
 * Generate pseudo-element CSS for one icon.
 */
export async function getIconifyContentCSS(
  prefix: string,
  name: string,
  options: IconifyCSSOptions = {},
): Promise<string> {
  const iconSet = await getIconifyJSON(prefix);

  return getIconContentCSS(iconSet, name, options);
}

/**
 * Generate pseudo-element CSS for multiple icons.
 */
export async function getIconifyIconsContentCSS(
  prefix: string,
  names: string[],
  options: IconifyCSSOptions = {},
): Promise<string> {
  const iconSet = await getIconifyJSON(prefix);

  return getIconsContentCSS(iconSet, names, options);
}

/**
 * Clear all caches.
 */
export function clearIconifyCache(): void {
  jsonCache.clear();
  iconCache.clear();
}

/**
 * Clear cache for one collection.
 */
export function clearIconifyCollectionCache(prefix: string): void {
  prefix = normalizePrefix(prefix);

  jsonCache.delete(prefix);

  for (const key of iconCache.keys()) {
    if (key.startsWith(`${prefix}:`)) {
      iconCache.delete(key);
    }
  }
}

/**
 * Escape SVG attribute values.
 */
function escapeAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
