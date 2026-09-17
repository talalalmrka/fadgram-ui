<script setup lang="ts">
import { nextTick, provide } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { isDark } = useData()

const supportsViewTransition = () => {
  return (
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  )
}

provide('toggle-appearance', async (event: MouseEvent) => {
  if (!supportsViewTransition()) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY

  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${radius}px at ${x}px ${y}px)`,
  ]

  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  await transition.ready

  document.documentElement.animate(
    {
      clipPath: isDark.value ? clipPath.reverse() : clipPath,
    },
    {
      duration: 350,
      easing: 'ease-out',
      fill: 'forwards',
      pseudoElement: `::view-transition-${
        isDark.value ? 'old' : 'new'
      }(root)`,
    },
  )
})
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

/* Appearance toggle */

.VPSwitchAppearance {
  width: 2.25rem !important;
  height: 2.25rem !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

/* Optional: make the switch feel like a normal icon button */

.VPSwitchAppearance {
  border-radius: 0.75rem !important;
}

.VPSwitchAppearance:hover {
  background: var(--vp-c-default-soft) !important;
}
</style>
