import { Generator } from "../Generator";

class DarkModeGenerator extends Generator {
  constructor() {
    super("components/dark-mode.md", {
      icon: "bi-moon-stars",
    });
  }

  icon(name?: string) {
    if (!name) {
      return "";
    }
    return `<i class="icon ${name}"></i>`;
  }

  async options() {
    // const ops =
    // return await this.contents([
    // ])
  }
  async content(): Promise<string[]> {
    return [
      await this
        .md(`Fadgram UI provides a lightweight dark mode helper that lets you toggle dark mode from any element matching \`dark-mode-toggle\`.

The helper supports:

- \`data-theme="dark"\` by default
- Tailwind's \`.dark\` class strategy
- Custom attributes
- Persistent theme using \`localStorage\`
- Automatic light/dark toggle icons
- Custom toggle selectors
- Multiple dark mode toggle elements
- Dynamically added toggle elements

## Basic Usage

Import and initialize \`darkMode\`:

\`\`\`ts
import { darkMode } from "fadgram-ui";

darkMode();
\`\`\`

Then add the \`.dark-mode-toggle\` class to any element:

\`\`\`html
<button class="dark-mode-toggle">Toggle dark mode</button>
\`\`\`

Clicking the element toggles the theme.

## Default Strategy

Fadgram UI uses \`data-theme\` by default.

Light mode:

\`\`\`html
<html data-theme="light"></html>
\`\`\`

Dark mode:

\`\`\`html
<html data-theme="dark"></html>
\`\`\`

This works especially well with Tailwind CSS custom variants:

\`\`\`css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
\`\`\`

You can then use normal Tailwind dark variants:

\`\`\`html
<div class="bg-white dark:bg-gray-900">
  <span class="text-gray-900 dark:text-white"> Content </span>
</div>
\`\`\`

## Tailwind Class Strategy

If your project uses Tailwind's traditional \`.dark\` class strategy, use the \`class\` strategy:

\`\`\`ts
darkMode({
  strategy: "class",
});
\`\`\`

Dark mode will use:

\`\`\`html
<html class="dark"></html>
\`\`\`

and light mode:

\`\`\`html
<html></html>
\`\`\`

## Custom Attribute

You can provide a custom attribute strategy:

\`\`\`ts
darkMode({
  strategy: {
    attribute: "data-mode",
    value: "dark",
  },
});
\`\`\`

Dark mode will then use:

\`\`\`html
<html data-mode="dark"></html>
\`\`\`

When light mode is active, the attribute is removed.

## Toggle Selector

The default toggle selector is:

\`\`\`text
.dark-mode-toggle
\`\`\`

For example:

\`\`\`html
<button class="dark-mode-toggle">Toggle</button>
\`\`\`

You can provide a custom selector:

\`\`\`ts
darkMode({
  selector: "[data-theme-toggle]",
});
\`\`\`

Then:

\`\`\`html
<button data-theme-toggle>Toggle</button>
\`\`\`

The helper uses event delegation, so dynamically created elements are also supported.

## Icons

Fadgram UI automatically changes the toggle icon when the theme changes.

The default icons are:

Light mode:

\`\`\`html
<i class="icon bi-sun-fill"></i>
\`\`\`

Dark mode:

\`\`\`html
<i class="icon bi-moon-stars-fill"></i>
\`\`\`

The icon represents the action that will be performed next.

For example, while light mode is active, the moon icon is displayed.

### Custom Icons

You can provide custom icon markup:

\`\`\`ts
darkMode({
  iconLight: '<i class="bi bi-sun"></i>',
  iconDark: '<i class="bi bi-moon"></i>',
});
\`\`\`

## Multiple Toggle Buttons

You can have multiple dark mode toggles on the same page:

\`\`\`html
<header>
  <button class="dark-mode-toggle"></button>
</header>

<aside>
  <button class="dark-mode-toggle"></button>
</aside>

<footer>
  <button class="dark-mode-toggle"></button>
</footer>
\`\`\`

All matching elements are updated when the theme changes.

## Local Storage

The selected theme is automatically stored in \`localStorage\`.

The default storage key is:

\`\`\`text
darkMode
\`\`\`

The stored value is either:

\`\`\`text
dark
\`\`\`

or:

\`\`\`text
light
\`\`\`

The saved theme is restored automatically when \`darkMode()\` initializes.

### Custom Storage Key

You can customize the storage key:

\`\`\`ts
darkMode({
  storageKey: "my-app-theme",
});
\`\`\`

This allows multiple applications or components to use separate theme preferences.

## Complete Example

\`\`\`ts
import { darkMode } from "fadgram-ui";

darkMode({
  selector: ".dark-mode-toggle",
  strategy: "data-theme",
  iconLight: '<i class="icon bi-sun-fill"></i>',
  iconDark: '<i class="icon bi-moon-stars-fill"></i>',
  storageKey: "darkMode",
});
\`\`\`

HTML:

\`\`\`html
<button class="dark-mode-toggle" type="button"></button>
\`\`\`

The helper will:

1. Read the saved theme from \`localStorage\`.
2. Restore the saved theme.
3. Update the toggle icon.
4. Listen for clicks on \`.dark-mode-toggle\`.
5. Toggle between light and dark mode.
6. Save the new theme.
7. Update all matching toggle icons.

## Cleanup

\`darkMode()\` returns a cleanup function that removes its event listener:

\`\`\`ts
const cleanup = darkMode();

cleanup();
\`\`\`

This is useful when initializing and destroying components dynamically.

## Options

| Option       | Type               | Default             | Description                                  |
| ------------ | ------------------ | ------------------- | -------------------------------------------- |
| \`selector\`   | \`string\`           | \`.dark-mode-toggle\` | Selector used for theme toggle elements      |
| \`strategy\`   | \`DarkModeStrategy\` | \`data-theme\`        | Defines how dark mode is applied             |
| \`iconLight\`  | \`string\`           | Sun icon            | Icon displayed when light mode is active     |
| \`iconDark\`   | \`string\`           | Moon icon           | Icon displayed when dark mode is active      |
| \`storageKey\` | \`string\`           | \`darkMode\`          | \`localStorage\` key used to persist the theme |

### DarkModeStrategy

\`\`\`ts
type DarkModeStrategy =
  | "data-theme"
  | "class"
  | {
      attribute: string;
      value: string;
    };
\`\`\`

## API

\`\`\`ts
function darkMode(options?: DarkModeOptions): () => void;
\`\`\`

The function returns a cleanup callback.

\`\`\`ts
const cleanup = darkMode();

cleanup();
\`\`\`
`),
    ];
    return [
      await this.md(
        "Fadgram UI provides a lightweight dark mode helper that lets you toggle dark mode from any element matching `.dark-mode-toggle`.",
      ),
      "The helper supports:",
      await this.md(
        await this.contents([
          '* `data-theme="dark"` by default',
          "* Tailwind's `.dark` class strategy",
          "* Custom attributes",
          "* Persistent theme using `localStorage`",
          "* Automatic light/dark toggle icons",
          "* Custom toggle selectors",
          "* Multiple dark mode toggle elements",
          "* Dynamically added toggle elements",
        ]),
      ),
      this.h2("Setup js helper"),
      await this.code(
        `
        import { darkMode } from "@fadgram-ui";

        // with default options
        darkMode();

        // options
        darkMode({
          selector: ".dark-mode-toggle",
          strategy: "data-theme",
        });
        `,
        {
          language: "ts",
          parser: "babel-ts",
          title: "app.ts",
        },
      ),
      this.h2("Basic usage"),
      await this.codePreview(
        await this.container({
          tag: "button",
          atts: {
            title: "Toggle dark mode",
          },
          className: "dark-mode-toggle",
          content: this.icon("bi-moon-stars"),
        }),
      ),
      this.h2("Options"),
      await this.include("../../src/js/dark-mode.ts", "ts"),
    ];
  }
}

new DarkModeGenerator().generate();
