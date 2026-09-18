<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
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
const highlighted = ref();
const copied = ref(false);
const code = computed(() => source.value?.innerHTML);
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
        <!-- <pre ref="source"><slot /></pre> -->
        <pre>
            <code ref="source"><slot/></code>
        </pre>
        <div class="line-numbers-mode" :class="`language-${lang}`">
            <button title="Copy code" data-copied="Copied" class="copy"></button>
            <span class="lang">{{ lang }}</span>
            <div v-if="!highlighted" class="text-center p-3 text-2xl">
                <i class="icon fg-loader-dots-move"></i>
            </div>
            <div v-if="highlighted" v-html="highlighted"></div>
        </div>
    </div>
</template>
<style scoped></style>