<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
import { isActive } from 'vitepress/dist/client/shared'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import FgIcon from './FgIcon.vue'

type NavItemWithIcon = (
    | DefaultTheme.NavItemWithLink
    | DefaultTheme.NavItemWithChildren
) & {
    icon?: string
}

const props = defineProps<{
    item: NavItemWithIcon
}>()

const route = useRoute()

const iconPrefix = computed(() => {
    if (!props.item.icon) {
        return undefined
    }

    const separator = props.item.icon.indexOf(':')

    if (separator === -1) {
        return undefined
    }

    return props.item.icon.slice(0, separator)
})

const iconName = computed(() => {
    if (!props.item.icon) {
        return undefined
    }

    const separator = props.item.icon.indexOf(':')

    if (separator === -1) {
        return props.item.icon
    }

    return props.item.icon.slice(separator + 1)
})

const href = computed(() => {
    if (!('link' in props.item)) {
        return undefined
    }

    return typeof props.item.link === 'function'
        ? props.item.link(route.data)
        : props.item.link
})

const isActiveItem = computed(() => {
    if ('activeMatch' in props.item && props.item.activeMatch) {
        return isActive(
            route.data.relativePath,
            route.hash,
            props.item.activeMatch,
            true
        )
    }

    if ('link' in props.item && href.value) {
        return isActive(
            route.data.relativePath,
            route.hash,
            href.value,
            false
        )
    }

    if ('items' in props.item) {
        return (props.item.items ?? []).some((item) => {
            if ('link' in item) {
                const itemHref =
                    typeof item.link === 'function'
                        ? item.link(route.data)
                        : item.link

                return isActive(
                    route.data.relativePath,
                    route.hash,
                    item.activeMatch || itemHref,
                    !!item.activeMatch
                )
            }

            return false
        })
    }

    return false
})
</script>

<template>
    <!-- Simple link -->
    <VPLink v-if="'link' in item" :class="{
        VPNavBarMenuLink: true,
        active: isActiveItem
    }" :href="href" :target="item.target" :rel="item.rel" :no-icon="item.noIcon" tabindex="0">
        <FgIcon v-if="iconName" :prefix="iconPrefix" :name="iconName" class="VPNavBarMenuLinkIcon" />

        <span v-html="item.text"></span>
    </VPLink>

    <!-- Dropdown -->
    <VPFlyout v-else :class="{
        VPNavBarMenuGroup: true,
        active: isActiveItem
    }" :button="item.text" :items="item.items">
        <template #default>
            <ul class="custom-menu-items">
                <li v-for="child in item.items" :key="JSON.stringify(child)" class="custom-menu-item">
                    <VPLink v-if="'link' in child" :href="typeof child.link === 'function'
                        ? child.link(route.data)
                        : child.link
                        " :target="child.target" :rel="child.rel" :no-icon="child.noIcon" class="custom-menu-link">
                        <FgIcon v-if="child.icon" :prefix="child.icon.includes(':')
                            ? child.icon.split(':')[0]
                            : undefined
                            " :name="child.icon.includes(':')
                                ? child.icon.split(':').slice(1).join(':')
                                : child.icon
                                " class="custom-menu-icon" />

                        <span v-html="child.text"></span>
                    </VPLink>

                    <span v-else class="custom-menu-group">
                        <FgIcon v-if="child.icon" :prefix="child.icon.includes(':')
                            ? child.icon.split(':')[0]
                            : undefined
                            " :name="child.icon.includes(':')
                                ? child.icon.split(':').slice(1).join(':')
                                : child.icon
                                " class="custom-menu-icon" />

                        <span v-html="child.text"></span>
                    </span>
                </li>
            </ul>
        </template>
    </VPFlyout>
</template>

<style scoped>
.VPNavBarMenuLink {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 0.75rem;
    line-height: var(--vp-nav-height);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
}

.VPNavBarMenuLink.active {
    color: var(--vp-c-brand-1);
}

.VPNavBarMenuLink:hover {
    color: var(--vp-c-brand-1);
}

.VPNavBarMenuLinkIcon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
}

.custom-menu-items {
    margin: 0;
    padding: 0;
    list-style: none;
}

.custom-menu-item {
    margin: 0;
    padding: 0;
}

.custom-menu-link,
.custom-menu-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 10rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    color: var(--vp-c-text-1);
    white-space: nowrap;
    font-size: 0.875rem;
}

.custom-menu-link:hover {
    color: var(--vp-c-brand-1);
    background: var(--vp-c-default-soft);
}

.custom-menu-group {
    color: var(--vp-c-text-2);
}

.custom-menu-icon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
}
</style>