import type { MarkdownItAsync } from "markdown-it-async";

// Markdown-it plugin for generating line numbers.
// It depends on the preWrapper plugin.

export interface LineNumbersPluginOptions {
  wrapperClass?: string;
  lineClass?: string;
  startLineNumber?: number;
}

const defaultOptions: Required<LineNumbersPluginOptions> = {
  wrapperClass: "line-numbers-wrapper pt-[48.7px]!",
  lineClass: "line-number",
  startLineNumber: 1,
};

export const lineNumbersPlugin = (
  md: MarkdownItAsync,
  options: LineNumbersPluginOptions = {},
) => {
  const { wrapperClass, lineClass, startLineNumber } = {
    ...defaultOptions,
    ...options,
  };

  const fence = md.renderer.rules.fence!;

  md.renderer.rules.fence = (...args) => {
    const rawCode = fence(...args);

    const [tokens, idx] = args;
    const info = tokens[idx].info;

    if (!/:line-numbers\b/.test(info) || /:no-line-numbers\b/.test(info)) {
      return rawCode;
    }

    let lineNumber = startLineNumber;

    const matchStartLineNumber = info.match(/=(\d+)/);

    if (matchStartLineNumber?.[1]) {
      lineNumber = parseInt(matchStartLineNumber[1], 10);
    }

    const code = rawCode.slice(
      rawCode.indexOf("<code>"),
      rawCode.indexOf("</code>"),
    );

    const lines = code.split("\n");

    const lineNumbersCode = lines
      .map(() => `<span class="${lineClass}">${lineNumber++}</span><br>`)
      .join("");

    const lineNumbersWrapperCode =
      `<div class="${wrapperClass}" aria-hidden="true">` +
      lineNumbersCode +
      "</div>";

    return rawCode
      .replace(/<\/div>$/, `${lineNumbersWrapperCode}</div>`)
      .replace(/"(language-[^"]*?)"/, '"$1 line-numbers-mode"');
  };
};
