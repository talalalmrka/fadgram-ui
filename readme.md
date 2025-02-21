# Fadgram UI

Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.

## Components

- typography
- badge
- button
- button-group
- dropdown
- card
- overview-card
- form-control
- drawer
- navbar
- nav
- progress
- alert
- code
- table

## Installation

To install Fadgram UI, you need to have Tailwind CSS already set up in your project. If you haven't set up Tailwind CSS yet, follow the [official installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind CSS is set up, you can install Fadgram UI via npm:

```bash
npm install fadgram-ui tailwindcss
```

## Usage

### Setup (`tailwind.config.js`).

To use Fadgram UI in your project, you need to include it in your Tailwind CSS configuration file (`tailwind.config.js`):

```javascript
import defaultTheme from "tailwindcss/defaultTheme";
import { FadgramUI } from "fadgram-ui";
import { fgThemeColors } from "fadgram-ui/theme.js";

export default {
  content: [],
  theme: {
    extend: {
      colors: fgThemeColors({
        //add custom colors here
      }),
    },
  },
  plugins: [FadgramUI],
};
```

### Adding javascript helpers to your main javascript file (`main.js`) or (`app.js`).

```bash
import 'fadgram-ui/helpers/index.js';
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
import defaultTheme from "tailwindcss/defaultTheme";
import colors from 'tailwindcss/colors';
import { FadgramUI } from "fadgram-ui";
import { fgThemeColors } from './fadgram-ui/theme.js';

export default {
  content: [],
  theme: {
    extend: {
      ...
      colors: fgThemeColors({
        //change primary color to red,
        primary: colors.red,
      }),
    },
  },
  plugins: [FadgramUI],
};
```

## Contributing

We welcome contributions to Fadgram UI! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on our [GitHub repository](https://github.com/yourusername/fadgram-ui).

## License

Fadgram UI is open-source software licensed under the [MIT license](LICENSE).

## Acknowledgements

We would like to thank the Tailwind CSS team for their amazing work on the framework that makes plugins like Fadgram UI possible.
