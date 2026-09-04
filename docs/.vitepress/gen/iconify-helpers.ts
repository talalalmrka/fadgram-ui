import { icons as biIconSet } from "@iconify-json/bi";
import { icons as mdiIconSet } from "@iconify-json/mdi";
import { icons as fgIconSet } from "@icons/fg";

import type {
  IconifyAlias,
  IconifyIcon,
  IconifyInfo,
  IconifyJSON,
} from "@iconify/types";

import {
  getIconData,
  getIcons,
  parseIconSet,
  getIconCSS,
  getIconsCSS,
  getIconContentCSS,
  getIconsContentCSS,
  iconToSVG,
  iconToHTML,
} from "@iconify/utils";
import { IconContentIconOptions } from "@iconify/utils/lib/css/types";

type IconifyCollection = {
  icons: IconifyJSON;
  info?: IconifyInfo;
};

const collections: Record<string, IconifyCollection> = {
  bi: {
    icons: biIconSet,
  },

  mdi: {
    icons: mdiIconSet,
  },

  fg: {
    icons: fgIconSet,
  },
};

const iconCache = new Map<string, IconifyIcon | null>();

const infoCache = new Map<string, IconifyInfo | null>();

function normalizePrefix(prefix: string): string {
  return prefix.trim().toLowerCase();
}

function normalizeName(name: string): string {
  return name.trim();
}

function getCollection(prefix: string): IconifyCollection | null {
  return collections[normalizePrefix(prefix)] ?? null;
}

function requireCollection(prefix: string): IconifyCollection {
  const normalizedPrefix = normalizePrefix(prefix);

  if (!normalizedPrefix) {
    throw new Error("Iconify prefix cannot be empty.");
  }

  const collection = getCollection(normalizedPrefix);

  if (!collection) {
    throw new Error(
      `Iconify collection "${normalizedPrefix}" is not installed or registered.`,
    );
  }

  return collection;
}

/**
 * Check whether an icon collection is available.
 */
export function hasIconifyCollection(prefix: string): boolean {
  return getCollection(prefix) !== null;
}

/**
 * Get all registered icon collection prefixes.
 */
export function getIconifyPrefixes(): string[] {
  return Object.keys(collections);
}

/**
 * Get IconifyJSON for a collection.
 */
export function getIconifyJSON(prefix: string): IconifyJSON {
  return requireCollection(prefix).icons;
}

/**
 * Get collection information.
 */
export function getIconifyInfo(prefix: string): IconifyInfo | null {
  const normalizedPrefix = normalizePrefix(prefix);

  if (!normalizedPrefix) {
    return null;
  }

  if (infoCache.has(normalizedPrefix)) {
    return infoCache.get(normalizedPrefix) ?? null;
  }

  const info = getCollection(normalizedPrefix)?.info ?? null;

  infoCache.set(normalizedPrefix, info);

  return info;
}

/**
 * Get one icon with alias resolution.
 */
export function getIconifyIcon(
  prefix: string,
  name: string,
): IconifyIcon | null {
  const normalizedPrefix = normalizePrefix(prefix);
  const normalizedName = normalizeName(name);

  if (!normalizedPrefix || !normalizedName) {
    return null;
  }

  const key = `${normalizedPrefix}:${normalizedName}`;

  if (iconCache.has(key)) {
    return iconCache.get(key) ?? null;
  }

  const iconSet = getIconifyJSON(normalizedPrefix);

  const icon = getIconData(iconSet, normalizedName);

  iconCache.set(key, icon);

  return icon;
}

/**
 * Check whether an icon exists.
 */
export function hasIconifyIcon(prefix: string, name: string): boolean {
  return getIconifyIcon(prefix, name) !== null;
}

/**
 * Get raw icon data without alias resolution.
 */
export function getRawIconifyIcon(
  prefix: string,
  name: string,
): IconifyIcon | null {
  const iconSet = getIconifyJSON(prefix);

  return iconSet.icons[name] ?? null;
}

