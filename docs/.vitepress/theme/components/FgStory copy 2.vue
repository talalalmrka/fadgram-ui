<script setup lang="ts">
import { ref, onMounted, computed, nextTick, useSlots } from "vue";
import { codeToHtml } from "shiki";
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import prettier from "prettier";
import {
    transformerNotationDiff,
    transformerNotationHighlight,
    // transformerRenderLineNumber,
} from "@shikijs/transformers";
interface Props {
    title?: string;
    lang?: string;
    theme?: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "Preview",
    lang: "html",
    theme: "andromeeda",
});
const md = new MarkdownIt();
const slots = useSlots();
const highlighted = ref();
const source = ref<HTMLElement>();

const codee = computed(() => {
    const nodes = slots.code?.();

    if (!nodes) {
        return "";
    }

    return nodes
        .map((node) => {
            if (typeof node.children === "string") {
                return node.children;
            }

            return "";
        })
        .join("");
});
const code = computed(() => {
    if (!source.value) {
        return "";
    }
    return source.value.textContent.trim();
});
/*function parserFromLanguage(
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
}*/
async function highlight() {
    if (code.value) {
        /*const formatted = await prettier.format(code.value, {
          parser: parserFromLanguage(props.lang)
        });*/
        md.use(
            await Shiki({
                themes: {
                    light: props.theme,
                    dark: props.theme,
                },
                transformers: [
                    transformerNotationDiff(),
                    transformerNotationHighlight(),
                    // transformerRenderLineNumber(),
                    /*transformerRenderLineNumber({
                      classLineNumber: "my-line-number", // Optional: defaults to 'line-number'
                      start: 1, // Optional: starting digit (default: 1)
                    }),*/
                ],
            }),
        );
        highlighted.value = md.render(
            ["```" + props.lang, code.value, "```"].join("\n"),
        );
    }
}
/*async function highlight(){
  if (code.value) {
    highlighted.value = await codeToHtml(code.value, {
      lang: props.lang,
      theme: props.theme,
      transformers: [
        transformerRenderLineNumber({
          // Optional: change the starting line number (defaults to 1)
          start: 1,
          // Optional: change the class name (defaults to 'line-number')
          classLineNumber: "line-number",
        }),
      ],
    });
  }
}*/

onMounted(async () => {
    // await nextTick();
    await highlight();
    // console.log(code.value);
    // await highlight();
});
</script>
<template>
    <div class="fg-story border-dashed-red p-2 space-y-2">
        <div ref="source" class="hidden">
            <slot />
        </div>
        <div v-if="highlighted" v-html="highlighted" class="border-dashed-blue" :class="`language-${lang}`"></div>
        <div v-if="!highlighted" class="text-center p-3">
            <i class="icon fg-loader-dots-move text-2xl"></i>
        </div>
        <textarea v-if="highlighted"
            class="form-control font-mono w-full overflow-auto text-xs h-auto max-h-64">{{ code }}</textarea>
    </div>
</template>
