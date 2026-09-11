<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { IconifyIcon, IconifyJSON } from "@iconify/types";
import { icons as biIconSet } from "@iconify-json/bi";
import { icons as fgIconSet } from "@iconify-json/fg";
import FgIcon from "./FgIcon.vue";
import FgCode from "./FgCode.vue";

const props = withDefaults(
    defineProps<{
        prefix?: string;
        perPage?: number;
        perPageOptions?: number[];
    }>(),
    {
        prefix: "bi",
        perPage: 24,
        perPageOptions: () => [24, 48, 72, 96, 120],
    },
);

const search = ref("");
const page = ref(1);
const perPage = ref(props.perPage);

const currentIconName = ref("");
const showModal = ref(false);

const iconPrefix = computed(() => props.prefix);

const iconSet = computed<IconifyJSON>(() => {
    return props.prefix === "fg" ? fgIconSet : biIconSet;
});

const iconNames = computed(() => {
    return Object.keys(iconSet.value.icons);
});

const filteredIcons = computed(() => {
    const query = search.value.trim().toLowerCase();

    if (!query) {
        return iconNames.value;
    }

    return iconNames.value.filter((name) =>
        name.toLowerCase().includes(query),
    );
});

const totalPages = computed(() => {
    return Math.max(
        1,
        Math.ceil(filteredIcons.value.length / perPage.value),
    );
});

const iconsStart = computed(() => {
    return (page.value - 1) * perPage.value;
});

const iconsEnd = computed(() => {
    return Math.min(
        iconsStart.value + perPage.value,
        filteredIcons.value.length,
    );
});

const paginatedIcons = computed(() => {
    return filteredIcons.value.slice(
        iconsStart.value,
        iconsEnd.value,
    );
});

const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = page.value;

    if (total <= 3) {
        return Array.from(
            { length: total },
            (_, index) => index + 1,
        );
    }

    if (current === 1) {
        return [1, 2, 3];
    }

    if (current === total) {
        return [total - 2, total - 1, total];
    }

    return [current - 1, current, current + 1];
});

const resultText = computed(() => {
    const count = filteredIcons.value.length;

    if (count === 0) {
        return "0 icons";
    }

    const start = iconsStart.value + 1;
    const end = iconsEnd.value;

    return `${start} to ${end} of ${count.toLocaleString()} icon${count === 1 ? "" : "s"
        }`;
});

const currentIcon = computed<IconifyIcon | null>(() => {
    if (!currentIconName.value) {
        return null;
    }

    const value = iconSet.value.icons[currentIconName.value];

    if (!value) {
        throw new Error(
            `Icon "${currentIconName.value}" not found in "${iconSet.value.prefix}" icon set.`,
        );
    }

    return value;
});

