// import path from "node:path";
// import fs from "node:fs/promises";
// import { fileURLToPath } from "node:url";
import { icons as biIconSet } from "@iconify-json/bi";
import fgIconSet from "../../../icons/fg/icons.json";

export type Content =
  string | Promise<string> | number | Promise<number> | Content[];

export type CssClassValue =
  string | false | null | undefined | Record<string, boolean> | CssClassValue[];

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
      result.push(cssClasses(...value));
      continue;
    }

    for (const [className, condition] of Object.entries(value)) {
      if (condition) {
        result.push(className);
      }
    }
  }

  return result.filter(Boolean).join(" ");
}
export function match<T, R>(
  value: T,
  cases: Record<string, R>,
  defaultValue: R,
): R {
  return cases[String(value)] ?? defaultValue;
}

/* export async function files(dirPath: string, ext?: string): Promise<any[]> {
  const dir = path.resolve(dirname, dirPath);
  const scan = await fs.readdir(dir, {
    withFileTypes: true,
  });
  let files = scan.filter((file: object) => file.isFile());
  if (ext) {
    files = files.filter((file) => file.name.endsWith(`.${ext}`));
  }
  return files.map((file) => path.join(dir, file.name));
} */

export function jsonPretty(value: any): string {
  return JSON.stringify(value, null, 2);
}
export async function flat(contents: (Content | Content[])[]) {
  const flatten = (items: (Content | Content[])[]): Content[] =>
    items.flatMap((item) => (Array.isArray(item) ? flatten(item) : item));

  return await Promise.all(flatten(contents));
}

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

export const shades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export const buttonSizes = ["xs", "sm", "default", "lg", "xl", "xxl"] as const;

export const inputSizes = ["xs", "sm", "default", "lg", "xl", "xxl"] as const;

export const inputGroupSizes = [
  "xs",
  "sm",
  "default",
  "lg",
  "xl",
  "xxl",
] as const;

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
