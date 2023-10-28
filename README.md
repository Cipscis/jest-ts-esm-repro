# jest-ts-esm-repro

## The Goal

I have been trying to set up a Jest test suite for a personal project which uses TypeScript, ESM module syntax, and Preact.

I would like to use `ts-jest` to provide Jest with support for TypeScript, rather than adding Babel to my existing build system.

## The Issue

I've run into errors when attempting to run tests in a JSDOM environment, while also importing modules from within my `node_modules` directory.

I have set up two test suites. One tests a very simple `sum` function that exists entirely locally. The other tests a minimal custom Preact hook, which is just an alias for the `useEffect` hook imported from `preact/hooks`.

This repo's `package.json` provides two different test scripts:

- `test-node` runs the test suite using `--env=node`
- `test-jsdom` runs the test suite using `--env=jsdom`

When running `test-node`, both tests pass.

However, when running `test-jsdom`, the simple test passes but the hook test fails:

> `SyntaxError: Cannot use import statement outside a module`
