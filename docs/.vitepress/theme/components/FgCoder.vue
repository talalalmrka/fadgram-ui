<script setup lang="ts">
import {
    ref,
    onMounted,
    onUpdated,
} from "vue";
import MarkdownIt from "markdown-it";
import MarkdownItAsync from "markdown-it-async";
import {
    codeToHtml
} from "shiki"
import Shiki from "@shikijs/markdown-it";
import { preWrapperPlugin } from "@theme/markdown/plugins/preWrapper";
import transformers from "@theme/markdown/transformers";
import { lineNumbersPlugin } from "@theme/markdown/plugins/lineNumbers";

interface Props {
    lang?: string;
    theme?: string;
}

const props = withDefaults(defineProps<Props>(), {
    lang: "txt",
    theme: "andromeeda",
});

// const md = new MarkdownIt();
// preWrapperPlugin(md, )
const md = MarkdownItAsync({
    async highlight(code, lang) {
        // const { codeToHtml } = await import('shiki')
        return await codeToHtml(code, {
            lang,
            themes: {
                light: props.theme,
                dark: props.theme,
            },
            rootStyle: false,
            transformers: transformers,
        });
    }
})
preWrapperPlugin(md);
lineNumbersPlugin(md);
const highlighted = ref();
const source = ref<HTMLElement>();

function getCode(): string | undefined {
    return source.value?.textContent;
}

async function highlight() {
    const code = getCode();
    if (!code) {
        highlighted.value = null;
        return;
    }
    // highlighted.value = await codeToHtml(code, shikiOptions);
    highlighted.value = await md.renderAsync(
        [
            "```" + props.lang,
            code,
            "```",
        ].join("\n"),
    );
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

<style scoped></style>
