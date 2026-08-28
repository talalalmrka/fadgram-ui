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

/* export function ucfirst(str: string): string {
  return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : "";
}

export function sourceCode(code: string, lang: string = "html"): string {
  return `\`\`\`${lang}\n${code}\n\`\`\``;
}

export function range(start: number, end: number, step = 1): number[] {
  const result: number[] = [];

  if (step === 0) {
    throw new Error("Step cannot be zero");
  }

  if (start <= end) {
    for (let i = start; i <= end; i += Math.abs(step)) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= Math.abs(step)) {
      result.push(i);
    }
  }

  return result;
}

export function md(
  content: string,
  title?: string,
  outline: string | boolean = "deep",
): string {
  const frontmatter: string[] = [];

  if (title) {
    frontmatter.push(`title: ${JSON.stringify(title)}`);
  }

  if (outline !== undefined && outline !== false) {
    frontmatter.push(`outline: ${outline === true ? "true" : outline}`);
  }

  if (frontmatter.length === 0) {
    return content;
  }

  return [
    "---",
    ...frontmatter,
    "---",
    title ? `# ${title}` : "",
    content.trim(),
    "",
  ].join("\n");
}
 */
