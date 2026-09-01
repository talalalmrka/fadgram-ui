<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { biIcons, fgIcons } from "../../gen/helpers";
import { icons as biIconSet } from "@iconify-json/bi";
import { icons as fgIconSet } from "../../../../icons/fg";
import Dump from "./Dump.vue";
// import Toast from "../../../../js/toast.js";
const props = withDefaults(
    defineProps<{
        prefix?: string,
        perPage?: number;
        perPageOptions?: number[];
    }>(),
    {
        prefix: 'bi',
        perPage: 24,
        perPageOptions: () => [24, 48, 72, 96, 120],
    },
);

const search = ref("");
const page = ref(1);
const perPage = ref(props.perPage);

const iconPrefix = props.prefix;
const iconNames = props.prefix === 'fg' ? fgIcons : biIcons;

const filteredIcons = computed(() => {
    const query = search.value.trim().toLowerCase();

    if (!query) {
        return iconNames;
    }

    return iconNames.filter((name) =>
        name.toLowerCase().includes(query),
    );
});

const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredIcons.value.length / perPage.value)),
);

const iconsStart = computed(() => (page.value - 1) * perPage.value);
const iconsEnd = computed(() => iconsStart.value + perPage.value);

const paginatedIcons = computed(() => {
    const start = (page.value - 1) * perPage.value;

    // return filteredIcons.value.slice(start, start + perPage.value);
    return filteredIcons.value.slice(iconsStart.value, iconsEnd.value);
});

const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = page.value;

    if (total <= 3) {
        return Array.from({ length: total }, (_, index) => index + 1);
    }

    if (current === 1) {
        return [1, 2, 3];
    }

    if (current === total) {
        return [
            total - 2,
            total - 1,
            total,
        ];
    }

    return [
        current - 1,
        current,
        current + 1,
    ];
});
/* const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = page.value;

    if (total <= 7) {
        return Array.from({ length: total }, (_, index) => index + 1);
    }

    if (current <= 4) {
        return [1, 2, 3, 4, 5, 6];
    }

    if (current >= total - 3) {
        return [
            total - 5,
            total - 4,
            total - 3,
            total - 2,
            total - 1,
            total,
        ];
    }

    return [
        1,
        current - 1,
        current,
        current + 1,
    ];
}); */

const resultText = computed(() => {
    const count = filteredIcons.value.length;
    const start = iconsStart.value + 1;
    const end = iconsEnd.value > filteredIcons.value.length ? filteredIcons.value.length : iconsEnd.value;
    return `${start} to ${end} of ${count.toLocaleString()} icon${count === 1 ? "" : "s"}`;
});

function iconifyUrl(name: string) {
    return `https://api.iconify.design/bi/${name}.svg`;
}

function copyIcon(name: string) {
    navigator.clipboard.writeText(`${iconPrefix}-${name}`);
    try {
        // Toast.success(`Copied: bi-${name}`);
    } catch (e) {
        alert(e);
    }

}
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
function goToPage(value: number) {
    if (value < 1 || value > totalPages.value) {
        return;
    }

    page.value = value;
    // scrollTop();

}

function onSearch() {
    page.value = 1;
}
function iconClassName(name: string) {
    return `${props.prefix}-${name}`;
}
const currentIcon = ref('');
const showModal = ref<boolean>(false);
function showIconModal(name: string) {
    currentIcon.value = name;
    showModal.value = true;
}

function closeIconModal() {
    showModal.value = false;
    currentIcon.value = '';
}

const currentIconSet = computed(() => {
    switch (props.prefix) {
        case 'fg':
            return fgIconSet;
            break;
        default:
            return biIconSet;
            break;
    }
})
function getIconSvg(name: string) {
    const icons = currentIconSet.value.icons;
    const icon = icons[name];
    if (!icon) {
        throw new Error(`Icon: ${name} not found!`);
    }
    const width = icon.width ?? 24;
    const height = icon.height ?? 24;
    return [
        `<svg`,
        `xmlns="http://www.w3.org/2000/svg"`,
        `width="${width}"`,
        `height="${height}"`,
        `viewBox="0 0 ${width} ${height}"`,
        `>`,
        icon.body,
        `</svg>`,
    ].join(" ");
}
watch(perPage, () => {
    page.value = 1;
});

watch(
    () => props.perPage,
    (value) => {
        perPage.value = value;
    },
);
</script>

