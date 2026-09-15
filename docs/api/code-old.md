# Code

## Code block

### Usage

````md
::: code-block [app.js]

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
````

:::

````
### Preview

::: code-block [app.js]
```js
const express = require('express');
const app = express();

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
````

:::

## fgcode

::: fgcode {"language": "js", "title": "index.js"}
const express = require('express');
const app = express();

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
:::

## exercise

::: exercise Task 1: Initialize Project
Run `npm init` in your terminal to set up your directory structure.
:::
