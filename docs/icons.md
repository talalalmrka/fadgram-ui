---
title: "Icons"
outline: "deep"
---

# Icons

## Requirments

- [Iconify for Tailwind CSS 4](https://iconify.design/docs/usage/css/tailwind/tailwind4/).
- [Bootstrap icons set](https://icons.getbootstrap.com).

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <i class="icon bi-house-fill"> </i>
</div>

== HTML

```html
<i class="icon bi-house-fill"></i>
```

:::

## Icon Size

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-2xs"> </i>
    <i class="icon bi-0-circle text-2xs"> </i>
    <i class="icon bi-0-circle-fill text-2xs"> </i>
    <i class="icon bi-0-square text-2xs"> </i>
    <i class="icon bi-0-square-fill text-2xs"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-xs"> </i>
    <i class="icon bi-0-circle text-xs"> </i>
    <i class="icon bi-0-circle-fill text-xs"> </i>
    <i class="icon bi-0-square text-xs"> </i>
    <i class="icon bi-0-square-fill text-xs"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-sm"> </i>
    <i class="icon bi-0-circle text-sm"> </i>
    <i class="icon bi-0-circle-fill text-sm"> </i>
    <i class="icon bi-0-square text-sm"> </i>
    <i class="icon bi-0-square-fill text-sm"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-base"> </i>
    <i class="icon bi-0-circle text-base"> </i>
    <i class="icon bi-0-circle-fill text-base"> </i>
    <i class="icon bi-0-square text-base"> </i>
    <i class="icon bi-0-square-fill text-base"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-lg"> </i>
    <i class="icon bi-0-circle text-lg"> </i>
    <i class="icon bi-0-circle-fill text-lg"> </i>
    <i class="icon bi-0-square text-lg"> </i>
    <i class="icon bi-0-square-fill text-lg"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-xl"> </i>
    <i class="icon bi-0-circle text-xl"> </i>
    <i class="icon bi-0-circle-fill text-xl"> </i>
    <i class="icon bi-0-square text-xl"> </i>
    <i class="icon bi-0-square-fill text-xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-2xl"> </i>
    <i class="icon bi-0-circle text-2xl"> </i>
    <i class="icon bi-0-circle-fill text-2xl"> </i>
    <i class="icon bi-0-square text-2xl"> </i>
    <i class="icon bi-0-square-fill text-2xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-3xl"> </i>
    <i class="icon bi-0-circle text-3xl"> </i>
    <i class="icon bi-0-circle-fill text-3xl"> </i>
    <i class="icon bi-0-square text-3xl"> </i>
    <i class="icon bi-0-square-fill text-3xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-4xl"> </i>
    <i class="icon bi-0-circle text-4xl"> </i>
    <i class="icon bi-0-circle-fill text-4xl"> </i>
    <i class="icon bi-0-square text-4xl"> </i>
    <i class="icon bi-0-square-fill text-4xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-5xl"> </i>
    <i class="icon bi-0-circle text-5xl"> </i>
    <i class="icon bi-0-circle-fill text-5xl"> </i>
    <i class="icon bi-0-square text-5xl"> </i>
    <i class="icon bi-0-square-fill text-5xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-6xl"> </i>
    <i class="icon bi-0-circle text-6xl"> </i>
    <i class="icon bi-0-circle-fill text-6xl"> </i>
    <i class="icon bi-0-square text-6xl"> </i>
    <i class="icon bi-0-square-fill text-6xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-7xl"> </i>
    <i class="icon bi-0-circle text-7xl"> </i>
    <i class="icon bi-0-circle-fill text-7xl"> </i>
    <i class="icon bi-0-square text-7xl"> </i>
    <i class="icon bi-0-square-fill text-7xl"> </i>
  </div>
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123 text-8xl"> </i>
    <i class="icon bi-0-circle text-8xl"> </i>
    <i class="icon bi-0-circle-fill text-8xl"> </i>
    <i class="icon bi-0-square text-8xl"> </i>
    <i class="icon bi-0-square-fill text-8xl"> </i>
  </div>
</div>

== HTML

```html
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-2xs"> </i>
  <i class="icon bi-0-circle text-2xs"> </i>
  <i class="icon bi-0-circle-fill text-2xs"> </i>
  <i class="icon bi-0-square text-2xs"> </i>
  <i class="icon bi-0-square-fill text-2xs"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-xs"> </i>
  <i class="icon bi-0-circle text-xs"> </i>
  <i class="icon bi-0-circle-fill text-xs"> </i>
  <i class="icon bi-0-square text-xs"> </i>
  <i class="icon bi-0-square-fill text-xs"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-sm"> </i>
  <i class="icon bi-0-circle text-sm"> </i>
  <i class="icon bi-0-circle-fill text-sm"> </i>
  <i class="icon bi-0-square text-sm"> </i>
  <i class="icon bi-0-square-fill text-sm"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-base"> </i>
  <i class="icon bi-0-circle text-base"> </i>
  <i class="icon bi-0-circle-fill text-base"> </i>
  <i class="icon bi-0-square text-base"> </i>
  <i class="icon bi-0-square-fill text-base"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-lg"> </i>
  <i class="icon bi-0-circle text-lg"> </i>
  <i class="icon bi-0-circle-fill text-lg"> </i>
  <i class="icon bi-0-square text-lg"> </i>
  <i class="icon bi-0-square-fill text-lg"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-xl"> </i>
  <i class="icon bi-0-circle text-xl"> </i>
  <i class="icon bi-0-circle-fill text-xl"> </i>
  <i class="icon bi-0-square text-xl"> </i>
  <i class="icon bi-0-square-fill text-xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-2xl"> </i>
  <i class="icon bi-0-circle text-2xl"> </i>
  <i class="icon bi-0-circle-fill text-2xl"> </i>
  <i class="icon bi-0-square text-2xl"> </i>
  <i class="icon bi-0-square-fill text-2xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-3xl"> </i>
  <i class="icon bi-0-circle text-3xl"> </i>
  <i class="icon bi-0-circle-fill text-3xl"> </i>
  <i class="icon bi-0-square text-3xl"> </i>
  <i class="icon bi-0-square-fill text-3xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-4xl"> </i>
  <i class="icon bi-0-circle text-4xl"> </i>
  <i class="icon bi-0-circle-fill text-4xl"> </i>
  <i class="icon bi-0-square text-4xl"> </i>
  <i class="icon bi-0-square-fill text-4xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-5xl"> </i>
  <i class="icon bi-0-circle text-5xl"> </i>
  <i class="icon bi-0-circle-fill text-5xl"> </i>
  <i class="icon bi-0-square text-5xl"> </i>
  <i class="icon bi-0-square-fill text-5xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-6xl"> </i>
  <i class="icon bi-0-circle text-6xl"> </i>
  <i class="icon bi-0-circle-fill text-6xl"> </i>
  <i class="icon bi-0-square text-6xl"> </i>
  <i class="icon bi-0-square-fill text-6xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-7xl"> </i>
  <i class="icon bi-0-circle text-7xl"> </i>
  <i class="icon bi-0-circle-fill text-7xl"> </i>
  <i class="icon bi-0-square text-7xl"> </i>
  <i class="icon bi-0-square-fill text-7xl"> </i>
</div>
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123 text-8xl"> </i>
  <i class="icon bi-0-circle text-8xl"> </i>
  <i class="icon bi-0-circle-fill text-8xl"> </i>
  <i class="icon bi-0-square text-8xl"> </i>
  <i class="icon bi-0-square-fill text-8xl"> </i>
</div>
```

:::

## Icons sets

### Bootstrap icons (bi)

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon bi-123"> </i>
    <i class="icon bi-0-circle"> </i>
    <i class="icon bi-0-circle-fill"> </i>
    <i class="icon bi-0-square"> </i>
    <i class="icon bi-0-square-fill"> </i>
  </div>
</div>

== HTML

```html
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon bi-123"> </i>
  <i class="icon bi-0-circle"> </i>
  <i class="icon bi-0-circle-fill"> </i>
  <i class="icon bi-0-square"> </i>
  <i class="icon bi-0-square-fill"> </i>
</div>
```

:::

### Fadgram icons (fg)

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="flex flex-wrap items-center gap-4 mb-4">
    <i class="icon fg-plus"> </i>
    <i class="icon fg-sort-handle"> </i>
    <i class="icon fg-loader"> </i>
    <i class="icon fg-loader-dots-bounce"> </i>
    <i class="icon fg-loader-dots-fade"> </i>
  </div>
</div>

== HTML

```html
<div class="flex flex-wrap items-center gap-4 mb-4">
  <i class="icon fg-plus"> </i>
  <i class="icon fg-sort-handle"> </i>
  <i class="icon fg-loader"> </i>
  <i class="icon fg-loader-dots-bounce"> </i>
  <i class="icon fg-loader-dots-fade"> </i>
</div>
```

:::

## Icons list

### Bootstrab icon sets

<IconsGrid prefix="bi"/>

### Fadgram icon sets

<IconsGrid prefix="fg"/>
