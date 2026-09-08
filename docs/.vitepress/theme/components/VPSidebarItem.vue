<script setup lang="ts">

import type { DefaultTheme } from "vitepress";
import { type SidebarItem } from '../../types'
import { computed } from "vue";
import VPSidebarItem from 'vitepress/dist/client/theme-default/components/VPSidebarItem.vue'

const props = defineProps<{
    item: SidebarItem
    depth: number
}>()

const hasIcon = computed(() => props.item.icon ?? false);

const vpItem = computed<DefaultTheme.SidebarItem>(() => ({
    ...props.item,
    text: props.item.icon ? `<i class="icon ${props.item.icon}"></i><span>${props.item.text}</span>` : props.item.text,
}))

</script>
<template>
    <VPSidebarItem :item="vpItem" :depth="depth" :class="{ 'has-icon': hasIcon }" />
</template>
