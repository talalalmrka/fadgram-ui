import type { ShikiTransformer } from "@shikijs/types";
import type { Element, ElementContent, Text } from "hast";
import { cssClasses } from "../../gen/helpers";

export type NullableElementContent = ElementContent | null | undefined;

export interface OptionsWithClass {
  class?: string;
}

export interface LangOptions extends OptionsWithClass {
  labels?: Record<string, string>;
}
export interface CopyButtonOptions extends OptionsWithClass {
  tooltipText?: string;
  copiedText?: string;
  iconClass?: string;
  icon?: string;
  iconCopied?: string;
}

export interface LineNumbersOptions extends OptionsWithClass {
  lineClass?: string;
  start?: number;
}

export interface CodeBlockOptions {
  wrapperClass?: string;
  headerClass?: string;
  lang?: LangOptions | false;
  copyButton?: CopyButtonOptions | false;
  bodyClass?: string;
  lineNumbers?: LineNumbersOptions | false;
}

/**
 * Wraps Shiki code with a custom top bar (Language & Copy Button) and separate line numbers.
 */
export function transformerCodeBlock(
  options: CodeBlockOptions = {},
): ShikiTransformer {
  const {
    wrapperClass = "fg-code-block",
    headerClass = "fg-code-block-header",
    lang = {
      class: "fg-code-block-lang",
    },
    copyButton = {
      class: "fg-code-block-copy",
      tooltipText: "Copy code",
      copiedText: "Copied",
      iconClass: "icon",
      icon: "bi-clipboard",
      iconCopied: "bi-clipboard-check",
    },
    bodyClass = "fg-code-block-body",
    lineNumbers = {
      class: "fg-code-block-line-numbers line-numbers-wrapper",
      lineClass: "fg-code-block-line-number line-number",
      start: 1,
    },
  } = options;

  const parseChildren = (
    elements: NullableElementContent[],
  ): ElementContent[] => {
    return elements.filter(
      (el: NullableElementContent) => el !== undefined && el !== null,
    );
  };
  return {
    name: "@shikijs/transformers:fg-code-block",
    root(root) {
      // 1. Locate the <pre> element inside the root tree
      const preElement = root.children.find(
        (node) => node.type === "element" && node.tagName === "pre",
      ) as Element | undefined;

      if (!preElement) return;

      // 2. Locate the <code> element inside the <pre> block
      const codeElement = preElement.children.find(
        (node) => node.type === "element" && node.tagName === "code",
      ) as Element | undefined;

      if (!codeElement) return;

      // 3. Extract the language and the raw text content for copying
      // const lang = this.options.lang || "text";
      // const langClass = `language-${lang}`;
      // const rawCode = this.source;
      let lineNumbersEl: Element | undefined;
      if (lineNumbers !== false) {
        const startNumber = lineNumbers.start ?? 1;
        // 4. Count how many code lines exist
        const lines = codeElement.children.filter(
          (i) => i.type === "element",
        ) as Element[];
        if (lines.length === 0) return;
        // 5. Generate line numbers with <br> elements
        const lineChildren: (Element | Text)[] = [];
        lines.forEach((_, idx) => {
          const number = startNumber + idx;
          const spanNode: Element = {
            type: "element",
            tagName: "span",
            properties: {
              className: [cssClasses(lineNumbers.lineClass)],
            },
            children: [
              {
                type: "text",
                value: `${number}`,
              } as Text,
            ],
          };

          const brNode: Element = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          lineChildren.push(spanNode, brNode);
        });

        lineNumbersEl = {
          type: "element",
          tagName: "div",
          properties: {
            className: [cssClasses(lineNumbers.class)],
            ariaHidden: "true",
          },
          children: lineChildren,
        };
      }

      // 6. Build the Top Header Bar components
      /* const titleBadge: Element | null = title
        ? {
            type: "element",
            tagName: "span",
            properties: { className: [classTitle] },
            children: [{ type: "text", value: title } as Text],
          }
        : null; */
      const langName = this.options.lang ?? "text";
      let langEl: Element | undefined;
      if (lang !== false) {
        const langLabels = Object.fromEntries(
          Object.entries(lang?.labels || {}) //
            .map(([k, v]) => [k.toLowerCase(), v]),
        );
        const langLabel =
          langLabels[langName.toLowerCase()] || langName.replace(/_/g, " ");
        langEl = {
          type: "element",
          tagName: "span",
          properties: {
            className: [cssClasses(lang.class)],
          },
          children: [
            {
              type: "text",
              value: langLabel,
            } as Text,
          ],
        };
      }

      let copyButtonEl: Element | undefined;
      if (copyButton !== false) {
        const copyIconEl: Element = {
          type: "element",
          tagName: "i",
          properties: {
            className: [cssClasses(copyButton.iconClass, copyButton.icon)],
            dataCopiedIcon: copyButton.iconCopied,
          },
          children: [],
        };

        copyButtonEl = {
          type: "element",
          tagName: "button",
          properties: {
            className: [cssClasses(copyButton.class)],
            type: "button",
            title: copyButton.tooltipText,
            dataCopied: copyButton.copiedText,
          },
          children: [copyIconEl],
        };
      }
      const hasHeader = langEl || copyButtonEl;
      let headerEl: Element | undefined;
      if (hasHeader) {
        headerEl = {
          type: "element",
          tagName: "div",
          properties: {
            className: [
              headerClass,
              cssClasses({
                "justify-end":
                  langEl === undefined && copyButtonEl !== undefined,
              }),
            ],
          },
          children: parseChildren([langEl, copyButtonEl]),
        };
      }

      // 7. Build the structural body (places numbers & pre code blocks adjacent to each other)
      const bodyEl: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: [`language-${langName}`, "line-numbers-mode", bodyClass],
        },
        children: parseChildren([preElement, lineNumbersEl]),
      };

      // 8. Assemble everything into one unified layout wrapper
      const completeWrapper: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: [wrapperClass, "dark"],
        },
        children: parseChildren([headerEl, bodyEl]),
      };

      // 9. Swap out the old single <pre> element for our beautiful constructed layout block
      const preIndex = root.children.indexOf(preElement);
      root.children.splice(preIndex, 1, completeWrapper);
    },
  };
}
