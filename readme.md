# Fadgram UI

Fadgram UI is a Tailwind CSS plugin that provides a set of custom utility classes to enhance your web development experience. This plugin is designed to work seamlessly with Tailwind CSS, allowing you to quickly and easily style your web applications.
![FadgramUI](https://github.com/user-attachments/assets/f5eb0b42-ad31-46de-9062-a8e2bc6100a3)

# Requirements

this plugin requires [Tailwindcss v4](https://tailwindcss.com/)
if your project uses [Tailwindcss v3](https://v3.tailwindcss.com/) you must install our plugin compatible with tailwindcss v3 [Fadgram UI 3 Documentation](https://talalalmrka.github.io/fadgram-ui-docs-3/).

## Documentation

For components and detailed documentation and examples, please visit the [Fadgram UI 4 Documentation](https://talalalmrka.github.io/fadgram-ui-docs/).

## Installation

To install Fadgram UI, you need to have Tailwind CSS already set up in your project. If you haven't set up Tailwind CSS yet, follow the [official installation guide](https://tailwindcss.com/docs/installation).

Once Tailwind CSS is set up, you can install Fadgram UI via npm:

```bash
npm i fadgram-ui
```

## Usage

### import in your main style file like (`app.css`).

To use Fadgram UI in your project, you need to import it in your main style file like: (main.css or app.css) or any main style file after import tailwindcss.

```css
@import "tailwindcss";
@import "fadgram-ui";
```

### Javascript helpers.

Add javascript helpers to your main javascript file (main.js) or (app.js).
javascript helpers required by some components like (dropdown, modal, tooltip, offcanvas, tabs, toast ...etc);

```javascript
import "fadgram-ui/helpers";
```

### Javascript modules.

Initialize all components helpers:

```javascript
import { initFadgramUI } from "fadgram-ui/helpers";
document.addEventListener("DOMContentLoaded", () => {
  initFadgramUI();
});
```

## Contributing

We welcome contributions to Fadgram UI! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on our [GitHub repository](https://github.com/talalalmrka/fadgram-ui).

## License

Fadgram UI is open-source software licensed under the [MIT license](https://mit-license.org/).

## Acknowledgements

We would like to thank the Tailwind CSS team for their amazing work on the framework that makes plugins like Fadgram UI possible.
