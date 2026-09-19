---
outline: deep
icon: bi-toggle-on
title: Segmented control
---

# Segmented control

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="segmented-control">
    <button
      type="button"
      class="segmented-control-item active segmented-control-item"
    >
      Day
    </button>
    <button type="button" class="segmented-control-item segmented-control-item">
      Week
    </button>
    <button type="button" class="segmented-control-item segmented-control-item">
      Month
    </button>
  </div>
</div>

== HTML

```html
<div class="segmented-control">
  <button
    type="button"
    class="segmented-control-item active segmented-control-item"
  >
    Day
  </button>
  <button type="button" class="segmented-control-item segmented-control-item">
    Week
  </button>
  <button type="button" class="segmented-control-item segmented-control-item">
    Month
  </button>
</div>
```

:::

## Vue

<SegmentedControl v-model="view" :options="segmentedOptions" />
