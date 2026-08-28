---
title: Installation
icon: bi-gear-wide-connected
outline: deep
---

# Installation

## Quick start

Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.

## Requirments

- [Tailwindcss](https://tailwindcss.com/) version 4 or higher.
- [Iconify](https://iconify.design/docs/usage/css/tailwind/tailwind4/) for tailwindcss 4 or higher.

## Installation

::: code-group

```bash [npm]
npm add -D fadgram-ui@latest
```

```bash [pnpm]
pnpm add -D fadgram-ui@latest
```

```bash [yarn]
yarn add -D fadgram-ui@latest
```

```bash [bun]
bun add -D fadgram-ui@latest
```

```bash [deno]
deno add -D fadgram-ui@latest
```

:::

## Usage:

- Add the plugin to your main style file like (app.css or main.css).

To use Fadgram UI in your project, you need to import it in your main style file like: (main.css or app.css) or any main style file after import tailwindcss.

::: code app.css

```css
@import "tailwindcss";
@import "fadgram-ui"; /* [!code ++]*/
```

:::

- Add the plugin javascript helpers to your main js file(app.js or main.js).

Add javascript helpers to your main javascript file (main.js) or (app.js). javascript helpers required by some components like (dropdown, modal, tooltip, offcanvas, tabs, toast ...etc).

::: code app.js

```js
import "fadgram-ui"; /* [!code ++]*/
```

:::

### Javascript modules.

#### Initialize all components helpers:

::: code app.js

```js
import { initFadgramUI } from "fadgram-ui";
document.addEventListener("DOMContentLoaded", () => {
  initFadgramUI();
});
```

:::

::: tip
How initFadgramUI works?
:::

::: code fadgram-ui/js/index.js

```js
<!--@include: ../js/index.js-->
```

:::

#### Initialize required components helpers only:

::: code app.js

```js
import { Dropdown } from "fadgram-ui/js/dropdown";
document.addEventListener("DOMContentLoaded", () => {
  Dropdown.init();
});
```

:::
