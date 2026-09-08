<script setup lang="ts">
import type { IconifyJSON, IconifyIcon } from '@iconify/types';
import {
    computed,
    onMounted,
    ref,
    watch,
} from 'vue';

import {
    getIconifyIcon,
    getIconifyJSON,
    getIconifySVG,
    getIconifySVGData,
} from '../../gen/iconify-helpers';
import { getIconContentCSS, getIconCSS } from '@iconify/utils';

interface SelectOption {
    label: string;
    icon?: string;
    value?: string;
}

const props = withDefaults(
    defineProps<{
        prefix?: string;
        perPage?: number;
        perPageOptions?: number[];
        prefixOptions?: SelectOption[];
    }>(),
    {
        prefix: 'bi',
        perPage: 24,
        perPageOptions: () => [
            24,
            48,
            72,
            96,
            120,
        ],
        prefixOptions: () => [
            {
                label: 'Bootstrap (bi)',
                value: 'bi',
            },
            {
                label: 'Fadgram (fg)',
                value: 'fg',
            },
            {
                label: 'Material Design',
                value: 'mdi',
            },
        ],
    },
);

const search = ref('');
const page = ref(1);
const perPage = ref(props.perPage);
const prefix = ref(props.prefix);
const currentIconName = ref("");
const showModal = ref(false);

const iconNames = computed(() => {
    return Object.keys(iconSet.value?.icons ?? {});
});

const iconSet = ref<IconifyJSON | null>(null);

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
    return getIconifyIcon(prefix.value, currentIconName.value);
    // const value = iconSet.value?.icons[currentIconName.value];

    // if (!value) {
    //     throw new Error(
    //         `Icon "${currentIconName.value}" not found in "${prefix.value}" icon set.`,
    //     );
    // }

    // return value;
});

const currentIconClassName = computed(() => {
    if (!currentIconName.value) {
        return "";
    }

    return `${prefix.value}-${currentIconName.value}`;
});

const currentIconSvg = computed(() => getIconifySVG(prefix.value, currentIconName.value));

const currentIconFont = computed(() => {
    if (!currentIcon.value) {
        return "";
    }
    return `<i class="icon ${iconClassName(currentIconName.value)}"></i>`;
});

const currentIconCss = computed(() => {
    const icon = getIconifyIcon(prefix.value, currentIconName.value);

    if (!icon) {
        throw new Error(`Icon not found: ${prefix}:${name}`);
    }

    return getIconCSS(
        icon,
    );
});

const currentIconSvgData = computed(() => {
    return getIconifySVGData(prefix.value, currentIconName.value);
});
function loadIconSet(): void {
    iconSet.value = getIconifyJSON(
        prefix.value,
    );

    page.value = 1;
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

function iconClassName(name: string): string {
    return `${prefix.value}-${name}`;
}

async function copyIcon(name: string): Promise<void> {
    const value = iconClassName(name);

    try {
        await navigator.clipboard.writeText(value);
    } catch (error) {
        console.error("Failed to copy icon name:", error);
    }
}

function showIcon(name: string) {
    currentIconName.value = name;
    // console.log(getIconifySVG(prefix.value, name));
    showModal.value = true;
}

function closeIcon() {
    showModal.value = false;
    currentIconName.value = "";
}

onMounted(() => {
    loadIconSet();
});

watch(prefix, () => {
    loadIconSet();
});

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

watch(
    () => props.prefix,
    (value) => {
        prefix.value = value;
    },
);

watch(
    totalPages,
    (total) => {
        if (page.value > total) {
            page.value = total;
        }
    },
);
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

            <div class="flex flex-1 items-center gap-2 justify-end-safe">
                <!-- prefix -->
                <div class="inline-flex max-w-40">
                    <div class="form-control-container">
                        <span class="start-icon">
                            <i class="icon bi-code"></i>
                        </span>
                        <select v-model.number="prefix" aria-label="Icon set"
                            class="form-select has-start-icon has-end-icon xs pill">
                            <option v-for="option in props.prefixOptions" :key="option.value ?? 'emp'"
                                :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
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
        </div>

        <!-- Result text -->
        <div>
            <span class="badge badge-primary pill">
                {{ resultText }}
            </span>
        </div>
        <!-- Icons Grid -->
        <div v-if="paginatedIcons.length" class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
            <button v-for="name in paginatedIcons" :key="name" type="button"
                class="relative flex cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-lg border bg-gray/5 p-2 hover:text-primary dark:bg-gray-700"
                :title="`Copy ${iconClassName(name)}`" :aria-label="`Preview ${iconClassName(name)}`"
                @click="showIcon(name)">
                <div class="text-center text-3xl md:text-5xl" v-html="getIconifySVG(prefix, name)">
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
    <div v-if="currentIconName" v-show="showModal" class="modal-backdrop show" @click="closeIcon"></div>

    <!-- Icon modal -->
    <div v-if="currentIconName" v-show="showModal" id="basic-modal" class="modal fade show" role="dialog"
        aria-modal="true" aria-labelledby="icon-modal-title">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="icon-modal-title" class="modal-title">
                        {{ currentIconName }}
                        ({{ currentIconClassName }})
                    </h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeIcon">
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
                    <FgCode lang="css">{{ currentIconCss }}</FgCode>
                    <h5>Svg data</h5>
                    <FgCode lang="css">{{ currentIconSvgData }}</FgCode>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeIcon">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>