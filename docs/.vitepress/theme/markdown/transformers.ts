import { type ShikiTransformer } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerRenderIndentGuides,
} from "@shikijs/transformers";
import { transformerCodeBlock } from "./code-block";

const transformers: ShikiTransformer[] = [
  transformerNotationDiff(),
  transformerNotationHighlight(),
  transformerNotationWordHighlight(),
  transformerNotationFocus({
    classActivePre: "has-focused-lines",
    classActiveLine: "has-focus",
  }),
  transformerNotationErrorLevel(),
  transformerRenderIndentGuides(),
  transformerCodeBlock(),
];

export default transformers;
