Profile Card

A simple, responsive profile card built with plain HTML, CSS and JavaScript. This project was created as part of the HNG internship tasks.

## Features

- Clean, semantic HTML structure
- Responsive layout for small screens and desktop
- Lightweight, no build tools or dependencies

## Files

- `index.html` — main page containing the profile card markup
- `style.css` — styles and responsive rules
- `script.js` — small JavaScript used by the demo (if any)
- `public/` — static assets (images, icons) used by the page
- `__tests__/` — Jest tests added for basic DOM checks
- `package.json` — project manifest (test script + devDependencies)
- `README.md` — this file

## How to view locally

1. Clone this repository and open `index.html` in your browser. The project has no build step or external dependencies.

2. (Optional) To run automated tests locally you'll need Node.js and npm installed. From the project root run:

```bash
npm install
npm test
```

The test suite uses Jest with jsdom and Testing Library to perform lightweight DOM assertions against `index.html`.

## Tests added

- `__tests__/profile.test.js` — basic checks that key elements (profile card, name, avatar, lists, social links) are present using `data-testid` attributes in `index.html`.
- Dev dependencies added in `package.json`: `jest`, `jest-environment-jsdom`, `jsdom`, `@testing-library/dom`, and `@testing-library/jest-dom`.

## Notes

- This project intentionally avoids frameworks to stay small and easy to read.
- If you add images, place them under `public/` and reference them from `index.html`.

## Author

Created by Daniel Katoto for the HNG internship.

## License

MIT