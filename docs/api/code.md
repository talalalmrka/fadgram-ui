---
outline: deep
icon: bi-code
order: 2
title: Code
---

# Code

## Html code

### Story

<FgCoder lang="html">{{ "<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-light\">Light</button>\n<button type=\"button\" class=\"btn btn-dark\">Dark</button><!-- [!code ++] -->\n<button type=\"button\" class=\"btn btn-red\">Red</button><!-- [!code --] -->\n<button type=\"button\" class=\"btn btn-orange\">Orange</button\n><!-- [!code focus] -->\n<button type=\"button\" class=\"btn btn-amber\">Amber</button>\n<button type=\"button\" class=\"btn btn-yellow\">Yellow</button>\n<button type=\"button\" class=\"btn btn-lime\">Lime</button>\n<button type=\"button\" class=\"btn btn-green\">Green</button>\n<button type=\"button\" class=\"btn btn-emerald\">Emerald</button>\n<button type=\"button\" class=\"btn btn-teal\">Teal</button>\n<button type=\"button\" class=\"btn btn-cyan\">Cyan</button>\n<button type=\"button\" class=\"btn btn-sky\">Sky</button>\n<button type=\"button\" class=\"btn btn-blue\">Blue</button>\n<button type=\"button\" class=\"btn btn-indigo\">Indigo</button>\n<button type=\"button\" class=\"btn btn-violet\">Violet</button>\n<button type=\"button\" class=\"btn btn-purple\">Purple</button>\n<button type=\"button\" class=\"btn btn-fuchsia\">Fuchsia</button>\n<button type=\"button\" class=\"btn btn-pink\">Pink</button>\n<button type=\"button\" class=\"btn btn-rose\">Rose</button>\n<button type=\"button\" class=\"btn btn-slate\">Slate</button>\n<button type=\"button\" class=\"btn btn-gray\">Gray</button>\n<button type=\"button\" class=\"btn btn-zinc\">Zinc</button>\n<button type=\"button\" class=\"btn btn-neutral\">Neutral</button>\n<button type=\"button\" class=\"btn btn-stone\">Stone</button>" }}</FgCoder>

### Real

```html [app.ts]
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button><!-- [!code ++] -->
<button type="button" class="btn btn-red">Red</button><!-- [!code --] -->
<button type="button" class="btn btn-orange">Orange</button
><!-- [!code focus] -->
<button type="button" class="btn btn-amber">Amber</button>
<button type="button" class="btn btn-yellow">Yellow</button>
<button type="button" class="btn btn-lime">Lime</button>
<button type="button" class="btn btn-green">Green</button>
<button type="button" class="btn btn-emerald">Emerald</button>
<button type="button" class="btn btn-teal">Teal</button>
<button type="button" class="btn btn-cyan">Cyan</button>
<button type="button" class="btn btn-sky">Sky</button>
<button type="button" class="btn btn-blue">Blue</button>
<button type="button" class="btn btn-indigo">Indigo</button>
<button type="button" class="btn btn-violet">Violet</button>
<button type="button" class="btn btn-purple">Purple</button>
<button type="button" class="btn btn-fuchsia">Fuchsia</button>
<button type="button" class="btn btn-pink">Pink</button>
<button type="button" class="btn btn-rose">Rose</button>
<button type="button" class="btn btn-slate">Slate</button>
<button type="button" class="btn btn-gray">Gray</button>
<button type="button" class="btn btn-zinc">Zinc</button>
<button type="button" class="btn btn-neutral">Neutral</button>
<button type="button" class="btn btn-stone">Stone</button>
```

## Css code

### Story

<FgCoder lang="css">{{ "@import \"tailwindcss\";\n@import \"@css/index.css\";\n@import \"./theme.css\";\n@custom-variant dark (&:where(.dark, .dark *));\n@plugin \"@iconify/tailwind4\" {\n  prefixes: bi, fg, mdi; /* [!code ++] */\n  iconselector: \".{prefix}-{name}\";\n  maskselector: \".icon\";\n}\n@layer base {\n  body {\n    @apply font-poppins antialiased;\n  }\n\n  ol,\n  ul {\n    @apply list-none m-0 p-0;\n  }\n\n  .vp-doc h2,\n  .vp-doc h3,\n  .vp-doc h4 {\n    @apply relative mb-3!;\n    &::before {\n      content: \"\";\n      @apply absolute top-full mt-0.5 w-full max-w-14 h-0.5 rounded bg-primary;\n    }\n  }\n}" }}</FgCoder>

### Real

```css [app.ts]
@import "tailwindcss";
@import "@css/index.css";
@import "./theme.css";
@custom-variant dark (&:where(.dark, .dark *));
@plugin "@iconify/tailwind4" {
  prefixes: bi, fg, mdi; /* [!code ++] */
  iconselector: ".{prefix}-{name}";
  maskselector: ".icon";
}
@layer base {
  body {
    @apply font-poppins antialiased;
  }

  ol,
  ul {
    @apply list-none m-0 p-0;
  }

  .vp-doc h2,
  .vp-doc h3,
  .vp-doc h4 {
    @apply relative mb-3!;
    &::before {
      content: "";
      @apply absolute top-full mt-0.5 w-full max-w-14 h-0.5 rounded bg-primary;
    }
  }
}
```

## Typescript code

### Story

<FgCoder lang="ts">{{ "// [!code word:Hello]\nimport { initFadgramUI } from \"fadgram-ui\";\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  initFadgramUI();\n  console.log(\"Not highlighted\");\n  console.log(\"Highlighted\"); // [!code highlight]\n  console.log(\"Added code\"); // [!code ++]\n  console.log(\"Removed code\"); // [!code --]\n  console.log(\"Focused code\"); // [!code focus]\n  console.log(\"Warning code\"); // [!code warning]\n  console.log(\"Error code\"); // [!code error]\n  console.log(\"Hello world\");\n});" }}</FgCoder>

### Real

```ts [app.ts]
// [!code word:Hello]
import { initFadgramUI } from "fadgram-ui";
document.addEventListener("DOMContentLoaded", () => {
  initFadgramUI();
  console.log("Not highlighted");
  console.log("Highlighted"); // [!code highlight]
  console.log("Added code"); // [!code ++]
  console.log("Removed code"); // [!code --]
  console.log("Focused code"); // [!code focus]
  console.log("Warning code"); // [!code warning]
  console.log("Error code"); // [!code error]
  console.log("Hello world");
});
```