/**
 * Get raw alias data.
 */
export function getIconifyAlias(
  prefix: string,
  name: string,
): IconifyAlias | null {
  const iconSet = getIconifyJSON(prefix);

  return iconSet.aliases?.[name] ?? null;
}

/**
 * Get all icon names.
 */
export function getIconifyNames(
  prefix: string,
  includeAliases = true,
): string[] {
  const iconSet = getIconifyJSON(prefix);

  const names = Object.keys(iconSet.icons);

  if (includeAliases && iconSet.aliases) {
    names.push(...Object.keys(iconSet.aliases));
  }

  return names;
}

/**
 * Get a subset of an icon set.
 */
export function getIconifyIcons(
  prefix: string,
  names: string[],
): IconifyJSON | null {
  const iconSet = getIconifyJSON(prefix);

  return getIcons(iconSet, names);
}

/**
 * Parse every icon in a collection.
 */
export function parseIconify(
  prefix: string,
  callback: (name: string, icon: IconifyIcon | null) => void,
): void {
  const iconSet = getIconifyJSON(prefix);

  parseIconSet(iconSet, callback);
}

/**
 * Generate CSS for one icon.
 */
export function getIconifyCSS(
  prefix: string,
  name: string,
  options: Parameters<typeof getIconCSS>[1] = {},
): string {
  const icon = getIconifyIcon(prefix, name);

  if (!icon) {
    throw new Error(`Icon not found: ${prefix}:${name}`);
  }

  return getIconCSS(icon, options);
}

/**
 * Generate CSS for multiple icons.
 */
export function getIconifyIconsCSS(
  prefix: string,
  names: string[],
  options: Parameters<typeof getIconsCSS>[2] = {},
): string {
  const iconSet = getIconifyJSON(prefix);

  return getIconsCSS(iconSet, names, options);
}

/**
 * Generate pseudo-element CSS for one icon.
 */
/**
 * Generate pseudo-element CSS for one icon.
 */
export function getIconifyContentCSS(
  prefix: string,
  name: string,
  options: IconContentIconOptions = {},
): string {
  const icon = getIconifyIcon(prefix, name);

  if (!icon) {
    throw new Error(`Icon not found: ${prefix}:${name}`);
  }

  return getIconContentCSS(icon, options);
}

/**
 * Generate pseudo-element CSS for multiple icons.
 */
export function getIconifyIconsContentCSS(
  prefix: string,
  names: string[],
  options: Parameters<typeof getIconsContentCSS>[2] = {},
): string {
  const iconSet = getIconifyJSON(prefix);

  return getIconsContentCSS(iconSet, names, options);
}

/**
 * Generate SVG data.
 */
export function getIconifySVGData(
  prefix: string,
  name: string,
  options: Parameters<typeof iconToSVG>[1] = {},
) {
  const icon = getIconifyIcon(prefix, name);

  if (!icon) {
    return null;
  }

  return iconToSVG(icon, options);
}

/**
 * Generate a complete SVG HTML string for an icon.
 */
export function getIconifySVG(
  prefix: string,
  name: string,
  options: Parameters<typeof iconToSVG>[1] = {},
): string | null {
  const icon = getIconifyIcon(prefix, name);

  if (!icon) {
    return null;
  }

  const rendered = iconToSVG(icon, options);

  return iconToHTML(rendered.body, rendered.attributes);
}

/**
 * Clear all caches.
 */
export function clearIconifyCache(): void {
  iconCache.clear();
  infoCache.clear();
}

/**
 * Clear cache for one collection.
 */
export function clearIconifyCollectionCache(prefix: string): void {
  const normalizedPrefix = normalizePrefix(prefix);

  infoCache.delete(normalizedPrefix);

  const prefixKey = `${normalizedPrefix}:`;

  for (const key of iconCache.keys()) {
    if (key.startsWith(prefixKey)) {
      iconCache.delete(key);
    }
  }
}
