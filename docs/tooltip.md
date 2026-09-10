---
outline: deep
title: Tooltip
---

# Tooltip

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    role="button"
    class="btn"
    data-tooltip="This is basic tooltip."
  >
    Basic tooltip
  </button>
</div>

== HTML

```html
<button
  type="button"
  role="button"
  class="btn"
  data-tooltip="This is basic tooltip."
>
  Basic tooltip
</button>
```

:::

## Tooltip position

::: tabs variant:code key:code
== Preview
<div class="preview-container flex flex-wrap items-baseline gap-3">
  <button
    type="button"
    role="button"
    class="btn"
    data-tooltip="This is top tooltip."
    data-tooltip-position="top"
  >
    Tooltip top
  </button>
  <button
    type="button"
    role="button"
    class="btn"
    data-tooltip="This is start tooltip."
    data-tooltip-position="start"
  >
    Tooltip start
  </button>
  <button
    type="button"
    role="button"
    class="btn"
    data-tooltip="This is end tooltip."
    data-tooltip-position="end"
  >
    Tooltip end
  </button>
  <button
    type="button"
    role="button"
    class="btn"
    data-tooltip="This is bottom tooltip."
    data-tooltip-position="bottom"
  >
    Tooltip bottom
  </button>
</div>

== HTML

```html
<button
  type="button"
  role="button"
  class="btn"
  data-tooltip="This is top tooltip."
  data-tooltip-position="top"
>
  Tooltip top
</button>
<button
  type="button"
  role="button"
  class="btn"
  data-tooltip="This is start tooltip."
  data-tooltip-position="start"
>
  Tooltip start
</button>
<button
  type="button"
  role="button"
  class="btn"
  data-tooltip="This is end tooltip."
  data-tooltip-position="end"
>
  Tooltip end
</button>
<button
  type="button"
  role="button"
  class="btn"
  data-tooltip="This is bottom tooltip."
  data-tooltip-position="bottom"
>
  Tooltip bottom
</button>
```

:::

## Tooltip color

::: tabs variant:code key:code
== Preview
<div class="preview-container flex flex-wrap items-baseline gap-3">
  <button
    type="button"
    role="button"
    class="btn tooltip-primary"
    data-tooltip="This is primary tooltip."
  >
    Primary
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-secondary"
    data-tooltip="This is secondary tooltip."
  >
    Secondary
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-light"
    data-tooltip="This is light tooltip."
  >
    Light
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-dark"
    data-tooltip="This is dark tooltip."
  >
    Dark
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-red"
    data-tooltip="This is red tooltip."
  >
    Red
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-orange"
    data-tooltip="This is orange tooltip."
  >
    Orange
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-amber"
    data-tooltip="This is amber tooltip."
  >
    Amber
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-yellow"
    data-tooltip="This is yellow tooltip."
  >
    Yellow
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-lime"
    data-tooltip="This is lime tooltip."
  >
    Lime
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-green"
    data-tooltip="This is green tooltip."
  >
    Green
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-emerald"
    data-tooltip="This is emerald tooltip."
  >
    Emerald
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-teal"
    data-tooltip="This is teal tooltip."
  >
    Teal
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-cyan"
    data-tooltip="This is cyan tooltip."
  >
    Cyan
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-sky"
    data-tooltip="This is sky tooltip."
  >
    Sky
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-blue"
    data-tooltip="This is blue tooltip."
  >
    Blue
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-indigo"
    data-tooltip="This is indigo tooltip."
  >
    Indigo
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-violet"
    data-tooltip="This is violet tooltip."
  >
    Violet
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-purple"
    data-tooltip="This is purple tooltip."
  >
    Purple
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-fuchsia"
    data-tooltip="This is fuchsia tooltip."
  >
    Fuchsia
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-pink"
    data-tooltip="This is pink tooltip."
  >
    Pink
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-rose"
    data-tooltip="This is rose tooltip."
  >
    Rose
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-slate"
    data-tooltip="This is slate tooltip."
  >
    Slate
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-gray"
    data-tooltip="This is gray tooltip."
  >
    Gray
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-zinc"
    data-tooltip="This is zinc tooltip."
  >
    Zinc
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-neutral"
    data-tooltip="This is neutral tooltip."
  >
    Neutral
  </button>
  <button
    type="button"
    role="button"
    class="btn tooltip-stone"
    data-tooltip="This is stone tooltip."
  >
    Stone
  </button>
</div>

== HTML

```html
<button
  type="button"
  role="button"
  class="btn tooltip-primary"
  data-tooltip="This is primary tooltip."
>
  Primary
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-secondary"
  data-tooltip="This is secondary tooltip."
>
  Secondary
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-light"
  data-tooltip="This is light tooltip."
>
  Light
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-dark"
  data-tooltip="This is dark tooltip."
>
  Dark
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-red"
  data-tooltip="This is red tooltip."
>
  Red
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-orange"
  data-tooltip="This is orange tooltip."
>
  Orange
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-amber"
  data-tooltip="This is amber tooltip."
>
  Amber
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-yellow"
  data-tooltip="This is yellow tooltip."
>
  Yellow
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-lime"
  data-tooltip="This is lime tooltip."
>
  Lime
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-green"
  data-tooltip="This is green tooltip."
>
  Green
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-emerald"
  data-tooltip="This is emerald tooltip."
>
  Emerald
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-teal"
  data-tooltip="This is teal tooltip."
>
  Teal
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-cyan"
  data-tooltip="This is cyan tooltip."
>
  Cyan
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-sky"
  data-tooltip="This is sky tooltip."
>
  Sky
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-blue"
  data-tooltip="This is blue tooltip."
>
  Blue
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-indigo"
  data-tooltip="This is indigo tooltip."
>
  Indigo
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-violet"
  data-tooltip="This is violet tooltip."
>
  Violet
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-purple"
  data-tooltip="This is purple tooltip."
>
  Purple
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-fuchsia"
  data-tooltip="This is fuchsia tooltip."
>
  Fuchsia
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-pink"
  data-tooltip="This is pink tooltip."
>
  Pink
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-rose"
  data-tooltip="This is rose tooltip."
>
  Rose
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-slate"
  data-tooltip="This is slate tooltip."
>
  Slate
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-gray"
  data-tooltip="This is gray tooltip."
>
  Gray
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-zinc"
  data-tooltip="This is zinc tooltip."
>
  Zinc
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-neutral"
  data-tooltip="This is neutral tooltip."
>
  Neutral
</button>
<button
  type="button"
  role="button"
  class="btn tooltip-stone"
  data-tooltip="This is stone tooltip."
>
  Stone
</button>
```

:::
