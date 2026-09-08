---
outline: deep
title: Data
---

<script setup>
import { useData } from 'vitepress'

const { 
  site,        // Site-level data
  page,        // Current page data
  frontmatter, // Current page frontmatter
  params,      // Dynamic route params
  theme,       // Theme config
  isDark,      // Dark mode state
  lang,        // Current language
  localeIndex, // Current locale index
  title,       // Page title
  description  // Page description
} = useData()
</script>

# Data

```vue
<script setup>
import { useData } from "vitepress";

const {
  site, // Site-level data
  page, // Current page data
  frontmatter, // Current page frontmatter
  params, // Dynamic route params
  theme, // Theme config
  isDark, // Dark mode state
  lang, // Current language
  localeIndex, // Current locale index
  title, // Page title
  description, // Page description
} = useData();
</script>
```

## Site

<FgCode lang="json">{{ site }}</FgCode>
