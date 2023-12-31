/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
	// Don't inject globals. Require them to be imported from `@jest/globals`
	injectGlobals: false,
	// Specify where the tests are
	rootDir: '../app',

	// Allow tests to be written in TypeScript using ESM syntax
	preset: 'ts-jest/presets/default-esm',
	// Allow Jest's module resolution to find TypeScript files when imported as `.js`
	resolver: 'ts-jest-resolver',
};

export default config;
