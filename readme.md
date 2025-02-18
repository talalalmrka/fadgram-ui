# Fadgram UI

Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.

## Installation

To install Fadgram UI, you need to have Tailwind CSS already set up in your project. If you haven't set up Tailwind CSS yet, follow the [official installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind CSS is set up, you can install Fadgram UI via npm:

```bash
npm install fadgram-ui tailwindcss
```

## Usage

To use Fadgram UI in your project, you need to include it in your Tailwind CSS configuration file (`tailwind.config.js`):

```javascript
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { FadgramUI } from "fadgram-ui";
const themeColors = ({ additionalColors = {}, defaultShade = "600" }) => {
  const colorObject = {
    ...additionalColors,
    ...colors,
  };
  return Object.keys(colorObject).reduce((acc, colorName) => {
    if (typeof colorObject[colorName] === "object") {
      acc[colorName] = {
        ...colorObject[colorName],
        DEFAULT: colorObject[colorName][defaultShade], // Add DEFAULT key
      };
    } else {
      acc[colorName] = colorObject[colorName]; // Keep non-object colors as-is
    }
    return acc;
  }, {});
};
const myThemeColors = themeColors({
  additionalColors: {
    primary: colors.blue,
    secondary: colors.slate,
    light: {
      50: "#ffffff",
      100: "#fefefe",
      200: "#fdfdfd",
      300: "#fcfcfc",
      400: "#fbfbfb",
      500: "#f9f9f9",
      600: "#f7f7f7",
      700: "#f5f5f5",
      800: "#f3f3f3",
      900: "#f1f1f1",
    },
    dark: {
      50: "#E3E4E8",
      100: "#C6C7D1",
      200: "#8F91A3",
      300: "#575A74",
      400: "#404356",
      500: "#292D38",
      600: "#252933",
      700: "#1A1D25",
      800: "#131418",
      900: "#0D0E10",
    },
  },
});
export default {
  content: [],
  theme: {
    extend: {
      colors: myThemeColors,
    },
  },
  plugins: [FadgramUI],
};
```

After adding the plugin, you can start using the custom utility classes provided by Fadgram UI in your HTML:

```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Welcome to Fadgram UI</h5>
  </div>
  <div class="card-body">This is a custom utility class from Fadgram UI.</div>
  <div class="card-footer">
    <button class="btn primary">Button</button>
  </div>
</div>
```

## Customization

Fadgram UI is designed to be customizable. You can override the default styles by extending the Tailwind CSS configuration. For example:
(`tailwind.config.js`):

```javascript
const themeColors = ({ additionalColors = {}, defaultShade = "600" }) => {
  const colorObject = {
    ...additionalColors,
    ...colors,
  };
  return Object.keys(colorObject).reduce((acc, colorName) => {
    if (typeof colorObject[colorName] === "object") {
      acc[colorName] = {
        ...colorObject[colorName],
        DEFAULT: colorObject[colorName][defaultShade], // Add DEFAULT key
      };
    } else {
      acc[colorName] = colorObject[colorName]; // Keep non-object colors as-is
    }
    return acc;
  }, {});
};
const myThemeColors = themeColors({
  additionalColors: {
    primary: colors.blue,
    secondary: colors.slate,
    light: {
      50: "#ffffff",
      100: "#fefefe",
      200: "#fdfdfd",
      300: "#fcfcfc",
      400: "#fbfbfb",
      500: "#f9f9f9",
      600: "#f7f7f7",
      700: "#f5f5f5",
      800: "#f3f3f3",
      900: "#f1f1f1",
    },
    dark: {
      50: "#E3E4E8",
      100: "#C6C7D1",
      200: "#8F91A3",
      300: "#575A74",
      400: "#404356",
      500: "#292D38",
      600: "#252933",
      700: "#1A1D25",
      800: "#131418",
      900: "#0D0E10",
    },
  },
});
```

## Contributing

We welcome contributions to Fadgram UI! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on our [GitHub repository](https://github.com/yourusername/fadgram-ui).

## License

Fadgram UI is open-source software licensed under the [MIT license](LICENSE).

## Acknowledgements

We would like to thank the Tailwind CSS team for their amazing work on the framework that makes plugins like Fadgram UI possible.
