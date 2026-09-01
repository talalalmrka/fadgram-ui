<script setup lang="ts">
const props = defineProps<{
    vale: any
    lang?: string
}>()
</script>
<template>
    <pre><code :class="lang ? `language-${lang}` : ''">{{ JSON.stringify(vale, null, 2) }}</code></pre>
</template>