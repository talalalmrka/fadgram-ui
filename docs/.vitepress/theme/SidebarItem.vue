<script setup lang="ts">
import type { DefaultTheme } from 'vitepress'

interface Props {
  item: DefaultTheme.SidebarItem
}

defineProps<Props>()
</script>

<template>
  <div class="custom-sidebar-item">
    <a
      v-if="item.link"
      :href="item.link"
      class="custom-sidebar-link"
    >
      <span
        v-if="'icon' in item && item.icon"
        class="custom-sidebar-icon"
        v-html="item.icon"
      />

      <span>{{ item.text }}</span>
    </a>

    <div
      v-else
      class="custom-sidebar-text"
    >
      <span
        v-if="'icon' in item && item.icon"
        class="custom-sidebar-icon"
        v-html="item.icon"
      />

      <span>{{ item.text }}</span>
    </div>

    <div
      v-if="item.items"
      class="custom-sidebar-children"
    >
      <SidebarItem
        v-for="child in item.items"
        :key="child.text"
        :item="child"
      />
    </div>
  </div>
</template>