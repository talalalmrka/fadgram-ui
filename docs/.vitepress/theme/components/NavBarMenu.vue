<script lang="ts" setup>
import { useData } from 'vitepress'
import NavItem from './NavItem.vue'

const { theme } = useData()
</script>

<template>
    <nav v-if="theme.nav" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
        <span id="main-nav-aria-label" class="visually-hidden">
            Main Navigation
        </span>

        <ul class="list border-dotted-red">
            <li v-for="item in theme.nav" :key="JSON.stringify(item)">
                <NavItem v-if="'link' in item || 'items' in item" :item="item" />

                <component v-else-if="'component' in item" :is="item.component" v-bind="item.props" />
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.VPNavBarMenu {
    display: none;
}

.list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}

@media (min-width: 48rem) {
    .VPNavBarMenu {
        display: block;
    }
}
</style>