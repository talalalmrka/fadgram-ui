---
outline: deep
icon: bi-segmented-nav
title: Navbar
---

# Navbar

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

## Navbar color

### .navbar-primary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-primary">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-primary">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-secondary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-secondary">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-secondary">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-light

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-light">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-light">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-dark

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-dark">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-dark">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-red

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-red">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-red">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-orange

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-orange">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-orange">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-amber

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-amber">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-amber">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-yellow

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-yellow">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-yellow">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-lime

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-lime">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-lime">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-green

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-green">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-green">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-emerald

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-emerald">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-emerald">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-teal

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-teal">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-teal">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-cyan

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-cyan">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-cyan">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-sky

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-sky">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-sky">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-blue

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-blue">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-blue">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-indigo

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-indigo">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-indigo">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-violet

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-violet">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-violet">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-purple

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-purple">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-purple">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-fuchsia

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-fuchsia">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-fuchsia">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-pink

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-pink">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-pink">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-rose

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-rose">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-rose">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-slate

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-slate">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-slate">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-gray

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-gray">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-gray">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-zinc

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-zinc">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-zinc">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-neutral

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-neutral">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-neutral">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

### .navbar-stone

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="navbar h-14 navbar-stone">
    <button class="navbar-toggle">
      <i class="bi-list"> </i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
      <img src="/images/logo.svg" style="width: 35px" />
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
      <a href="/home" class="nav-link active">
        <i class="icon bi-house-fill"> </i>
        <span>Home</span>
      </a>
      <a href="/blog" class="nav-link">
        <i class="icon bi-newspaper"> </i>
        <span>Blog</span>
      </a>
      <a href="/about-us" class="nav-link">
        <i class="icon bi-info"> </i>
        <span>About us</span>
      </a>
      <a href="/privacy-policy" class="nav-link">
        <i class="icon bi-shield-fill-check"> </i>
        <span>Privacy policy</span>
      </a>
    </div>
    <div class="nav">
      <button type="button" class="nav-link dark-mode-toggle">
        <i class="bi-sun-fill"> </i>
      </button>
      <div class="dropdown">
        <button type="button" class="nav-link dropdown-toggle">
          <i class="icon bi-person-fill"> </i>
          <i class="icon bi-chevron-down w-3 h-3"> </i>
        </button>
        <div class="dropdown-menu dropdown-end w-40">
          <a href="/login" class="dropdown-link">
            <i class="icon bi-box-arrow-in-right"> </i>
            <span>Sign in</span>
          </a>
          <a href="/register" class="dropdown-link">
            <i class="icon bi-person-plus"> </i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="navbar h-14 navbar-stone">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::

## Transparent top navbar

### Basic usage

::: tabs
== Preview
<CodeFrame>
<div class="navbar h-14 navbar-transparent-top navbar-transparent-primary">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>
</CodeFrame>
== Code
```html
<div class="navbar h-14 navbar-transparent-top navbar-transparent-primary">
  <button class="navbar-toggle">
    <i class="bi-list"> </i>
  </button>
  <a title="FadgramUi" href="/" class="navbar-brand">
    <img src="/images/logo.svg" style="width: 35px" />
  </a>
  <div class="nav navbar-nav navbar-collapse expand-md">
    <a href="/home" class="nav-link active">
      <i class="icon bi-house-fill"> </i>
      <span>Home</span>
    </a>
    <a href="/blog" class="nav-link">
      <i class="icon bi-newspaper"> </i>
      <span>Blog</span>
    </a>
    <a href="/about-us" class="nav-link">
      <i class="icon bi-info"> </i>
      <span>About us</span>
    </a>
    <a href="/privacy-policy" class="nav-link">
      <i class="icon bi-shield-fill-check"> </i>
      <span>Privacy policy</span>
    </a>
  </div>
  <div class="nav">
    <button type="button" class="nav-link dark-mode-toggle">
      <i class="bi-sun-fill"> </i>
    </button>
    <div class="dropdown">
      <button type="button" class="nav-link dropdown-toggle">
        <i class="icon bi-person-fill"> </i>
        <i class="icon bi-chevron-down w-3 h-3"> </i>
      </button>
      <div class="dropdown-menu dropdown-end w-40">
        <a href="/login" class="dropdown-link">
          <i class="icon bi-box-arrow-in-right"> </i>
          <span>Sign in</span>
        </a>
        <a href="/register" class="dropdown-link">
          <i class="icon bi-person-plus"> </i>
          <span>Sign up</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

:::
