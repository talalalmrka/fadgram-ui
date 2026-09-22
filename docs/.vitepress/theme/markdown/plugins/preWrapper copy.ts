import type { MarkdownItAsync } from "markdown-it-async";

import type { MarkdownEnv, MarkdownLocaleOptions } from "vitepress";

export interface PreWrapperPluginOptions {
  codeCopyButton?: {
    tooltipText: string;
    copiedText: string;
  };
  languageLabel?: Record<string, string>;
  /**
   * Per-locale overrides for the copy button strings, keyed by locale index.
   */
  locales?: Record<string, MarkdownLocaleOptions | undefined>;
}

export function preWrapperPlugin(
  md: MarkdownItAsync,
  options: PreWrapperPluginOptions = {},
) {
  const {
    codeCopyButton = {
      tooltipText: "Copy code",
      copiedText: "Copied",
    },
    languageLabel = {},
    locales = {},
  } = options;
  const langLabel = Object.fromEntries(
    Object.entries(languageLabel || {}) //
      .map(([k, v]) => [k.toLowerCase(), v]),
  );

  const fence = md.renderer.rules.fence!;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, , env] = args;
    const token = tokens[idx];

    // remove title from info
    token.info = token.info.replace(/\[.*\]/, "");

    const active = / active( |$)/.test(token.info) ? " active" : "";
    token.info = token.info.replace(/ active$/, "").replace(/ active /, " ");

    const lang = extractLang(token.info);
    const label = langLabel[lang.toLowerCase()] || lang.replace(/_/g, " ");

    const { localeIndex } = (env ?? {}) as MarkdownEnv;
    const localeButton = localeIndex
      ? locales?.[localeIndex]?.codeCopyButton
      : undefined;
    const tooltipText = localeButton?.tooltipText || codeCopyButton.tooltipText;
    // rendered by the theme via `content: attr(data-copied)`
    const copiedText = localeButton?.copiedText || codeCopyButton.copiedText;

    return (
      `<div class="language-${lang}${active} rounded-lg text-gray-100 dark" dir="ltr">` +
      `<div class="code-header flex items-center gap-2 justify-between px-2 py-1 text-sm border-b" style="border-color: var(--vp-code-block-divider-color);">` +
      `<span class="lang relative!">${label}</span>` +
      `<button title="${tooltipText}" data-copied="${copiedText}" class="copy flex items-center">` +
      `<i class="icon bi-clipboard"></i>` +
      `</button>` +
      `</div>` +
      fence(...args) +
      "</div>"
    );
  };
}

export function extractTitle(info: string, html = false) {
  if (html) {
    return (
      info.replace(/<!--[^]*?-->/g, "").match(/data-title="(.*?)"/)?.[1] || ""
    );
  }
  return info.match(/\[(.*)\]/)?.[1] || extractLang(info) || "txt";
}

function extractLang(info: string): string {
  return (
    /^[a-zA-Z0-9-_]+/
      .exec(info)?.[0]
      .replace(/-vue$/, "") // remove -vue suffix
      .replace(/^vue-html$/, "template")
      .replace(/^ansi$/, "") || ""
  );
}
