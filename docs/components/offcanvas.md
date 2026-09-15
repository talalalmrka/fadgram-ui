---
outline: deep
icon: bi-layout-sidebar-inset
title: Offcanvas
---

# Offcanvas

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#basic-offcanvas"
  >
    Basic offcanvas
  </button>
  <div class="offcanvas" id="basic-offcanvas">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#basic-offcanvas"
>
  Basic offcanvas
</button>
<div class="offcanvas" id="basic-offcanvas">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

## Offcanvas color

### Offcanvas primary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-primary"
  >
    Offcanvas primary
  </button>
  <div class="offcanvas offcanvas-primary" id="offcanvas-primary">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-primary"
>
  Offcanvas primary
</button>
<div class="offcanvas offcanvas-primary" id="offcanvas-primary">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas secondary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-secondary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-secondary"
  >
    Offcanvas secondary
  </button>
  <div class="offcanvas offcanvas-secondary" id="offcanvas-secondary">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-secondary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-secondary"
>
  Offcanvas secondary
</button>
<div class="offcanvas offcanvas-secondary" id="offcanvas-secondary">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas light

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-light"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-light"
  >
    Offcanvas light
  </button>
  <div class="offcanvas offcanvas-light" id="offcanvas-light">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-light"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-light"
>
  Offcanvas light
</button>
<div class="offcanvas offcanvas-light" id="offcanvas-light">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas dark

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-dark"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-dark"
  >
    Offcanvas dark
  </button>
  <div class="offcanvas offcanvas-dark" id="offcanvas-dark">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-dark"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-dark"
>
  Offcanvas dark
</button>
<div class="offcanvas offcanvas-dark" id="offcanvas-dark">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas red

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-red"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-red"
  >
    Offcanvas red
  </button>
  <div class="offcanvas offcanvas-red" id="offcanvas-red">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-red"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-red"
>
  Offcanvas red
</button>
<div class="offcanvas offcanvas-red" id="offcanvas-red">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas orange

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-orange"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-orange"
  >
    Offcanvas orange
  </button>
  <div class="offcanvas offcanvas-orange" id="offcanvas-orange">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-orange"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-orange"
>
  Offcanvas orange
</button>
<div class="offcanvas offcanvas-orange" id="offcanvas-orange">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas amber

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-amber"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-amber"
  >
    Offcanvas amber
  </button>
  <div class="offcanvas offcanvas-amber" id="offcanvas-amber">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-amber"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-amber"
>
  Offcanvas amber
</button>
<div class="offcanvas offcanvas-amber" id="offcanvas-amber">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas yellow

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-yellow"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-yellow"
  >
    Offcanvas yellow
  </button>
  <div class="offcanvas offcanvas-yellow" id="offcanvas-yellow">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-yellow"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-yellow"
>
  Offcanvas yellow
</button>
<div class="offcanvas offcanvas-yellow" id="offcanvas-yellow">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas lime

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-lime"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-lime"
  >
    Offcanvas lime
  </button>
  <div class="offcanvas offcanvas-lime" id="offcanvas-lime">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-lime"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-lime"
>
  Offcanvas lime
</button>
<div class="offcanvas offcanvas-lime" id="offcanvas-lime">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas green

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-green"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-green"
  >
    Offcanvas green
  </button>
  <div class="offcanvas offcanvas-green" id="offcanvas-green">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-green"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-green"
>
  Offcanvas green
</button>
<div class="offcanvas offcanvas-green" id="offcanvas-green">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas emerald

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-emerald"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-emerald"
  >
    Offcanvas emerald
  </button>
  <div class="offcanvas offcanvas-emerald" id="offcanvas-emerald">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-emerald"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-emerald"
>
  Offcanvas emerald
</button>
<div class="offcanvas offcanvas-emerald" id="offcanvas-emerald">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas teal

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-teal"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-teal"
  >
    Offcanvas teal
  </button>
  <div class="offcanvas offcanvas-teal" id="offcanvas-teal">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-teal"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-teal"
