<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface Props {
    language?: string;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    language: "html",
});

const source = ref<HTMLElement>();
const iframe = ref<HTMLIFrameElement | null>(null);

const styles = computed(() => {
    return Array.from(
        document.querySelectorAll<HTMLLinkElement>(
            'link[rel="stylesheet"]',
        ),
    )
        .map((link) => {
            return `<link rel="stylesheet" href="${link.href}">`;
        })
        .join("\n");
});

const srcdoc = computed(() => {
    const content = source.value?.innerHTML ?? "";

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${styles.value}
</head>
<body>
    ${content}
</body>
</html>`;
});

function loadFrame() {
    if (!iframe.value) {
        return;
    }

    iframe.value.srcdoc = srcdoc.value;
}

onMounted(() => {
    console.log(styles.value);
    loadFrame();
});
</script>

<template>
    <div class="code-frame">
        <div ref="source" class="code-frame-source">
            <slot />
        </div>

        <iframe ref="iframe" class="code-frame-iframe" title="Preview" />
    </div>
</template>