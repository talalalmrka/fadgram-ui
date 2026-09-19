<script setup lang="ts">
import { ref, computed, useSlots, onMounted, nextTick } from "vue";
import { codeToHtml } from "shiki";
import FgCode from "./FgCode.vue";
// import { transformerRenderLineNumber } from "@shikijs/transformers"
interface Props {
    title?: string;
    lang?: string;
    theme?: string;
}

const props = withDefaults(defineProps<Props>(), {
    lang: "html",
    theme: 'andromeeda',
})
const source = ref<HTMLElement>()
const code = computed(() => source.value?.innerHTML);
const highlighted = ref();

async function highlight() {
    if (code.value) {
        highlighted.value = await codeToHtml(code.value, {
            lang: props.lang,
            theme: props.theme,
            // transformers: [
            //     transformerRenderLineNumber({
            //         start: 1,
            //         classLineNumber: "line-number",
            //     }),
            // ],
        });
    }
}
onMounted(async () => {
    await nextTick();
    await highlight();
})
</script>
<template>
    <div class="fg-story border-dotted-red p-2 space-y-3">
        <pre ref="source" class="border-dashed-yellow hiddenn"><slot/></pre>
        <pre v-if="code" class="border-dashed-green">{{ code }}</pre>
        <div v-if="highlighted" v-html="highlighted" class="border-dotted-blue"></div>
        <div v-if="!highlighted" class="text-center p-3">
            <i class="icon fg-loader-dots-move text-2xl"></i>
        </div>
        <fg-code :lang="lang">
            <slot />
        </fg-code>
    </div>
</template>
