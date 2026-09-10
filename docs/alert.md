---
outline: deep
title: Alert
---

# Alert

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="alert" role="alert">This is alert.</div>
</div>

== HTML

```html
<div class="alert" role="alert">This is alert.</div>
```

:::

## Alert color

::: tabs variant:code key:code
== Preview
<div class="preview-container space-y-2">
  <div class="alert" role="alert">This is alert.</div>
  <div class="alert-info" role="alert">This is alert info.</div>
  <div class="alert-success" role="alert">This is alert success.</div>
  <div class="alert-warning" role="alert">This is alert warning.</div>
  <div class="alert-error" role="alert">This is alert error.</div>
</div>

== HTML

```html
<div class="alert" role="alert">This is alert.</div>
<div class="alert-info" role="alert">This is alert info.</div>
<div class="alert-success" role="alert">This is alert success.</div>
<div class="alert-warning" role="alert">This is alert warning.</div>
<div class="alert-error" role="alert">This is alert error.</div>
```

:::

## Alert soft

::: tabs variant:code key:code
== Preview
<div class="preview-container space-y-2">
  <div class="alert-soft" role="alert">This is alert soft.</div>
  <div class="alert-soft-info" role="alert">This is alert soft info.</div>
  <div class="alert-soft-success" role="alert">This is alert soft success.</div>
  <div class="alert-soft-warning" role="alert">This is alert soft warning.</div>
  <div class="alert-soft-error" role="alert">This is alert soft error.</div>
</div>

== HTML

```html
<div class="alert-soft" role="alert">This is alert soft.</div>
<div class="alert-soft-info" role="alert">This is alert soft info.</div>
<div class="alert-soft-success" role="alert">This is alert soft success.</div>
<div class="alert-soft-warning" role="alert">This is alert soft warning.</div>
<div class="alert-soft-error" role="alert">This is alert soft error.</div>
```

:::

## Alert outline

::: tabs variant:code key:code
== Preview
<div class="preview-container space-y-2">
  <div class="alert-outline" role="alert">This is alert outline.</div>
  <div class="alert-outline-info" role="alert">This is alert outline info.</div>
  <div class="alert-outline-success" role="alert">
    This is alert outline success.
  </div>
  <div class="alert-outline-warning" role="alert">
    This is alert outline warning.
  </div>
  <div class="alert-outline-error" role="alert">
    This is alert outline error.
  </div>
</div>

== HTML

```html
<div class="alert-outline" role="alert">This is alert outline.</div>
<div class="alert-outline-info" role="alert">This is alert outline info.</div>
<div class="alert-outline-success" role="alert">
  This is alert outline success.
</div>
<div class="alert-outline-warning" role="alert">
  This is alert outline warning.
</div>
<div class="alert-outline-error" role="alert">This is alert outline error.</div>
```

:::

## Alert with icon

::: tabs variant:code key:code
== Preview
<div class="preview-container space-y-2">
  <div class="alert flex items-start sm:items-center sm:gap-2" role="alert">
    This is alert.
  </div>
  <div
    class="alert-info flex items-start sm:items-center sm:gap-2"
    role="alert"
  >
    <i class="icon bi-info-circle"> </i>
    <div>This is alert info</div>
    .
  </div>
  <div
    class="alert-success flex items-start sm:items-center sm:gap-2"
    role="alert"
  >
    <i class="icon bi-check2-circle"> </i>
    <div>This is alert success</div>
    .
  </div>
  <div
    class="alert-warning flex items-start sm:items-center sm:gap-2"
    role="alert"
  >
    <i class="icon bi-exclamation-circle"> </i>
    <div>This is alert warning</div>
    .
  </div>
  <div
    class="alert-error flex items-start sm:items-center sm:gap-2"
    role="alert"
  >
    <i class="icon bi-exclamation-triangle"> </i>
    <div>This is alert error</div>
    .
  </div>
</div>

== HTML

```html
<div class="alert flex items-start sm:items-center sm:gap-2" role="alert">
  This is alert.
</div>
<div class="alert-info flex items-start sm:items-center sm:gap-2" role="alert">
  <i class="icon bi-info-circle"> </i>
  <div>This is alert info</div>
  .
</div>
<div
  class="alert-success flex items-start sm:items-center sm:gap-2"
  role="alert"
>
  <i class="icon bi-check2-circle"> </i>
  <div>This is alert success</div>
  .
</div>
<div
  class="alert-warning flex items-start sm:items-center sm:gap-2"
  role="alert"
>
  <i class="icon bi-exclamation-circle"> </i>
  <div>This is alert warning</div>
  .
</div>
<div class="alert-error flex items-start sm:items-center sm:gap-2" role="alert">
  <i class="icon bi-exclamation-triangle"> </i>
  <div>This is alert error</div>
  .
</div>
```

:::

## Alert dashed

### Alert dashed soft

::: tabs variant:code key:code
== Preview
<div class="preview-container space-y-2">
  <div class="alert-soft border-dashed" role="alert">This is alert soft.</div>
  <div class="alert-soft-info border-dashed" role="alert">
    This is alert soft info.
  </div>
  <div class="alert-soft-success border-dashed" role="alert">
    This is alert soft success.
  </div>
  <div class="alert-soft-warning border-dashed" role="alert">
    This is alert soft warning.
  </div>
  <div class="alert-soft-error border-dashed" role="alert">
    This is alert soft error.
  </div>
</div>

== HTML

```html
<div class="alert-soft border-dashed" role="alert">This is alert soft.</div>
<div class="alert-soft-info border-dashed" role="alert">
  This is alert soft info.
</div>
<div class="alert-soft-success border-dashed" role="alert">
  This is alert soft success.
</div>
<div class="alert-soft-warning border-dashed" role="alert">
  This is alert soft warning.
</div>
<div class="alert-soft-error border-dashed" role="alert">
  This is alert soft error.
</div>
```

:::

### Alert dashed outline

::: tabs variant:code key:code
== Preview
<div class="preview-container space-y-2">
  <div class="alert-outline border-dashed" role="alert">
    This is alert outline.
  </div>
  <div class="alert-outline-info border-dashed" role="alert">
    This is alert outline info.
  </div>
  <div class="alert-outline-success border-dashed" role="alert">
    This is alert outline success.
  </div>
  <div class="alert-outline-warning border-dashed" role="alert">
    This is alert outline warning.
  </div>
  <div class="alert-outline-error border-dashed" role="alert">
    This is alert outline error.
  </div>
</div>

== HTML

```html
<div class="alert-outline border-dashed" role="alert">
  This is alert outline.
</div>
<div class="alert-outline-info border-dashed" role="alert">
  This is alert outline info.
</div>
<div class="alert-outline-success border-dashed" role="alert">
  This is alert outline success.
</div>
<div class="alert-outline-warning border-dashed" role="alert">
  This is alert outline warning.
</div>
<div class="alert-outline-error border-dashed" role="alert">
  This is alert outline error.
</div>
```

:::
