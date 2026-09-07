<script setup lang="ts">
import { computed, ref } from "vue";

type CodeTab = "html" | "css" | "js";

interface Viewport {
    key: string;
    label: string;
    width: number;
    icon: string;
}

interface Props {
    title?: string;
    html?: string;
    css?: string;
    js?: string;
    tailwind?: boolean;
    height?: number;
    defaultViewport?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "Preview",
    css: "",
    js: "",
    tailwind: true,
    height: 500,
    defaultViewport: "desktop",
});

const viewports: Viewport[] = [
    {
        key: "mobile",
        label: "Mobile",
        width: 375,
        icon: "📱",
    },
    {
        key: "tablet",
        label: "Tablet",
        width: 768,
        icon: "📲",
    },
    {
        key: "laptop",
        label: "Laptop",
        width: 1024,
        icon: "💻",
    },
    {
        key: "desktop",
        label: "Desktop",
        width: 1440,
        icon: "🖥️",
    },
];
const source = ref<HTMLElement>();
const activeTab = ref<"preview" | CodeTab>("preview");
const activeViewport = ref(props.defaultViewport);

const iframe = ref<HTMLIFrameElement | null>(null);

const currentViewport = computed(() => {
    return (
        viewports.find((viewport) => viewport.key === activeViewport.value) ??
        viewports[3]
    );
});

const viewportWidth = computed(() => currentViewport.value.width);

const tailwindHead = computed(() => {
    if (!props.tailwind) {
        return "";
    }

    return ``;
});
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