>
  Offcanvas teal
</button>
<div class="offcanvas offcanvas-teal" id="offcanvas-teal">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas cyan

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-cyan"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-cyan"
  >
    Offcanvas cyan
  </button>
  <div class="offcanvas offcanvas-cyan" id="offcanvas-cyan">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-cyan"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-cyan"
>
  Offcanvas cyan
</button>
<div class="offcanvas offcanvas-cyan" id="offcanvas-cyan">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas sky

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-sky"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-sky"
  >
    Offcanvas sky
  </button>
  <div class="offcanvas offcanvas-sky" id="offcanvas-sky">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-sky"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-sky"
>
  Offcanvas sky
</button>
<div class="offcanvas offcanvas-sky" id="offcanvas-sky">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas blue

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-blue"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-blue"
  >
    Offcanvas blue
  </button>
  <div class="offcanvas offcanvas-blue" id="offcanvas-blue">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-blue"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-blue"
>
  Offcanvas blue
</button>
<div class="offcanvas offcanvas-blue" id="offcanvas-blue">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas indigo

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-indigo"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-indigo"
  >
    Offcanvas indigo
  </button>
  <div class="offcanvas offcanvas-indigo" id="offcanvas-indigo">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-indigo"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-indigo"
>
  Offcanvas indigo
</button>
<div class="offcanvas offcanvas-indigo" id="offcanvas-indigo">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas violet

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-violet"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-violet"
  >
    Offcanvas violet
  </button>
  <div class="offcanvas offcanvas-violet" id="offcanvas-violet">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-violet"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-violet"
>
  Offcanvas violet
</button>
<div class="offcanvas offcanvas-violet" id="offcanvas-violet">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas purple

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-purple"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-purple"
  >
    Offcanvas purple
  </button>
  <div class="offcanvas offcanvas-purple" id="offcanvas-purple">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-purple"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-purple"
>
  Offcanvas purple
</button>
<div class="offcanvas offcanvas-purple" id="offcanvas-purple">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas fuchsia

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-fuchsia"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-fuchsia"
  >
    Offcanvas fuchsia
  </button>
  <div class="offcanvas offcanvas-fuchsia" id="offcanvas-fuchsia">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-fuchsia"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-fuchsia"
>
  Offcanvas fuchsia
</button>
<div class="offcanvas offcanvas-fuchsia" id="offcanvas-fuchsia">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas pink

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-pink"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-pink"
  >
    Offcanvas pink
  </button>
  <div class="offcanvas offcanvas-pink" id="offcanvas-pink">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-pink"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-pink"
>
  Offcanvas pink
</button>
<div class="offcanvas offcanvas-pink" id="offcanvas-pink">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas rose

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-rose"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-rose"
  >
    Offcanvas rose
  </button>
  <div class="offcanvas offcanvas-rose" id="offcanvas-rose">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-rose"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-rose"
>
  Offcanvas rose
</button>
<div class="offcanvas offcanvas-rose" id="offcanvas-rose">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas slate

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-slate"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-slate"
  >
    Offcanvas slate
  </button>
  <div class="offcanvas offcanvas-slate" id="offcanvas-slate">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-slate"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-slate"
>
  Offcanvas slate
</button>
<div class="offcanvas offcanvas-slate" id="offcanvas-slate">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas gray

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-gray"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-gray"
  >
    Offcanvas gray
  </button>
  <div class="offcanvas offcanvas-gray" id="offcanvas-gray">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-gray"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-gray"
>
  Offcanvas gray
</button>
<div class="offcanvas offcanvas-gray" id="offcanvas-gray">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas zinc

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-zinc"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-zinc"
  >
    Offcanvas zinc
  </button>
  <div class="offcanvas offcanvas-zinc" id="offcanvas-zinc">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-zinc"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-zinc"
>
  Offcanvas zinc
