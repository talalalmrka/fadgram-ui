<script setup lang="ts">
import { ref, onMounted, onUpdated, useSlots, nextTick } from 'vue'
import { codeToHtml, type BundledLanguage, type BundledTheme } from 'shiki'

interface Props {
    lang?: BundledLanguage | string
    theme?: BundledTheme | string
}

const props = withDefaults(defineProps<Props>(), {
    lang: 'javascript',
    theme: 'andromeeda'
})

const slots = useSlots()
const highlightedCode = ref<string>('')
const isLoading = ref<boolean>(true)
const rawCodeRef = ref<HTMLElement | null>(null)

async function highlightSlotContent() {
    isLoading.value = true

    // Extract text content from the default slot DOM node
    let codeToProcess = ''
    if (rawCodeRef.value) {
        codeToProcess = rawCodeRef.value.innerHTML || ''
    } else if (slots.default) {
        // Fallback if ref isn't bound yet
        const vnodes = slots.default()
        codeToProcess = vnodes.map(v => v.children || '').join('').trim()
    }
    console.log("code", codeToProcess);
    try {
        highlightedCode.value = await codeToHtml(codeToProcess, {
            lang: props.lang,
            theme: props.theme
        })
    } catch (error) {
        console.error('Failed to highlight code:', error)
        highlightedCode.value = `<pre><code>${codeToProcess}</code></pre>`
        isLoading.value = false
    } finally {
        isLoading.value = false
    }
}

onMounted(async () => {
    await nextTick();
    highlightSlotContent();
})
// onUpdated(highlightSlotContent)
</script>

<template>
    <div class="shiki-wrapper">
        <!-- Hidden container to safely read slot text content from DOM -->
        <div ref="rawCodeRef" class="slot-source" style="display: none;">
            <slot />
        </div>

        <div v-if="isLoading" class="text-center"><i class="icon fg-loader-dots-move"></i></div>
        <div v-else v-html="highlightedCode" class="code-container"></div>
    </div>
</template>

<style scoped>
.shiki-wrapper {
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
}

.code-container :deep(pre) {
    padding: 1rem;
    margin: 0;
    overflow-x: auto;
}
</style>