# shared-tokens

This repository provides a set of CSS design tokens (colors, spacing, radii, shadows, etc.) and theme definitions you can consume in web projects. A small demo app shows usage with React + TypeScript.

## Quick demo

From the repository root run:

```bash
cd demo
npm install
npm run dev
```

The demo imports the root `index.css` so you can see token usage locally.

---

## Beginner: How to use `@asafarim/shared-tokens`

Below are simple, copy-paste examples to get started quickly.

- Install the package (replace with `npm`/`pnpm` if you prefer):

```bash
npm install @asafarim/shared-tokens
```

- Import tokens in plain HTML/CSS

In your application's entry HTML or a global CSS file:

```html
<!-- in index.html -->
<link rel="stylesheet" href="node_modules/@asafarim/shared-tokens/index.css">
```

Now your app has CSS custom properties available. Use them like:

```css
.my-button {
	background: var(--color-primary);
	color: var(--color-white);
	padding: var(--space-3);
	border-radius: var(--radius-md);
	box-shadow: var(--shadow-sm);
}
```

- Use tokens in a React app

Import the package CSS in your root entry (e.g., `src/main.tsx`):

```ts
import 'node_modules/@asafarim/shared-tokens/index.css'
import '@asafarim/shared-tokens/index.css' // if bundler resolves node_modules automatically
```

Then reference tokens in your component styles or CSS modules as shown above.

- Light / Dark themes

The package includes theme overrides under `styles/themes/` which toggle tokens using a `data-theme` attribute on the `html` element.

Example to switch programmatically (JS):

```js
// set dark theme
document.documentElement.setAttribute('data-theme', 'dark')

// set light theme
document.documentElement.setAttribute('data-theme', 'light')
```
---

## Publishing

To publish this package to the public npm registry:

1. Make sure `package.json` has a proper `name` and `version`.
2. Ensure you are logged in: `npm login`.
3. From the repo root run:

```bash
npm publish --access public
```

If you prefer to test publishing to a scope or using a different registry, adjust `publishConfig` accordingly.
