<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { codeToHtml } from "shiki";
const props = withDefaults(
    defineProps<{
        lang?: string;
        filename?: string;
        theme?: string;
        lineNumbers?: boolean;
    }>(),
    {
        lang: "text",
        theme: "andromeeda",
        lineNumbers: true,
    }
);

const source = ref<HTMLElement>();
const highlighted = ref();
const copied = ref(false);
const code = computed(() => source.value?.textContent);
async function copy() {
    if (!code.value) {
        return;
    }
    await navigator.clipboard.writeText(code.value);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 1500);
}
async function highlight() {
    if (!code.value) {
        highlighted.value = null;
        return;
    }
    highlighted.value = await codeToHtml(code.value, {
        lang: props.lang,
        theme: props.theme,
    });
}
onMounted(async () => {
    await nextTick();
    await highlight();
});
</script>

<template>
    <div>
        <div ref="source">
            <slot />
        </div>
        <div :class="[`language-${lang}`, { 'line-mumbers-mode': lineNumbers }]">
            <button @click="copy" title="Copy code" data-copied="Copied" class="copy"></button>
            <span class="lang">{{ lang }}</span>
            <div v-if="!highlighted" class="text-center p-3 text-2xl">
                <i class="icon fg-loader-dots-move"></i>
            </div>
            <div v-if="highlighted" v-html="highlighted"></div>
        </div>
    </div>
</template>
<style scoped></style>