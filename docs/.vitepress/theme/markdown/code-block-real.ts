import fs from "node:fs";
import path from "node:path";
import type { ShikiTransformer } from "@shikijs/types";
import type { Element, Text } from "hast";

export interface TransformerCodeBlockRealOptions {
  classWrapper?: string;
  classHeader?: string;
  classTitle?: string;
  classLang?: string;
  classCopy?: string;
  classCopyIconPrefix?: string;
  classCopyIcon?: string;
  classCopyIconCopied?: string;
  classBody?: string;
  classLineNumbersWrapper?: string;
  classLineNumber?: string;
  startNumber?: number;
}

/**
 * Wraps Shiki code with a custom top bar (Language & Copy Button) and separate line numbers.
 */
export function transformerCodeBlockReal(
  options: TransformerCodeBlockRealOptions = {},
): ShikiTransformer {
  const {
    classWrapper = "fg-code-block",
    classHeader = "fg-code-block-header",
    classTitle = "fg-code-block-title",
    classLang = "fg-code-block-lang",
    classCopy = "fg-code-block-copy",
    classCopyIconPrefix = "icon",
    classCopyIcon = "bi-clipboard",
    classCopyIconCopied = "bi-clipboard-check",
    classBody = "fg-code-block-body",
    classLineNumbersWrapper = "fg-code-block-line-numbers line-numbers-wrapper",
    classLineNumber = "fg-code-block-line-number line-number",
    startNumber = 1,
  } = options;

  return {
    name: "@shikijs/transformers:fg-code-block-real",
    enforce: "post",
    root(root) {
      const outputRoot = structuredClone(root);

      const pre = outputRoot.children?.find(
        (node) => node.type === "element" && node.tagName === "pre",
      );

      const code = pre?.children?.find(
        (node) => node.type === "element" && node.tagName === "code",
      );

      if (code?.type === "element") {
        delete code.children;
      }

      const outputPath = path.resolve(
        process.cwd(),
        "docs",
        ".vitepress",
        "cache",
        "debug",
        "shiki-root.json",
      );

      fs.mkdirSync(path.dirname(outputPath), { recursive: true });

      fs.writeFileSync(outputPath, JSON.stringify(outputRoot, null, 2), "utf8");

      // 1. Locate the <pre> element inside the root tree
      /*const preElement = root.children.find(
        (node) => node.type === "element" && node.tagName === "pre",
      ) as Element | undefined;

      if (!preElement) return;
      
      // 2. Locate the <code> element inside the <pre> block
      const codeElement = preElement.children.find(
        (node) => node.type === "element" && node.tagName === "code",
      ) as Element | undefined;

      if (!codeElement) return;

      // 3. Extract the language and the raw text content for copying
      const lang = this.options.lang || "text";
      const langClass = `language-${lang}`;
      const rawCode = this.source;

      // 4. Count how many code lines exist
      const lines = codeElement.children.filter(
        (i) => i.type === "element",
      ) as Element[];
      if (lines.length === 0) return;
      console.log(lines.length);
      // 5. Generate line numbers with <br> elements
      const lineChildren: (Element | Text)[] = [];
      lines.forEach((_, idx) => {
        const number = startNumber + idx;
        const spanNode: Element = {
          type: "element",
          tagName: "span",
          properties: { className: [classLineNumber] },
          children: [{ type: "text", value: `${number}` } as Text],
        };
        const brNode: Element = {
          type: "element",
          tagName: "br",
          properties: {},
          children: [],
        };
        lineChildren.push(spanNode, brNode);
      });

      const lineNumbersDiv: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: [classLineNumbersWrapper],
          ariaHidden: "true",
        },
        children: lineChildren,
      };

      // 6. Build the Top Header Bar components
      const langBadge: Element = {
        type: "element",
        tagName: "span",
        properties: { className: [classLang] },
        children: [{ type: "text", value: lang.toUpperCase() } as Text],
      };

      const copyIcon: Element = {
        type: "element",
        tagName: "i",
        properties: {
          className: [classCopyIconPrefix, classCopyIcon],
          dataCopiedIcon: classCopyIconCopied,
        },
        children: [],
      };

      const copyButton: Element = {
        type: "element",
        tagName: "button",
        properties: {
          className: [classCopy],
          type: "button",
          // Embed the raw code into a data attribute so our JS copy script can read it
          // dataCode: rawCode,
          ariaLabel: "Copy code to clipboard",
        },
        children: [copyIcon],
      };

      const headerBar: Element = {
        type: "element",
        tagName: "div",
        properties: { className: [classHeader] },
        children: [
          // titleBadge,
          langBadge,
          copyButton,
        ].filter(Boolean),
      };

      // 7. Build the structural body (places numbers & pre code blocks adjacent to each other)
      const bodyContainer: Element = {
        type: "element",
        tagName: "div",
        properties: { className: [langClass, "line-numbers-mode", classBody] },
        children: [preElement, lineNumbersDiv],
      };

      // 8. Assemble everything into one unified layout wrapper
      const completeWrapper: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: [classWrapper, "dark"],
        },
        children: [headerBar, bodyContainer],
      };

      // 9. Swap out the old single <pre> element for our beautiful constructed layout block
      const preIndex = root.children.indexOf(preElement);
      root.children.splice(preIndex, 1, completeWrapper);*/
    },
  };
}