const srcdoc = computed(() => {
    const styles = getDocumentStyles();
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  ${tailwindHead.value}

  <style>
  ${styles}
  </style>
</head>

<body>
  ${htmlCode.value}
</body>
</html>
`;
});
const htmlCode = computed(() => source.value?.innerHTML ?? '');
const code = computed(() => {
    if (activeTab.value === "html") {
        // return props.html;
        return htmlCode.value;
    }

    if (activeTab.value === "css") {
        return props.css;
    }

    if (activeTab.value === "js") {
        return props.js;
    }

    return "";
});

const setViewport = (viewport: string) => {
    activeViewport.value = viewport;
};

const reload = () => {
    if (!iframe.value) {
        return;
    }

    iframe.value.srcdoc = srcdoc.value;
};

const copyCode = async () => {
    if (!code.value) {
        return;
    }

    await navigator.clipboard.writeText(code.value);
};

const tabs = computed(() => {
    const result: Array<{ key: "preview" | CodeTab; label: string; }> = [
        {
            key: "preview",
            label: "Preview",
        },
        {
            key: "html",
            label: "HTML",
        },
    ];

    if (props.css) {
        result.push({
            key: "css",
            label: "CSS",
        });
    }

    if (props.js) {
        result.push({
            key: "js",
            label: "JavaScript",
        });
    }

    return result;
});
</script>

<template>
    <div ref="source" class="source">
        <slot />
    </div>
    <div class="story">
        <!-- Header -->
        <div class="story-header">
            <div class="story-title">
                {{ title }}
            </div>

            <button v-if="activeTab === 'preview'" type="button" class="story-action" title="Reload preview"
                @click="reload">
                ↻
            </button>

            <button v-else type="button" class="story-action" title="Copy code" @click="copyCode">
                Copy
            </button>
        </div>

        <!-- Tabs -->
        <div class="story-tabs">
            <button v-for="tab in tabs" :key="tab.key" type="button" class="story-tab" :class="{
                active: activeTab === tab.key,
            }" @click="activeTab = tab.key">
                {{ tab.label }}
            </button>
        </div>

        <!-- Preview -->
        <div v-if="activeTab === 'preview'" class="story-preview">
            <!-- Viewport toolbar -->
            <div class="story-viewport-toolbar">
                <button v-for="viewport in viewports" :key="viewport.key" type="button" class="story-viewport-button"
                    :class="{
                        active: activeViewport === viewport.key,
                    }" @click="setViewport(viewport.key)">
                    <span class="story-viewport-icon">
                        {{ viewport.icon }}
                    </span>

                    <span>
                        {{ viewport.label }}
                    </span>

                    <span class="story-viewport-width">
                        {{ viewport.width }}px
                    </span>
                </button>
            </div>

            <!-- Preview area -->
            <div class="story-stage" :style="{
                minHeight: `${height}px`,
            }">
                <div class="story-device" :style="{
                    width: `${viewportWidth}px`,
                }">
                    <div class="story-device-header">
                        <span class="story-device-dot"></span>
                        <span class="story-device-dot"></span>
                        <span class="story-device-dot"></span>

                        <span class="story-device-size">
                            {{ viewportWidth }}px
                        </span>
                    </div>

                    <iframe ref="iframe" class="story-iframe" :srcdoc="srcdoc" title="Component preview"
                        sandbox="allow-scripts" />
                </div>
            </div>
        </div>

        <!-- Code -->
        <div v-else class="story-code">
            <div class="story-code-header">
                <span>
                    {{ activeTab.toUpperCase() }}
                </span>

                <button type="button" class="story-copy" @click="copyCode">
                    Copy
                </button>
            </div>

            <pre><code>{{ code }}</code></pre>
        </div>
    </div>
</template>

<style scoped>
.story {
    width: 100%;
    margin: 24px 0;
    overflow: hidden;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--vp-c-bg);
}

.story-header {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 14px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.story-title {
    flex: 1;
    font-size: 13px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.story-action {
    border: 0;
    border-radius: 6px;
    padding: 5px 9px;
    background: var(--vp-c-default-soft);
    color: var(--vp-c-text-2);
    font-size: 12px;
    cursor: pointer;
}

.story-action:hover {
    color: var(--vp-c-text-1);
    background: var(--vp-c-default-soft-hover);
}

.story-tabs {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 6px;
    border-bottom: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
}

.story-tab {
    border: 0;
    border-radius: 6px;
    padding: 7px 12px;
    background: transparent;
    color: var(--vp-c-text-2);
    font-size: 12px;
    cursor: pointer;
}

.story-tab:hover {
    color: var(--vp-c-text-1);
}

.story-tab.active {
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
}

.story-preview {
    width: 100%;
}

.story-viewport-toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    overflow-x: auto;
    border-bottom: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
}

.story-viewport-button {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: 7px;
    padding: 6px 9px;
    background: transparent;
    color: var(--vp-c-text-2);
    font-size: 11px;
    cursor: pointer;
}

.story-viewport-button:hover {
    background: var(--vp-c-default-soft);
    color: var(--vp-c-text-1);
}

.story-viewport-button.active {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
}

.story-viewport-icon {
    font-size: 13px;
}

.story-viewport-width {
    opacity: 0.6;
}

.story-stage {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 32px 20px;
    overflow: auto;
    background:
        linear-gradient(45deg,
            var(--vp-c-bg-soft) 25%,
            transparent 25%),
        linear-gradient(-45deg,
            var(--vp-c-bg-soft) 25%,
            transparent 25%),
        linear-gradient(45deg,
            transparent 75%,
            var(--vp-c-bg-soft) 75%),
        linear-gradient(-45deg,
            transparent 75%,
            var(--vp-c-bg-soft) 75%);
    background-size: 16px 16px;
    background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
}

.story-device {
    flex-shrink: 0;
    max-width: 100%;
    overflow: hidden;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: white;
    box-shadow:
        0 10px 30px rgb(0 0 0 / 10%),
        0 2px 8px rgb(0 0 0 / 8%);
}

.story-device-header {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 28px;
    padding: 0 10px;
    border-bottom: 1px solid #e5e7eb;
    background: #f8fafc;
}

.story-device-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #cbd5e1;
}

.story-device-size {
    margin-left: auto;
    font-family: monospace;
    font-size: 9px;
    color: #64748b;
}

.story-iframe {
    display: block;
    width: 100%;
    height: 500px;
    border: 0;
    background: white;
}

.story-code {
    overflow: hidden;
    background: #0d1117;
}

.story-code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
    padding: 0 12px;
    border-bottom: 1px solid rgb(255 255 255 / 8%);
    color: #8b949e;
    font-family: monospace;
    font-size: 11px;
}

.story-copy {
    border: 0;
    border-radius: 5px;
    padding: 4px 8px;
    background: rgb(255 255 255 / 8%);
    color: #c9d1d9;
    font-size: 11px;
    cursor: pointer;
}

.story-copy:hover {
    background: rgb(255 255 255 / 14%);
}

.story-code pre {
    margin: 0;
    padding: 18px;
    overflow-x: auto;
}

.story-code code {
    color: #c9d1d9;
    font-family:
        "SFMono-Regular",
        Consolas,
        "Liberation Mono",
        monospace;
    font-size: 13px;
    line-height: 1.6;
}

@media (max-width: 640px) {
    .story-viewport-button {
        padding: 6px 8px;
    }

    .story-viewport-width {
        display: none;
    }

    .story-stage {
        padding: 20px 10px;
    }
}
</style>
