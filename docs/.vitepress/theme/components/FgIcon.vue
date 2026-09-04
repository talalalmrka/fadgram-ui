<script setup lang="ts">
import { computed } from "vue";
import type { IconifyIcon } from "@iconify/types";
import { icons as biIconSet } from "@iconify-json/bi";
import { icons as fgIconSet } from "@icons/fg";

const props = withDefaults(
    defineProps<{
        prefix?: string;
        name: string;
    }>(),
    {
        prefix: "bi",
    },
);

const iconSet = computed(() => {
    return props.prefix === "fg" ? fgIconSet : biIconSet;
});

const icon = computed<IconifyIcon>(() => {
    const value = iconSet.value.icons[props.name];

    if (!value) {
        throw new Error(
            `Icon "${props.name}" not found in "${iconSet.value.prefix}" icon set.`,
        );
    }

    return value;
});

const svg = computed(() => iconToDataUrl(icon.value));

function iconToDataUrl(
    icon: IconifyIcon,
    width = icon.width ?? 16,
    height = icon.height ?? 16,
): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${icon.body}</svg>`;

    const encoded = encodeURIComponent(svg)
        .replace(/%20/g, " ")
        .replace(/%3D/g, "=")
        .replace(/%3A/g, ":")
        .replace(/%2F/g, "/")
        .replace(/%27/g, "'");

    return `url("data:image/svg+xml,${encoded}")`;
}
</script>

<template>
    <i class="icon" :style="{ '--svg': svg }" />
</template>