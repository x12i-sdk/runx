# @x12i/runx-docs usage example

Runx docs knowledge SDK — install as a devDependency only. Catalog, use cases, and markdown packs for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/runx-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled runx documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/runx-docs)
- [Implementation monorepo](https://github.com/x12i/funcx)
- [Reviewed package source](https://github.com/x12i/funcx/tree/6b647cd57c0ea387878417eab32188efd8d051b5/runx-docs/packages/runx-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
