import prettier from "prettier";
import { icons as biIconSet } from "@iconify-json/bi";
import fgIconSet from "../../../icons/fg/icons.json";

export type Content =
  string | Promise<string> | number | Promise<number> | Content[];

export type CssClassCondition = string | number | boolean | null | undefined;

export type CssClassValue =
  | string
  | false
  | null
  | undefined
  | Record<string, CssClassCondition>
  | CssClassValue[];

export type HtmlAttrValue = string | number | boolean | null | undefined | any;

export type HtmlAttrs = Record<string, HtmlAttrValue>;

export const colors = [
  "primary",
  "secondary",
  "light",
  "dark",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
] as const;

export type ThemeColor = (typeof colors)[number];

export const alertColors = ["info", "success", "warning", "error"] as const;
export type AlertColor = (typeof alertColors)[number];
export const alertIcons: Record<AlertColor, string> = {
  info: "bi-info-circle",
  success: "bi-check2-circle",
  warning: "bi-exclamation-circle",
  error: "bi-exclamation-triangle",
};

export const shades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export const buttonSizes = ["xs", "sm", "default", "lg", "xl", "xxl"] as const;

export const inputSizes = ["xs", "sm", "default", "lg", "xl", "xxl"] as const;

export const progressSizes = [
  "xs",
  "sm",
  "default",
  "lg",
  "xl",
  "2xl",
] as const;

export const inputGroupSizes = [
  "xs",
  "sm",
  "default",
  "lg",
  "xl",
  "xxl",
] as const;

export const badgeSizes = ["xs", "sm", "default", "lg", "xl", "2xl"] as const;

export const dropdownPositions = [
  {
    label: "Dropdown start",
    class: "dropdown-start",
  },
  {
    label: "Dropdown center",
    class: "dropdown-center",
  },
  {
    label: "Dropdown end",
    class: "dropdown-end",
  },
  {
    label: "Dropdown top",
    class: "dropdown-top",
  },
  {
    label: "Dropdown top start",
    class: "dropdown-top dropdown-start",
  },
  {
    label: "Dropdown top center",
    class: "dropdown-top dropdown-center",
  },
  {
    label: "Dropdown top end",
    class: "dropdown-top dropdown-end",
  },
] as const;

export const biIcons = Object.keys(biIconSet.icons);
// export const biIcons = [];

export const fgIcons = Object.keys(fgIconSet.icons);
// export const fgIcons = [];

export const customIcons = [
  "fg-plus",
  "fg-sort-handle",
  "fg-loader",
  "fg-loader-dots-bounce",
  "fg-loader-dots-fade",
  "fg-loader-dots-move",
  "fg-loader-dots-rotate",
  "fg-loader-dots-scale",
  "fg-loader-dots-rotate",
  "fg-battery-full",
  "fg-battery-75",
  "fg-battery-50",
  "fg-battery-25",
  "fg-battery-empty",
  "bi-battery-75",
] as const;

export const fontSizes = [
  ...["2xs", "xs", "sm", "base", "lg", "xl"],
  ...range(2, 8).map((num) => `${num}xl`),
] as const;

export const borderRadiuses = [
  undefined,
  ...["xs", "sm", "md", "lg", "xl"],
  ...range(2, 4).map((num) => `${num}xl`),
  "none",
  "full",
] as const;

export const fontWeights = [
  "normal",
  "thin",
  "extralight",
  "light",
  "medium",
  "semibold",
  "bold",
  "extrabold",
] as const;

export const fontFamilies = ["sans", "serif", "mono", "poppins"] as const;

export const offcanvasPositions = ["start", "end", "top", "bottom"] as const;
export function fontStretches(): string[] {
  return [
    "normal",
    ["condensed", "expanded"]
      .map((t) => [t, ...["semi", "extra", "ultra"].map((p) => `${p}-${t}`)])
      .flat(),
    "50%",
    "75%",
    "90%",
    "95%",
    "100%",
    "105%",
    "110%",
    "125%",
    "150%",
    "200%",
  ].flat();
}

export const shadowSizes = [
  "2xs",
  "xs",
  "md",
  undefined,
  "lg",
  "xl",
  "2xl",
  "none",
] as const;

export type ShadowSize = (typeof shadowSizes)[number];

export const tooltipPositions = ["top", "start", "end", "bottom"];

export const toastColors = [
  undefined,
  "info",
  "success",
  "warning",
  "error",
] as const;
export type ToastColor = (typeof toastColors)[number];

export const toastPositions = [
  undefined,
  "top-start",
  "top-center",
  "top-end",
  "center-start",
  "center",
  "center-end",
  "bottom-start",
  "bottom-center",
  "bottom-end",
] as const;

export type ToastPosition = (typeof toastPositions)[number];

export type TooltipPosition = (typeof tooltipPositions)[number];
export function range(start: number, end: number, step = 1): number[] {
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

export function ucfirst(value: string): string {
  return value.length ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}

export function cssClasses(...classes: CssClassValue[]): string {
  const result: string[] = [];

  for (const value of classes) {
    if (!value) {
      continue;
    }

    if (typeof value === "string") {
      result.push(value);
      continue;
    }

    if (Array.isArray(value)) {
      const nested = cssClasses(...value);

      if (nested) {
        result.push(nested);
      }

      continue;
    }

    for (const [className, condition] of Object.entries(value)) {
      if (condition) {
        result.push(className);
      }
    }
  }

  return result.join(" ");
}

export function attrs(attributes?: HtmlAttrs): string {
  if (!attributes) {
    return "";
  }
  return Object.entries(attributes)
    .filter(
      ([, value]) => value !== false && value !== null && value !== undefined,
    )
    .map(([name, value]) => {
      if (value === true) {
        return name;
      }

      return `${name}="${escapeHtml(String(value))}"`;
    })
    .join(" ");
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function match<T, R>(
  value: T,
  cases: Record<string, R>,
  defaultValue: R,
): R {
  return cases[String(value)] ?? defaultValue;
}

export function jsonPretty(value: any): string {
  return JSON.stringify(value, null, 2);
}

export async function flat(contents: (Content | Content[])[]) {
  const flatten = (items: (Content | Content[])[]): Content[] =>
    items.flatMap((item) => (Array.isArray(item) ? flatten(item) : item));

  return await Promise.all(flatten(contents));
}

export function strTitle(str: string): string {
  return ucfirst(str).replace(/[-_]/g, " ");
}

export function strSlug(title: string, separator: string = "-"): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, separator)
    .replace(new RegExp(`${escapeRegExp(separator)}+`, "g"), separator)
    .replace(
      new RegExp(
        `^${escapeRegExp(separator)}|${escapeRegExp(separator)}$`,
        "g",
      ),
      "",
    )
    .toLowerCase();
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function parserFromLanguage(
  language: string,
): prettier.BuiltInParserName {
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
    json: "json-stringify",
    json5: "json5",
    yaml: "yaml",
    markdown: "markdown",
    md: "markdown",
  };

  return parsers[language.toLowerCase()] ?? "babel";
}
