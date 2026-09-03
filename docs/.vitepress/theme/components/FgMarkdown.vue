<script setup lang="ts">
import { computed, nextTick, ref, useSlots, type VNode } from "vue";
import MarkdownIt from "markdown-it";

const props = defineProps<{
    content?: string;
}>();
const source = ref<HTMLElement>();
const md = new MarkdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
});

const slots = useSlots();
function getContent() {
    // await nextTick();
    return props.content ?? source.value?.innerHTML ?? '';
}

const rendered = computed(() => {
    return md.render(getContent());
});
function extractContent(nodes: VNode[]): unknown[] {
    const result: unknown[] = [];

    for (const node of nodes) {
        if (typeof node.children === "string") {
            result.push(node.children);
            continue;
        }

        if (Array.isArray(node.children)) {
            result.push(...extractContent(node.children as VNode[]));
            continue;
        }

        if (node.children != null) {
            result.push(node.children);
        }
    }

    return result;
}

const content = extractContent(slots.default?.() ?? []);

</script>

<template>
    <div>
        <div ref="source" class="m-0 p-4 text-sm leading-6 hidden">
            <slot />
        </div>
        <div class="fg-markdown vp-doc" v-html="rendered" />
    </div>
</template>