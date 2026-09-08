<script setup>
import { Content, useData } from 'vitepress'
const {
    page,
    frontmatter,
} = useData();
</script>

<template>
    <div class="custom-layout">
        <h1>My Custom Layout</h1>
        <Content />
        <pre>{{ JSON.stringify(page, null, 2) }}</pre>
    </div>
</template>
