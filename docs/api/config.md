# The Config File

The config file (`.vitepress/config.mts`) allows you to customize various aspects of your VitePress site, with the most basic options being the title and description of the site:

```js [.vitepress/config.mts]
export default {
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options
  }
}
```