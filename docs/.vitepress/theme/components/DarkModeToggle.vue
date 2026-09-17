<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const theme = computed(() => (isDark.value ? 'dark' : 'light'))

function toggleTheme() {
    isDark.value = !isDark.value

    localStorage.setItem(
        'vitepress-theme-appearance',
        isDark.value ? 'dark' : 'light',
    )
}

onMounted(() => {
    const storedTheme = localStorage.getItem('vitepress-theme-appearance')

    if (storedTheme === 'dark') {
        isDark.value = true
    } else if (storedTheme === 'light') {
        isDark.value = false
    }
})
</script>

<template>
    <button
        type="button"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :data-theme="theme"
        @click="toggleTheme"
    >
        <i
            class="icon"
            :class="isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'"
            aria-hidden="true"
        ></i>
    </button>
</template>
