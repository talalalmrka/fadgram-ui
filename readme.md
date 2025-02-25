![FadgramUI](https://github.com/user-attachments/assets/f5eb0b42-ad31-46de-9062-a8e2bc6100a3)

# Fadgram UI

Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.

## Documentation

For detailed documentation and examples, please visit the [Fadgram UI Documentation](https://talalalmrka.github.io/fadgram-ui-docs/).

## Components

- Typography
- Background color
- Buttons
- Dropdowns
- Forms
- Cards
- Icons
- Navbar
- Badges
- Progress
- Drawer (offcanvas)
- Alerts
- Tables
- Shadows
- Tooltips
- Modal

## Installation

To install Fadgram UI, you need to have Tailwind CSS already set up in your project. If you haven't set up Tailwind CSS yet, follow the [official installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind CSS is set up, you can install Fadgram UI via npm:

```bash
npm i fadgram-ui@latest
```

## Usage

### Setup (`tailwind.config.js`).

To use Fadgram UI in your project, you need to include it in your Tailwind CSS configuration file (`tailwind.config.js`):

```javascript
import { FadgramUI } from "fadgram-ui";
import { FadgramTheme } from "fadgram-ui/theme.js";

export default {
  content: [],
  theme: {
    extend: FadgramTheme({
      //add custom theme here
    }),
  },
  plugins: [FadgramUI],
};
```

### Adding javascript helpers to your main javascript file (`main.js`) or (`app.js`).

```bash
import { initFadgramUI } from "fadgram-ui/helpers";
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
import { FadgramUI } from "fadgram-ui";
import { FadgramTheme } from "fadgram-ui/theme.js";

export default {
  content: [],
  theme: {
    extend: FadgramTheme({
      //add custom theme here
      colors: {
        //customize primary color example
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
      },
    }),
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
