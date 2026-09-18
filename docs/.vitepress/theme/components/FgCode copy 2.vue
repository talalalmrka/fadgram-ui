<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { codeToHtml } from "shiki";
import prettier from "prettier";
// import { parserFromLanguage } from "@gen/helpers";
const props = withDefaults(
    defineProps<{
        lang?: string;
        filename?: string;
        theme?: string;
    }>(),
    {
        lang: "text",
        theme: "andromeeda",
    }
);

const loading = ref(true);
const source = ref<HTMLElement>();
const formatted = ref("");
const highlighted = ref("");
const copied = ref(false);
function parserFromLanguage(
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
}
async function copy() {
    if (!formatted.value) {
        return;
    }
    await navigator.clipboard.writeText(formatted.value);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 1500);
}

const parser = computed(() => parserFromLanguage(props.lang));
onMounted(async () => {
    loading.value = true;
    await nextTick();
    const code = source.value?.textContent ?? undefined;
    if (!code) {
        loading.value = false;
        return;
    }
    // const parser = parserFromLanguage(props.lang);
    // formatted.value = await prettier.format(code, { parser: parser.value });
    highlighted.value = await codeToHtml(formatted.value, {
        lang: props.lang,
        theme: props.theme,
    });
    loading.value = false;
});
</script>

<template>
    <div class="fg-code" :class="`language-${lang}`">
        <div class="flex items-center gap-2 px-2 border-b border-gray-800">
            <div class="flex-1 flex items-center gap-2">
                <span class="lang">{{ lang }} ({{ parser }})</span>
            </div>
            <div class="flex items-center gap-2">
                <button type="button" class="text-sm text-slate-300  hover:text-white" @click="copy">
                    <i class="icon" :class="copied ? 'bi-check' : 'bi-copy'"></i>
                </button>
            </div>
        </div>

        <pre class="shiki shiki-themes andromeeda andromeeda">
            <code><slot/></code>
        </pre>
        <pre class="border-dotted-red">{{ formatted }}</pre>
        <pre ref="source" class="m-0 p-4 text-sm leading-6 hiddenn"><slot /></pre>
        <div v-if="loading" class="text-center p-3">
            <i class="icon bi-loader-dots-bounce text-xl"></i>
        </div>
        <textarea v-else class="form-control">{{ highlighted }}</textarea>
        <!-- <div v-if="highlighted" class="source-code overflow-x-auto p-4 text-sm leading-6" v-html="highlighted" /> -->
    </div>
</template>
<style scoped>
.fg-code .lang {
    font-size: 12px;
    font-weight: 500;
    user-select: none;
    color: var(--vp-code-lang-color);
    transition: color 0.4s, opacity 0.4s;
}
</style>