<template>
    <div class="space-y-3">
        <!-- Top bar -->
        <div class="flex items-center gap-2 justify-between">
            <div class="inline-flex max-w-40">
                <div class="form-control-container">
                    <span class="start-icon">
                        <i class="icon bi-search"></i>
                    </span>
                    <input v-model="search" type="search" placeholder="Search icons..." aria-label="Search icons"
                        class="form-control has-start-icon pill xs" @input="onSearch" />
                </div>
            </div>
            <div class="inline-flex max-w-40">
                <div class="form-control-container">
                    <span class="start-icon">
                        <i class="icon bi-list"></i>
                    </span>
                    <select v-model.number="perPage" aria-label="Icons per page"
                        class="form-select has-start-icon has-end-icon xs pill">
                        <option v-for="option in perPageOptions" :key="option" :value="option">
                            {{ option }} entries
                        </option>
                    </select>
                </div>
            </div>
        </div><!--top bar-->

        <!-- Result text -->
        <div>
            <span class="badge badge-primary pill">
                {{ resultText }}
            </span>
        </div>

        <!-- Icons Grid -->
        <div v-if="paginatedIcons.length"
            class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 border-dotted-red">
            <button v-for="name in paginatedIcons" :key="name" type="button"
                class="relative flex flex-col items-center justify-center gap-1 border overflow-hidden bg-gray/5 dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer p-2"
                :title="`Copy ${iconClassName(name)}`" @click="showIconModal(name)">
                <img :src="iconifyUrl(name)" :alt="iconClassName(name)" loading="lazy"
                    class="inline-flex w-6 h-6 md:w-8 md:h-8 leading-none m-0 border-dotted-blue" />
                <span class="w-full overflow-hidden px-1.5 text-xs text-center truncate">
                    {{ name }}
                </span>

                <!--<span class="w-full overflow-hidden px-1.5 text-xs text-center truncate">
                    {{ name }}
                </span> -->
            </button>
        </div>
        <!-- <div v-if="paginatedIcons.length" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="name in paginatedIcons" :key="name" class="col relative overflow-hidden">
                <button type="button"
                    class="relative flex flex-col items-center justify-center gap-2 border w-full overflow-hidden aspect-square bg-gray/5 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white cursor-pointer p-2"
                    :title="`Copy ${prefix}-${name}`" @click="showIconModal(name)">
                    <span class="w-full text-center">
                        <img :src="iconifyUrl(name)" :alt="name" loading="lazy"
                            class="inline-flex w-6 h-6 md:w-8 md:h-8" />
                    </span>

                    <span class="w-full overflow-hidden px-1.5 text-xs text-center truncate">
                        {{ name }}
                    </span>
                </button>
            </div>
        </div> -->

        <!-- Not found alert -->
        <div v-else class="alert alert-soft-info">No Icons!</div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination-container pt-3 px-3">
            <div class="pagination-summary">Page {{ page }} of {{ totalPages }}</div>
            <nav class="pagination" aria-label="Pagination" role="pagination">
                <!-- First -->
                <button class="pagination-item" title="First Page" :disabled="page === 1" @click="goToPage(1)">
                    <i class="icon bi-chevron-double-left rtl:bi-chevron-double-right"></i>
                </button>

                <!-- Prev -->
                <button class="pagination-item" title="Previous Page" :disabled="page === 1"
                    @click="goToPage(page - 1)">
                    <i class="icon bi-chevron-left rtl:bi-chevron-right"></i>
                </button>

                <!-- Pages -->
                <template v-for="(item, index) in visiblePages" :key="`${item}-${index}`">
                    <button type="button" class="pagination-item" :class="{ 'active': page === item }"
                        :aria-current="page === item ? 'page' : undefined" @click="goToPage(item)">
                        {{ item }}
                    </button>
                </template>

                <!-- Next -->
                <button class="pagination-item" title="Next Page" :disabled="page === totalPages"
                    @click="goToPage(page + 1)">
                    <i class="icon bi-chevron-right rtl:bi-chevron-left"></i>
                </button>
                <button class="pagination-item" title="Last Page" :disabled="page === totalPages"
                    @click="goToPage(totalPages)">
                    <i class="icon bi-chevron-double-right rtl:bi-chevron-double-left"></i>
                </button>
            </nav>
        </div>
    </div>
    <!-- <Dump :vale="currentIconSet" /> -->
    <div v-show="showModal" class="modal-backdrop show" @click="closeIconModal"></div>
    <div v-show="showModal" id="basic-modal" class="modal fade show">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ currentIcon }}</h5>
                    <button type="button" class="btn-close" @click="closeIconModal">
                        <i class="icon bi-x-lg"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <h5>Preview</h5>
                    <i :class="iconClassName(currentIcon)"></i>

                    <h5>Svg</h5>
                    <pre><code class="language-html">{{ getIconSvg(currentIcon) }}</code></pre>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeIconModal">Close</button>
                </div>
            </div><!-- Modal Content -->
        </div><!-- Modal Dialog -->
    </div><!-- Modal -->
</template>