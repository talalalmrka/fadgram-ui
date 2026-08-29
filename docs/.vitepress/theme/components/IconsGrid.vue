<script setup lang="ts">
import { computed, ref, watch } from "vue";
import icons from "@iconify-json/bi/icons.json";
// import Toast from "../../../../js/toast.js";
const props = withDefaults(
    defineProps<{
        perPage?: number;
        perPageOptions?: number[];
    }>(),
    {
        perPage: 24,
        perPageOptions: () => [24, 48, 72, 96, 120],
    },
);

const search = ref("");
const page = ref(1);
const perPage = ref(props.perPage);

const iconNames = Object.keys(icons.icons);

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

const paginatedIcons = computed(() => {
    const start = (page.value - 1) * perPage.value;

    return filteredIcons.value.slice(start, start + perPage.value);
});

const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = page.value;

    if (total <= 7) {
        return Array.from({ length: total }, (_, index) => index + 1);
    }

    if (current <= 4) {
        return [1, 2, 3, 4, 5, 6, -1, total];
    }

    if (current >= total - 3) {
        return [
            1,
            -1,
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
        -1,
        current - 1,
        current,
        current + 1,
        -1,
        total,
    ];
});

const resultText = computed(() => {
    const count = filteredIcons.value.length;

    return `${count.toLocaleString()} icon${count === 1 ? "" : "s"}`;
});

function iconifyUrl(name: string) {
    return `https://api.iconify.design/bi/${name}.svg`;
}

function copyIcon(name: string) {
    navigator.clipboard.writeText(`bi-${name}`);
  try{
    Toast.success(`Copied: bi-${name}`);
  }catch(e){
    alert(e);
  }
  
}

