<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    title?: string
}>()

// Component-isolated states
const isComponentDark = ref(false)
const activeViewport = ref('responsive')

const viewports = {
    responsive: { label: '📱 Responsive', width: '100%' },
    mobile: { label: '📱 Mobile', width: '375px' },
    tablet: { label: '📟 Tablet', width: '768px' },
    desktop: { label: '💻 Desktop', width: '1200px' }
}
</script>

<template>
    <div class="storyboard-container">
        <!-- Storyboard Toolbar -->
        <div class="storyboard-toolbar">
            <div class="storyboard-title">{{ title || 'Component Story' }}</div>

            <div class="storyboard-controls">
                <!-- Viewport Switcher -->
                <select v-model="activeViewport" class="control-select">
                    <option v-for="(v, key) in viewports" :key="key" :value="key">
                        {{ v.label }}
                    </option>
                </select>

                <!-- Force Dark/Light Toggle for Preview Box Only -->
                <button @click="isComponentDark = !isComponentDark" class="control-btn"
                    :class="{ 'is-active': isComponentDark }">
                    {{ isComponentDark ? '🌙 Dark Preview' : '☀️ Light Preview' }}
                </button>
            </div>
        </div>

        <!-- Preview Canvas Area -->
        <div class="storyboard-canvas-wrapper">
            <div class="storyboard-canvas" :class="[isComponentDark ? 'dark-mode-preview' : 'light-mode-preview']"
                :style="{ width: viewports[activeViewport].width }">
                <div class="canvas-content">
                    <slot name="preview" />
                </div>
            </div>
        </div>

        <!-- Code Block Container -->
        <div class="storyboard-code">
            <details class="code-details">
                <summary>View Source Code</summary>
                <div class="code-slot">
                    <slot name="code" />
                </div>
            </details>
        </div>
    </div>
</template>

<style scoped>
.storyboard-container {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    margin: 24px 0;
    overflow: hidden;
    background: var(--vp-c-bg-elv);
}

.storyboard-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background: var(--vp-c-bg-alt);
    border-bottom: 1px solid var(--vp-c-divider);
}

.storyboard-title {
    font-weight: 600;
    font-size: 0.9rem;
}

.storyboard-controls {
    display: flex;
    gap: 12px;
}

.control-select,
.control-btn {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg);
    font-size: 0.8rem;
    cursor: pointer;
}

.control-btn.is-active {
    background: var(--vp-c-brand-1);
    color: white;
}

.storyboard-canvas-wrapper {
    padding: 24px;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    overflow-x: auto;
}

/* Force standard system themes inside the canvas container */
.storyboard-canvas {
    background: #ffffff;
    color: #213547;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    min-height: 150px;
}

.storyboard-canvas.dark-mode-preview {
    background: #1a1a1a !important;
    color: #ffffff !important;
}

.canvas-content {
    padding: 20px;
    width: 100%;
}

.storyboard-code {
    border-top: 1px solid var(--vp-c-divider);
}

.code-details summary {
    padding: 8px 16px;
    font-size: 0.85rem;
    cursor: pointer;
    user-select: none;
    background: var(--vp-c-bg-alt);
}

.code-slot :deep(pre) {
    margin: 0 !important;
    border-radius: 0 !important;
}
</style>
