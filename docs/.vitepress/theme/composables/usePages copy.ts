/*import { computed, type ComputedRef } from "vue";
import type { PageData } from "vitepress";

interface MarkdownModule {
  __pageData?: PageData;
}

const modules = import.meta.glob<MarkdownModule>("../**/ /*.md", {
  eager: true,
});

export function usePages(): ComputedRef<PageData[]> {
  return computed(() => {
    return Object.values(modules)
      .map((module) => module.__pageData)
      .filter((pageData): pageData is PageData => !!pageData);
  });
}*/
import { computed, type ComputedRef } from "vue";
import type { PageData } from "vitepress";

interface MarkdownModule {
  __pageData?: PageData;
}

const modules = import.meta.glob<MarkdownModule>("../**/*.md", {
  eager: true,
});

export function usePages(): ComputedRef<PageData[]> {
  return computed(() => {
    return Object.values(modules)
      .map((module) => module.__pageData)
      .filter((pageData): pageData is PageData => !!pageData);
  });
}
