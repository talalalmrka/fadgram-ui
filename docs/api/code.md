---
outline: deep
icon: bi-code
order: 2
title: Code
---

# Code

## Typescript code

### Story

<FgStory lang="ts">{{ "// [!code word:Hello]\nimport { initFadgramUI } from \"fadgram-ui\";\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  initFadgramUI();\n  console.log(\"Not highlighted\");\n  console.log(\"Highlighted\"); // [!code highlight]\n  console.log(\"Added code\"); // [!code ++]\n  console.log(\"Removed code\"); // [!code --]\n  console.log(\"Focused code\"); // [!code focus]\n  console.log(\"Warning code\"); // [!code warning]\n  console.log(\"Error code\"); // [!code error]\n  console.log(\"Hello world\");\n});" }}</FgStory>

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
