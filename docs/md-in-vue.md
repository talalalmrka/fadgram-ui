---
outline: deep
title: Md in vue
---

# Md in vue

## List

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <FgMarkdown> - Item 1 - Item 2 - Item 3 - Item 4 - Item 5 </FgMarkdown>
</div>

== VUE

```vue
<FgMarkdown>
- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
</FgMarkdown>
```

:::

## Headings

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <FgMarkdown>
    # Heading 1 ## Heading 2 ### Heading 3 #### Heading 4 ##### Heading 5
  </FgMarkdown>
</div>

== VUE

```vue
<FgMarkdown>
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
</FgMarkdown>
```

:::

## Task list

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <FgMarkdown>
    - [ ] Write the press release - [x] Update the website
  </FgMarkdown>
</div>

== VUE

```vue
<FgMarkdown>
- [ ] Write the press release
- [x] Update the website
</FgMarkdown>
```

:::

## Table

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <FgMarkdown>
    | Tables | Are | Cool | | ------------- | :-----------: | ----: | | col 3 is
    | right-aligned | $1600 | | col 2 is | centered | $12 | | zebra stripes |
    are neat | $1 |
  </FgMarkdown>
</div>

== VUE

```vue
<FgMarkdown>
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
</FgMarkdown>
```

:::