const currentIconSvg = computed(() => {
    if (!currentIcon.value) {
        return "";
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${currentIcon.value.width ?? 16} ${currentIcon.value.height ?? 16}">${currentIcon.value.body}</svg>`;
});

const currentIconFont = computed(() => {
    if (!currentIcon.value) {
        return "";
    }
    return `<i class="icon ${iconClassName(currentIconName.value)}"></i>`;
});

const currentIconDataUrl = computed(() => {
    if (!currentIcon.value) {
        return "";
    }
    const dataUrl = iconToDataUrl(currentIcon.value);
    return `--svg: ${dataUrl};`;
});

const currentIconClassName = computed(() => {
    if (!currentIconName.value) {
        return "";
    }

    return `${iconPrefix.value}-${currentIconName.value}`;
});

function iconClassName(name: string): string {
    return `${iconPrefix.value}-${name}`;
}

async function copyIcon(name: string): Promise<void> {
    const value = iconClassName(name);

    try {
        await navigator.clipboard.writeText(value);
    } catch (error) {
        console.error("Failed to copy icon name:", error);
    }
}

function showIconModal(name: string): void {
    currentIconName.value = name;
    showModal.value = true;
}

function closeIconModal(): void {
    showModal.value = false;
    currentIconName.value = "";
}

function goToPage(value: number): void {
    const nextPage = Math.max(
        1,
        Math.min(value, totalPages.value),
    );

    if (nextPage === page.value) {
        return;
    }

    page.value = nextPage;
}

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

watch(search, () => {
    page.value = 1;
});

watch(perPage, () => {
    page.value = 1;
});

watch(
    () => props.perPage,
    (value) => {
        perPage.value = value;
    },
);

watch(totalPages, (total) => {
    if (page.value > total) {
        page.value = total;
    }
});
</script>

<template>
    <div class="space-y-3">
        <!-- Top bar -->
        <div class="flex items-center justify-between gap-2">
            <!-- Search -->
            <div class="inline-flex max-w-40">
                <div class="form-control-container">
                    <span class="start-icon">
                        <i class="icon bi-search"></i>
                    </span>

                    <input v-model="search" type="search" placeholder="Search icons..." aria-label="Search icons"
                        class="form-control has-start-icon pill xs" />
                </div>
            </div>

            <!-- Per page -->
            <div class="inline-flex max-w-40">
                <div class="form-control-container">
                    <span class="start-icon">
                        <i class="icon bi-list"></i>
                    </span>

                    <select v-model.number="perPage" aria-label="Icons per page"
                        class="form-select has-start-icon has-end-icon xs pill">
                        <option v-for="option in props.perPageOptions" :key="option" :value="option">
                            {{ option }} entries
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Result text -->
        <div>
            <span class="badge badge-primary pill">
                {{ resultText }}
            </span>
        </div>

        <!-- Icons Grid -->
        <div v-if="paginatedIcons.length"
            class="grid grid-cols-3 gap-4 border-dotted-red md:grid-cols-4 lg:grid-cols-6">
            <button v-for="name in paginatedIcons" :key="name" type="button"
                class="relative flex cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-lg border bg-gray/5 p-2 hover:text-primary dark:bg-gray-700"
                :title="`Copy ${iconClassName(name)}`" :aria-label="`Preview ${iconClassName(name)}`"
                @click="showIconModal(name)">
                <div class="text-center">
                    <FgIcon :prefix="prefix" :name="name" class="inline-flex text-5xl leading-none" />
                </div>

                <span class="w-full truncate overflow-hidden px-1.5 text-center text-xs">
                    {{ name }}
                </span>
            </button>
        </div>

        <!-- Not found -->
        <div v-else class="alert alert-soft-info">
            No Icons!
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination-container px-3 pt-3">
            <div class="pagination-summary">
                Page {{ page }} of {{ totalPages }}
            </div>

            <nav class="pagination" aria-label="Pagination">
                <!-- First -->
                <button type="button" class="pagination-item" title="First Page" :disabled="page === 1"
                    @click="goToPage(1)">
                    <i class="icon bi-chevron-double-left rtl:bi-chevron-double-right"></i>
                </button>

                <!-- Previous -->
                <button type="button" class="pagination-item" title="Previous Page" :disabled="page === 1"
                    @click="goToPage(page - 1)">
                    <i class="icon bi-chevron-left rtl:bi-chevron-right"></i>
                </button>

                <!-- Pages -->
                <button v-for="item in visiblePages" :key="item" type="button" class="pagination-item"
                    :class="{ active: page === item }" :aria-current="page === item ? 'page' : undefined"
                    :aria-label="`Page ${item}`" @click="goToPage(item)">
                    {{ item }}
                </button>

                <!-- Next -->
                <button type="button" class="pagination-item" title="Next Page" :disabled="page === totalPages"
                    @click="goToPage(page + 1)">
                    <i class="icon bi-chevron-right rtl:bi-chevron-left"></i>
                </button>

                <!-- Last -->
                <button type="button" class="pagination-item" title="Last Page" :disabled="page === totalPages"
                    @click="goToPage(totalPages)">
                    <i class="icon bi-chevron-double-right rtl:bi-chevron-double-left"></i>
                </button>
            </nav>
        </div>
    </div>

    <!-- Modal backdrop -->
    <div v-show="showModal" class="modal-backdrop show" @click="closeIconModal"></div>

    <!-- Icon modal -->
    <div v-show="showModal" id="basic-modal" class="modal fade show" role="dialog" aria-modal="true"
        aria-labelledby="icon-modal-title">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="icon-modal-title" class="modal-title">
                        {{ currentIconName }}
                        ({{ currentIconClassName }})
                    </h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeIconModal">
                        <i class="icon bi-x-lg"></i>
                    </button>
                </div>

                <div v-if="currentIcon" class="modal-body space-y-3">
                    <div class="icon-demo text-center" v-html="currentIconSvg">
                    </div>
                    <h5>Icon font</h5>
                    <FgCode lang="html">{{ currentIconFont }}</FgCode>
                    <h5>Copy html</h5>
                    <FgCode lang="html">{{ currentIconSvg }}</FgCode>
                    <h5>Css</h5>
                    <FgCode lang="css">{{ currentIconDataUrl }}</FgCode>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeIconModal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>