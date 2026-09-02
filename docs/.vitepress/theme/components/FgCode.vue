<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { codeToHtml } from "shiki";

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

const source = ref<HTMLElement>();
const highlighted = ref("");
const copied = ref(false);

function normalizeCode(code: string) {
    code = code.replace(/\r\n/g, "\n");

    const lines = code.split("\n");

    while (lines.length && !lines[0].trim()) {
        lines.shift();
    }

    while (lines.length && !lines[lines.length - 1].trim()) {
        lines.pop();
    }

    const nonEmpty = lines.filter((line) => line.trim());

    if (!nonEmpty.length) {
        return "";
    }

    const indent = Math.min(
        ...nonEmpty.map((line) => {
            return line.match(/^[ \t]*/)?.[0].length ?? 0;
        })
    );

    return lines
        .map((line) => line.slice(indent))
        .join("\n");
}

async function getCode() {
    await nextTick();

    return normalizeCode(source.value?.textContent ?? "");
}

async function highlight() {
    const code = await getCode();

    if (!code) {
        return;
    }

    highlighted.value = await codeToHtml(code, {
        lang: props.lang,
        theme: props.theme,
    });
}

async function copy() {
    const code = await getCode();

    await navigator.clipboard.writeText(code);

    copied.value = true;

    setTimeout(() => {
        copied.value = false;
    }, 1500);
}

onMounted(highlight);
</script>

<template>
    <div class="relative overflow-hidden rounded-lg border border-slate-700 bg-[#0d1117]">
        <button type="button"
            class="rounded px-2 py-1 text-sm text-slate-300 hover:bg-slate-700 hover:text-white absolute top-1 end-1"
            @click="copy">
            <i class="icon" :class="copied ? 'bi-check' : 'bi-copy'"></i>
        </button>
        <pre ref="source" class="m-0 p-4 text-sm leading-6 hidden"><slot /></pre>
        <div v-if="highlighted" class="source-code overflow-x-auto p-4 text-sm leading-6" v-html="highlighted" />
    </div>
</template>