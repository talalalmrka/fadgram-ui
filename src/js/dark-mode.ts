export type DarkModeStrategy =
  | "data-theme"
  | "class"
  | {
      attribute: string;
      value: string;
    };

export interface DarkModeOptions {
  selector?: string;
  strategy?: DarkModeStrategy;
  iconLight?: string;
  iconDark?: string;
  storageKey?: string;
}

const DEFAULT_SELECTOR = ".dark-mode-toggle";
const DEFAULT_STORAGE_KEY = "darkMode";
const DEFAULT_ICON_LIGHT = '<i class="icon bi-sun-fill"></i>';
const DEFAULT_ICON_DARK = '<i class="icon bi-moon-stars-fill"></i>';

function isDark(strategy: DarkModeStrategy): boolean {
  const root = document.documentElement;

  if (strategy === "class") {
    return root.classList.contains("dark");
  }

  if (strategy === "data-theme") {
    return root.dataset.theme === "dark";
  }

  return root.getAttribute(strategy.attribute) === strategy.value;
}

function setDark(strategy: DarkModeStrategy, dark: boolean): void {
  const root = document.documentElement;

  if (strategy === "class") {
    root.classList.toggle("dark", dark);
    return;
  }

  if (strategy === "data-theme") {
    root.dataset.theme = dark ? "dark" : "light";
    return;
  }

  if (dark) {
    root.setAttribute(strategy.attribute, strategy.value);
  } else {
    root.removeAttribute(strategy.attribute);
  }
}

function updateIcons(
  selector: string,
  dark: boolean,
  iconLight: string,
  iconDark: string,
): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((toggle) => {
    toggle.innerHTML = dark ? iconLight : iconDark;
  });
}

function restoreTheme(strategy: DarkModeStrategy, storageKey: string): void {
  const isDark = localStorage.getItem(storageKey) == "true";
  setDark(strategy, isDark);
}

export function darkMode(options: DarkModeOptions = {}): () => void {
  const selector = options.selector ?? DEFAULT_SELECTOR;
  const strategy = options.strategy ?? "data-theme";
  const iconLight = options.iconLight ?? DEFAULT_ICON_LIGHT;
  const iconDark = options.iconDark ?? DEFAULT_ICON_DARK;
  const storageKey = options.storageKey ?? DEFAULT_STORAGE_KEY;

  // restoreTheme(strategy, storageKey);

  updateIcons(selector, isDark(strategy), iconLight, iconDark);

  const handler = (event: MouseEvent): void => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const toggle = target.closest<HTMLElement>(selector);

    if (!toggle) {
      return;
    }

    const dark = !isDark(strategy);

    setDark(strategy, dark);

    localStorage.setItem(storageKey, dark ? "true" : "false");

    updateIcons(selector, dark, iconLight, iconDark);
  };

  document.addEventListener("click", handler);

  return () => {
    document.removeEventListener("click", handler);
  };
}
document.addEventListener("DOMContentLoaded", () => {
  //   darkMode();
});
export default darkMode;
