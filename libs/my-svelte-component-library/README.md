This is a sample Svelte component library initially created from the Svelte [component-template](https://github.com/sveltejs/component-template).

A few things have been added:

- [Storybook](): For component development fun! Seriously though, makes test-driven development natural.
- Jest/Testing-library: In combination with above === win!!!

[**Demo Site**](https://svelte-monorepo-starter.netlify.com/blog/markdown-test) - Hosted by Netlify and deployed via [Semaphore CI](https://semaphoreci.com)

---

# My Svelte Component Library

A base for building shareable Svelte components.

    .
    ├── .storybook
    ├── src
    │   └── components
    │       ├── __tests__
    │       ├── stories
    │       └── ...components
    ├── packag.json
    └── ...

1.  **.storybook**: configuration for Storybook and where addons, knobs, etc. are registered.
2.  **`src/components`**: Main component directory
3.  **`.../__tests__`**: Jest/Testing-library tests for components
4.  **`.../stories`**: Storybook stories

## Setting up

As this sub-repo is part of a monorepo, the initial `yarn` and `lerna bootstrap`-ing will have installed and linked all necessary dependencies.

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
