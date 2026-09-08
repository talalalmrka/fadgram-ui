---
outline: deep
title: Accordion
---

# Accordion

## Requirements

- [Alpine js version 3 or higher.](https://alpinejs.dev/essentials/installation)

::: tip
this accordion plugin requires Alpine.js for installation read official documentation here [Alpine js installation](https://alpinejs.dev/essentials/installation)
:::

## Setup accordion plugin

::: code app.js

```js
import Alpine from "alpinejs";
import accordion from "fadgram-ui/js/accordion"; /* [!code ++]*/
Alpine.plugin(accordion); /* [!code ++]*/
```

:::

## Basic Accordion

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div x-accordion>
    <div x-accordion-item>
      <div x-accordion-header>Item 1</div>
      <div x-accordion-body>
        This is the content for Item 1. You can place any HTML content here,
        such as text, images, or otherelements.
      </div>
    </div>
    <div x-accordion-item>
      <div x-accordion-header>Item 2</div>
      <div x-accordion-body>
        This is the content for Item 2. You can place any HTML content here,
        such as text, images, or otherelements.
      </div>
    </div>
    <div x-accordion-item>
      <div x-accordion-header>Item 3</div>
      <div x-accordion-body>
        This is the content for Item 3. You can place any HTML content here,
        such as text, images, or otherelements.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div x-accordion>
  <div x-accordion-item>
    <div x-accordion-header>Item 1</div>
    <div x-accordion-body>
      This is the content for Item 1. You can place any HTML content here, such
      as text, images, or otherelements.
    </div>
  </div>
  <div x-accordion-item>
    <div x-accordion-header>Item 2</div>
    <div x-accordion-body>
      This is the content for Item 2. You can place any HTML content here, such
      as text, images, or otherelements.
    </div>
  </div>
  <div x-accordion-item>
    <div x-accordion-header>Item 3</div>
    <div x-accordion-body>
      This is the content for Item 3. You can place any HTML content here, such
      as text, images, or otherelements.
    </div>
  </div>
</div>
```

:::

## Accordion Multiple mode

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div x-accordion.multiple>
    <div x-accordion-item>
      <div x-accordion-header>Item 1</div>
      <div x-accordion-body>
        This is the content for Item 1. You can place any HTML content here,
        such as text, images, or otherelements.
      </div>
    </div>
    <div x-accordion-item>
      <div x-accordion-header>Item 2</div>
      <div x-accordion-body>
        This is the content for Item 2. You can place any HTML content here,
        such as text, images, or otherelements.
      </div>
    </div>
    <div x-accordion-item>
      <div x-accordion-header>Item 3</div>
      <div x-accordion-body>
        This is the content for Item 3. You can place any HTML content here,
        such as text, images, or otherelements.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div x-accordion.multiple>
  <div x-accordion-item>
    <div x-accordion-header>Item 1</div>
    <div x-accordion-body>
      This is the content for Item 1. You can place any HTML content here, such
      as text, images, or otherelements.
    </div>
  </div>
  <div x-accordion-item>
    <div x-accordion-header>Item 2</div>
    <div x-accordion-body>
      This is the content for Item 2. You can place any HTML content here, such
      as text, images, or otherelements.
    </div>
  </div>
  <div x-accordion-item>
    <div x-accordion-header>Item 3</div>
    <div x-accordion-body>
      This is the content for Item 3. You can place any HTML content here, such
      as text, images, or otherelements.
    </div>
  </div>
</div>
```

:::