</button>
<div class="offcanvas offcanvas-zinc" id="offcanvas-zinc">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas neutral

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-neutral"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-neutral"
  >
    Offcanvas neutral
  </button>
  <div class="offcanvas offcanvas-neutral" id="offcanvas-neutral">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-neutral"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-neutral"
>
  Offcanvas neutral
</button>
<div class="offcanvas offcanvas-neutral" id="offcanvas-neutral">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas stone

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-stone"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-stone"
  >
    Offcanvas stone
  </button>
  <div class="offcanvas offcanvas-stone" id="offcanvas-stone">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-stone"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-stone"
>
  Offcanvas stone
</button>
<div class="offcanvas offcanvas-stone" id="offcanvas-stone">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

## Offcanvas position

### Offcanvas start

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-start"
  >
    Offcanvas start
  </button>
  <div class="offcanvas offcanvas-start" id="offcanvas-start">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-start"
>
  Offcanvas start
</button>
<div class="offcanvas offcanvas-start" id="offcanvas-start">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas end

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-end"
  >
    Offcanvas end
  </button>
  <div class="offcanvas offcanvas-end" id="offcanvas-end">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-end"
>
  Offcanvas end
</button>
<div class="offcanvas offcanvas-end" id="offcanvas-end">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas top

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-top"
  >
    Offcanvas top
  </button>
  <div class="offcanvas offcanvas-top" id="offcanvas-top">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-top"
>
  Offcanvas top
</button>
<div class="offcanvas offcanvas-top" id="offcanvas-top">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas bottom

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas-bottom"
  >
    Offcanvas bottom
  </button>
  <div class="offcanvas offcanvas-bottom" id="offcanvas-bottom">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas-bottom"
>
  Offcanvas bottom
</button>
<div class="offcanvas offcanvas-bottom" id="offcanvas-bottom">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

## Offcanvas expand

::: info
Expand offcanvas with responsive breakponts (sm, md, lg, xl)
:::

### Offcanvas expand sm

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas"
  >
    Offcanvas
  </button>
  <div class="offcanvas offcanvas-expand-sm" id="offcanvas">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas"
>
  Offcanvas
</button>
<div class="offcanvas offcanvas-expand-sm" id="offcanvas">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas expand md

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas"
  >
    Offcanvas
  </button>
  <div class="offcanvas offcanvas-expand-md" id="offcanvas">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas"
>
  Offcanvas
</button>
<div class="offcanvas offcanvas-expand-md" id="offcanvas">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas expand lg

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas"
  >
    Offcanvas
  </button>
  <div class="offcanvas offcanvas-expand-lg" id="offcanvas">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas"
>
  Offcanvas
</button>
<div class="offcanvas offcanvas-expand-lg" id="offcanvas">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::

### Offcanvas expand xl

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="offcanvas"
    data-fg-target="#offcanvas"
  >
    Offcanvas
  </button>
  <div class="offcanvas offcanvas-expand-xl" id="offcanvas">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">FadgramUi</h3>
      <button class="offcanvas-close">
        <i class="icon bi-x-lg"> </i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="nav vertical">
        <a href="#!" class="nav-link active">
          <i class="icon bi-house-fill"> </i>
          <span>Home</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-newspaper"> </i>
          <span>Blog</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-palette-fill"> </i>
          <span>Design</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-info"> </i>
          <span>About us</span>
        </a>
        <a href="#!" class="nav-link">
          <i class="icon bi-shield-fill-check"> </i>
          <span>Privacy policy</span>
        </a>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="offcanvas"
  data-fg-target="#offcanvas"
>
  Offcanvas
</button>
<div class="offcanvas offcanvas-expand-xl" id="offcanvas">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title">FadgramUi</h3>
    <button class="offcanvas-close">
      <i class="icon bi-x-lg"> </i>
    </button>
  </div>
  <div class="offcanvas-body">
    <div class="nav vertical">
      <a href="#!" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-palette-fill"> </i>
        <span>Design</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="#!" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
  </div>
</div>
```

:::
