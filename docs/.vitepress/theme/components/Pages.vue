<script setup lang="ts">
import { SidebarItem } from '@docs/.vitepress/types';
import { generateSidebar } from '@composables/sidebar';
// import { data as pages } from '@docs/pages.data'
// import sidebar from '@docs/.vitepress/fg-sidebar';
const sidebar: SidebarItem[] = generateSidebar();
</script>

<template>
  <div>
    <h2>Sidebar</h2>
    <Dump lang="json">
      {{ sidebar }}
    </Dump>
  </div>
</template>