function goToPage(value: number) {
    if (value < 1 || value > totalPages.value) {
        return;
    }

    page.value = value;

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function onSearch() {
    page.value = 1;
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
        <div class="flex items-center gap-2 justify-between">
            <div class="inline-flex max-w-40">
                <div class="form-control-container">
                    <span class="start-icon">
                        <i class="icon bi-search"></i>
                    </span>
                    <input v-model="search" type="search" placeholder="Search icons..." aria-label="Search icons"
                        class="form-control has-start-icon pill sm" @input="onSearch" />
                </div>
            </div>
            <div class="inline-flex max-w-40">
                <div class="form-control-container">
                    <span class="start-icon">
                        <i class="icon bi-list"></i>
                    </span>
                    <select v-model.number="perPage" aria-label="Icons per page"
                        class="form-select has-start-icon has-end-icon sm pill">
                        <option v-for="option in perPageOptions" :key="option" :value="option">
                            {{ option }} entries
                        </option>
                    </select>
                </div>
            </div>
        </div><!--top bar-->
        <div>
            <span class="badge badge-primary pill">
                {{ resultText }}
            </span>
        </div>

        <div v-if="paginatedIcons.length" class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="name in paginatedIcons"
              :key="name"
              class="col relative overflow-hidden">
                <button type="button"
                  class="relative flex flex-col items-center gap-2 border w-full overflow-hidden aspect-square bg-gray/5 dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer p-2" :title="`Copy bi-${name}`" @click="copyIcon(name)">
                    <span class="w-full text-center">
                        <img
                          :src="iconifyUrl(name)"
                          :alt="name"
                          loading="lazy"
                          class="inline-flex w-7 h-7 md:w-10 md:h-10"/>
                    </span>

                    <span class="w-full overflow-hidden px-1.5 text-xs text-center truncate">
                        {{ name }}
                    </span>
                </button>
            </div>
        </div>
        <div v-else class="alert alert-soft-info">No Icons!</div>
      <nav v-if="totalPages > 1" class="icon-grid__pagination" aria-label="Icon pagination">
            <button type="button" :disabled="page === 1" @click="goToPage(page - 1)">
                <i class="icon bi-chevron-left"></i>
            </button>

            <template v-for="(item, index) in visiblePages" :key="`${item}-${index}`">
                <span v-if="item === -1" class="icon-grid__ellipsis">
                    ...
                </span>

                <button v-else type="button" :class="{ 'is-active': page === item }"
                    :aria-current="page === item ? 'page' : undefined" @click="goToPage(item)">
                    {{ item }}
                </button>
            </template>

            <button type="button" :disabled="page === totalPages" @click="goToPage(page + 1)">
                <i class="icon bi-chevron-right"></i>
            </button>
        </nav>
    </div>

    <div class="icon-grid hidden">
        <div class="icon-grid__toolbar">
            <div class="icon-grid__search">
                <svg class="icon-grid__search-icon" viewBox="0 0 16 16" aria-hidden="true">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>

                <input v-model="search" type="search" placeholder="Search icons..." aria-label="Search icons"
                    @input="onSearch" />

                <button v-if="search" type="button" class="icon-grid__clear" aria-label="Clear search"
                    @click="search = ''; onSearch()">
                    ×
                </button>
            </div>

            <label class="icon-grid__per-page">
                <span>Per page</span>

                <select v-model.number="perPage" aria-label="Icons per page">
                    <option v-for="option in perPageOptions" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
            </label>

            <span class="icon-grid__count">
                {{ resultText }}
            </span>
        </div>

        <div v-if="paginatedIcons.length" class="icon-grid__items">
            <button v-for="name in paginatedIcons" :key="name" type="button" class="icon-grid__item"
                :title="`Copy bi:${name}`" @click="copyIcon(name)">
                <span class="icon-grid__preview">
                    <img :src="iconifyUrl(name)" :alt="name" loading="lazy" />
                </span>

                <span class="icon-grid__name">
                    {{ name }}
                </span>
            </button>
        </div>

        <div v-else class="icon-grid__empty">
            No icons found for "{{ search }}".
        </div>

        <nav v-if="totalPages > 1" class="icon-grid__pagination" aria-label="Icon pagination">
            <button type="button" :disabled="page === 1" @click="goToPage(page - 1)">
                Previous
            </button>

            <template v-for="(item, index) in visiblePages" :key="`${item}-${index}`">
                <span v-if="item === -1" class="icon-grid__ellipsis">
                    ...
                </span>

                <button v-else type="button" :class="{ 'is-active': page === item }"
                    :aria-current="page === item ? 'page' : undefined" @click="goToPage(item)">
                    {{ item }}
                </button>
            </template>

            <button type="button" :disabled="page === totalPages" @click="goToPage(page + 1)">
                Next
            </button>
        </nav>
    </div>
</template>

<style scoped>
.icon-grid {
    width: 100%;
}

.icon-grid__toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
}

.icon-grid__search {
    position: relative;
    flex: 1;
}

.icon-grid__search input {
    width: 100%;
    height: 42px;
    padding: 0 40px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    outline: none;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    transition:
        border-color 0.2s,
        box-shadow 0.2s;
}

.icon-grid__search input:focus {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.icon-grid__search-icon {
    position: absolute;
    top: 50%;
    left: 14px;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    fill: var(--vp-c-text-3);
    pointer-events: none;
}

.icon-grid__clear {
    position: absolute;
    top: 50%;
    right: 8px;
    width: 28px;
    height: 28px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: var(--vp-c-text-2);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    transform: translateY(-50%);
}

.icon-grid__clear:hover {
    background: var(--vp-c-default-soft);
}

.icon-grid__per-page {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
}

.icon-grid__per-page select {
    height: 42px;
    padding: 0 32px 0 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    outline: none;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    cursor: pointer;
}

.icon-grid__per-page select:focus {
    border-color: var(--vp-c-brand-1);
}

.icon-grid__count {
    flex-shrink: 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
}

.icon-grid__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 10px;
}

.icon-grid__item {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 18px 10px 14px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    cursor: pointer;
    transition:
        border-color 0.2s,
        background 0.2s,
        transform 0.2s;
}

.icon-grid__item:hover {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg);
    transform: translateY(-2px);
}

.icon-grid__preview {
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
}

.icon-grid__preview img {
    width: 32px;
    height: 32px;
}

.icon-grid__name {
    width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--vp-c-text-2);
    font-family: var(--vp-font-family-mono);
    font-size: 12px;
}

.icon-grid__empty {
    padding: 60px 20px;
    border: 1px dashed var(--vp-c-divider);
    border-radius: 10px;
    color: var(--vp-c-text-2);
    text-align: center;
}

.icon-grid__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 24px;
}

.icon-grid__pagination button {
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 7px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    cursor: pointer;
}

.icon-grid__pagination button:hover:not(:disabled) {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
}

.icon-grid__pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.4;
}

.icon-grid__pagination button.is-active {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
}

.icon-grid__ellipsis {
    padding: 0 4px;
    color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
    .icon-grid__toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    .icon-grid__per-page {
        justify-content: space-between;
    }

    .icon-grid__count {
        text-align: right;
    }

    .icon-grid__items {
        grid-template-columns: repeat(3, 1fr);
    }

    .icon-grid__pagination {
        flex-wrap: wrap;
    }
}
</style>