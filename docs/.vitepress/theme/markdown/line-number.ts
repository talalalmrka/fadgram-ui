import type { ShikiTransformer } from "@shikijs/types";
import type { Element, Text } from "hast";

export interface TransformerRenderLineNumberOptions {
  /**
   * Class for line number wrapper div
   *
   * @default 'shiki-line-numbers'
   */
  classLineNumbersWrapper?: string;
  /**
   * Class for individual line number span elements
   *
   * @default 'line-number'
   */
  classLineNumber?: string;
  /**
   * Start number
   *
   * @default 1
   */
  startNumber?: number;
}

/**
 * Render line numbers into a separate div after the Shiki pre block with a <br> after each line.
 */
export function transformerRenderLineNumber(
  options: TransformerRenderLineNumberOptions = {},
): ShikiTransformer {
  const {
    classLineNumbersWrapper = "line-numbers-wrapper",
    classLineNumber = "line-number",
    startNumber = 1,
  } = options;

  return {
    name: "@shikijs/transformers:fg-line-number",
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

      // 3. Count how many code lines (elements) exist
      const lines = codeElement.children.filter(
        (i) => i.type === "element",
      ) as Element[];
      if (lines.length === 0) return;

      // 4. Generate the <span> and <br> elements for each line number
      const lineChildren: (Element | Text)[] = [];

      lines.forEach((_, idx) => {
        const number = startNumber + idx;

        // Create the line number span
        const spanNode: Element = {
          type: "element",
          tagName: "span",
          properties: {
            className: [classLineNumber],
          },
          children: [
            {
              type: "text",
              value: `${number}`,
            } as Text,
          ],
        };

        // Create the line break element
        const brNode: Element = {
          type: "element",
          tagName: "br",
          properties: {},
          children: [],
        };

        // Push both the span and the br into the children array
        lineChildren.push(spanNode, brNode);
      });

      // 5. Wrap all elements inside a single container <div>
      const lineNumbersDiv: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: [classLineNumbersWrapper],
          ariaHidden: "true",
        },
        children: lineChildren,
      };

      // 6. Push the new <div> into the root children array right after the <pre> tag
      const preIndex = root.children.indexOf(preElement);
      root.children.splice(preIndex + 1, 0, lineNumbersDiv);
    },
  };
}
