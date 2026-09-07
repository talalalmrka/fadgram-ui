# Plugin tabs

## Tabs with non-shared selection state

:::tabs
== tab a
a content
== tab b
b content
:::

:::tabs
== tab a
a content 2
== tab b
b content 2
:::

## Tabs with shared selection state

:::tabs key:ab
== tab a
a content
== tab b
b content
:::

:::tabs key:ab
== tab a
a content 2
== tab b
b content 2
:::

## Code variant

:::tabs variant:code
== JavaScript

```js
console.log("Hello");
```

== TypeScript

```ts
console.log("Hello" as string);
```

:::

## Nested tabs

::::tabs
=== outer tab a
outer tab a content

:::tabs
== inner tab a
inner tab a content
== inner tab b
inner tab b content
:::

=== outer tab b
outer tab b content
::::
