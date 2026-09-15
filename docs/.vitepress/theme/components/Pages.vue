<script setup lang="ts">
import { SidebarItem } from '@docs/.vitepress/types';

// import { data as pages } from '@docs/pages.data'
// import sidebar from '@docs/.vitepress/fg-sidebar';
const sidebar: SidebarItem[] = [];
</script>

<template>
  <div>
    <ul class="list-group">
      <li v-for="item of sidebar">
        <a :href="item.link">
          <i v-if="item.icon" class="icon" :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </a>
      </li>
    </ul>
    <Dump lang="json">
      {{ sidebar }}
    </Dump>
  </div>
</template>