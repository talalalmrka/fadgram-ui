---
outline: deep
icon: bi-bell
title: Toast
---

# Toast

## Basic usage

```js
import Toast from "fadgram-ui";

// make
Toast.make("Toast message", {
  type: "success",
  position: "top-end",
});

// success
Toast.success("This is success toast");

// info
Toast.info("This is info toast");

// warning
Toast.warning("This is warning toast");

// error
Toast.error("This is error toast");
```

## Toast options

### Toast type

<div class="flex flex-wrap items-baseline gap-3">
  <button
    type="button"
    class="btn btn-info"
    onclick="Toast.make('This is toast info.', { type: 'info' })"
  >
    Toast info
  </button>
  <button
    type="button"
    class="btn btn-success"
    onclick="Toast.make('This is toast success.', { type: 'success' })"
  >
    Toast success
  </button>
  <button
    type="button"
    class="btn btn-warning"
    onclick="Toast.make('This is toast warning.', { type: 'warning' })"
  >
    Toast warning
  </button>
  <button
    type="button"
    class="btn btn-error"
    onclick="Toast.make('This is toast error.', { type: 'error' })"
  >
    Toast error
  </button>
</div>

### Toast position

<div class="flex flex-wrap items-baseline gap-3">
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast top-start.', { position: 'top-start' })"
  >
    Toast top-start
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="
      Toast.make('This is toast top-center.', { position: 'top-center' })
    "
  >
    Toast top-center
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast top-end.', { position: 'top-end' })"
  >
    Toast top-end
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="
      Toast.make('This is toast center-start.', { position: 'center-start' })
    "
  >
    Toast center-start
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast center.', { position: 'center' })"
  >
    Toast center
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="
      Toast.make('This is toast center-end.', { position: 'center-end' })
    "
  >
    Toast center-end
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="
      Toast.make('This is toast bottom-start.', { position: 'bottom-start' })
    "
  >
    Toast bottom-start
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="
      Toast.make('This is toast bottom-center.', { position: 'bottom-center' })
    "
  >
    Toast bottom-center
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="
      Toast.make('This is toast bottom-end.', { position: 'bottom-end' })
    "
  >
    Toast bottom-end
  </button>
</div>

### Toast size

<div class="flex flex-wrap items-baseline gap-3">
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast default.', { size: 'default' })"
  >
    Toast default
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast xxs.', { size: 'xxs' })"
  >
    Toast xxs
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast xs.', { size: 'xs' })"
  >
    Toast xs
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast sm.', { size: 'sm' })"
  >
    Toast sm
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast lg.', { size: 'lg' })"
  >
    Toast lg
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast xl.', { size: 'xl' })"
  >
    Toast xl
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="Toast.make('This is toast xxl.', { size: 'xxl' })"
  >
    Toast xxl
  </button>
</div>

### Duration

::: tabs variant:code
== Preview
<button type="button" class="btn btn-primary" onclick="Toast.make('This toast.', { duration: 8000 })">Toast duration 8000</button>
== ts

```ts
Toast.make("This is toast duration 8000", { duration: 8000 });
```

:::

### ShowCloseButton

::: tabs variant:code
== Preview
<button type="button" class="btn btn-primary" onclick="Toast.make('This toast.', { showCloseButton: false })">Toast showCloseButton</button>
== ts

```ts
Toast.make("This is toast showCloseButton", { showCloseButton: false });
```

:::

### ShowProgress

::: tabs variant:code
== Preview
<button type="button" class="btn btn-primary" onclick="Toast.make('This toast.', { showProgress: false })">Toast showProgress</button>
== ts

```ts
Toast.make("This is toast showProgress", { showProgress: false });
```

:::

### PauseOnHover

::: tabs variant:code
== Preview
<button type="button" class="btn btn-primary" onclick="Toast.make('This toast.', { pauseOnHover: false })">Toast pauseOnHover</button>
== ts

```ts
Toast.make("This is toast pauseOnHover", { pauseOnHover: false });
```

:::

## Toast options api

::: code toast.ts

```ts
<!--@include: ../src/js/toast.ts-->
```

:::
