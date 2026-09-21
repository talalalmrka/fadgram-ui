<script setup lang="ts">
import { ref, onMounted, onUpdated, computed } from "vue";
import { codeToHtml } from "shiki";
import type { CodeToHastOptions, BundledTheme, BundledLanguage } from "shiki";
import transformers from "@theme/markdown/transformers";
/*import {
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
    transformerNotationFocus,
    transformerNotationErrorLevel,
    transformerRenderIndentGuides,
} from "@shikijs/transformers";
// import { transformerRenderLineNumber } from "../markdown/line-number";
import { transformerCodeBlock } from "../markdown/code-block";*/

interface Props {
    title?: string;
    lang?: string;
    theme?: string;
    lineNumbers?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    title: "Preview",
    lang: "html",
    theme: "andromeeda",
    lineNumbers: true,
});
const highlighted = ref();
const source = ref<HTMLElement>();

function getCode(): string | undefined {
    return source.value?.textContent;
}

const shikiOptions: CodeToHastOptions<BundledLanguage, BundledTheme> = {
    lang: props.lang,
    themes: {
        light: props.theme,
        dark: props.theme,
    },
    rootStyle: false,
    transformers: transformers,
    /* transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationFocus({
            classActivePre: 'has-focused-lines',
            classActiveLine: 'has-focus',
        }),
        transformerNotationErrorLevel(),
        transformerRenderIndentGuides(),
        transformerNotationWordHighlight(),
        // transformerRenderLineNumber(),
        transformerCodeBlock(),
    ], */
};

async function highlight() {
    const code = getCode();
    if (!code) {
        highlighted.value = null;
        return;
    }
    highlighted.value = await codeToHtml(code, shikiOptions);
}

onMounted(highlight);

onUpdated(highlight);
</script>
<template>
    <div>
        <pre class="hidden"><code ref="source"><slot /></code></pre>
        <div v-if="highlighted" v-html="highlighted"></div>
        <div v-else class="text-center text-2xl p-3">
            <i class="icon fg-loader-dots-bounce"></i>
        </div>
    </div>
</template>
