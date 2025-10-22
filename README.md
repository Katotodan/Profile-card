Profile Card

A simple, responsive profile card and small site built with plain HTML, CSS and JavaScript. This project was created as part of the HNG internship tasks and is intentionally lightweight (no build toolchain required).

## Features

- Clean, semantic HTML structure
- Responsive layout for small screens and desktop
- Small test suite (Jest + Testing Library) for basic DOM checks

## Project structure (important files)

- `index.html` — main profile card page (root)
- `style.css` — global styles (if present at repo root)
- `script.js` — small JavaScript used by the demo (if present)
- `public/` — static assets (images, icons)
- `src/aboutme/about.html` — About page (styled by `src/aboutme/about.css`)
- `src/aboutme/about.css` — About page specific styles
- `__tests__/` — Jest tests (basic DOM assertions)
- `package.json` — project manifest (includes test script and devDependencies)
- `README.md` — this file

## How to view locally

1. Clone the repository.

2. Open pages directly in your browser (no build needed). Examples:

```bash
# open the main profile page
open index.html

# open the About page
open src/aboutme/about.html
```

On macOS `open` launches the default browser. Alternatively double-click the files in your file manager.

### Run tests (optional)

If you want to run the automated tests, install Node.js and npm, then from the project root run:

```bash
npm install
npm test
```

The test suite uses Jest + jsdom and Testing Library to run lightweight DOM assertions against `index.html`.

## About page and styles

The About page lives at `src/aboutme/about.html` and uses page-specific styles located at `src/aboutme/about.css`. Those styles provide a responsive, card-like layout and readable typography. If you want the About styles merged into the global `style.css`, I can prepare a consolidated stylesheet.

## Tests added

- `__tests__/profile.test.js` — Verifies presence of main profile elements using `data-testid` attributes in `index.html`.
- Dev dependencies in `package.json`: `jest`, `jest-environment-jsdom`, `jsdom`, `@testing-library/dom`, `@testing-library/jest-dom`.

## Contributing

Small contributions are welcome. Suggested workflow:

1. Fork the repo and create a feature branch
2. Make changes and run tests locally (`npm install && npm test`)
3. Open a pull request with a clear description of your change

If you'd like me to add a GitHub Actions workflow to run tests automatically on push/PR, I can add `.github/workflows/ci.yml`.

## Notes

- This project intentionally avoids JavaScript frameworks to stay small and easy to read. If you plan to expand it into an app, consider adding a build step and module bundler.
- Keep assets inside `public/` to avoid broken references.

## Author

Created by Daniel Katoto for the HNG internship.

## License

MIT