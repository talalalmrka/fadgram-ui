<script setup lang="ts">
import {
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
} from "vue";


interface Props {
    language?: string;
    width?: string | number;
    height?: string | number;
}

withDefaults(defineProps<Props>(), {
    language: "html",
    width: "100%",
    height: "200",
});

const source = ref<HTMLElement>();
const iframe = ref<HTMLIFrameElement | null>(null);

let themeObserver: MutationObserver | undefined;

function getDocumentStyles(): string {
    const styles: string[] = [];

    for (const sheet of Array.from(document.styleSheets)) {
        try {
            const rules = Array.from(sheet.cssRules);

            styles.push(
                rules
                    .map((rule) => rule.cssText)
                    .join("\n"),
            );
        } catch {
            if (sheet.href) {
                styles.push(
                    `<link rel="stylesheet" href="${sheet.href}">`,
                );
            }
        }
    }

    return styles.join("\n");
}

function getHtml(): string {
    const content = source.value?.innerHTML ?? "";
    const styles = getDocumentStyles();
    const htmlClass = document.documentElement.className;

    return `<!doctype html>
<html lang="en" class="${htmlClass}">
<head>
    <meta charset="utf-8">
    <meta
    name="viewport"
    content="width=1440, initial-scale=1">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->

    <style>
        ${styles}
    </style>
</head>
<body>
    ${content}
</body>
</html>`;
}

function loadFrame() {
    if (!iframe.value) {
        return;
    }

    iframe.value.srcdoc = getHtml();
}

function syncTheme() {
    if (!iframe.value?.contentDocument) {
        return;
    }

    iframe.value.contentDocument.documentElement.className =
        document.documentElement.className;
}

onMounted(async () => {
    await nextTick();

    loadFrame();

    iframe.value?.addEventListener("load", syncTheme);

    themeObserver = new MutationObserver(() => {
        syncTheme();
    });

    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });
});

onBeforeUnmount(() => {
    themeObserver?.disconnect();
});
</script>

<template>
    <div class="code-frame">
        <div ref="source" class="code-frame-source hidden">
            <slot />
        </div>

        <iframe ref="iframe" :width="width" :height="height" class="code-frame-iframe" title="Preview" />
    </div>
</template>