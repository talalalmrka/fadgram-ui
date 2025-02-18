# Fadgram UI

Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.

## Installation

To install Fadgram UI, you need to have Tailwind CSS already set up in your project. If you haven't set up Tailwind CSS yet, follow the [official installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind CSS is set up, you can install Fadgram UI via npm:

```bash
npm install fadgram-ui
```

## Usage

To use Fadgram UI in your project, you need to include it in your Tailwind CSS configuration file (`tailwind.config.js`):

```javascript
module.exports = {
  // other configurations...
  plugins: [
    require("fadgram-ui"),
    // other plugins...
  ],
};
```

After adding the plugin, you can start using the custom utility classes provided by Fadgram UI in your HTML:

```html
<div class="fadgram-card">
  <h1 class="fadgram-title">Welcome to Fadgram UI</h1>
  <p class="fadgram-text">This is a custom utility class from Fadgram UI.</p>
</div>
```

## Customization

Fadgram UI is designed to be customizable. You can override the default styles by extending the Tailwind CSS configuration. For example:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        "fadgram-primary": "#1DA1F2",
        "fadgram-secondary": "#14171A",
      },
    },
  },
  plugins: [require("fadgram-ui")],
};
```

## Contributing

We welcome contributions to Fadgram UI! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on our [GitHub repository](https://github.com/yourusername/fadgram-ui).

## License

Fadgram UI is open-source software licensed under the [MIT license](LICENSE).

## Acknowledgements

We would like to thank the Tailwind CSS team for their amazing work on the framework that makes plugins like Fadgram UI possible.
