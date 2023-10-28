import {
	describe,
	expect,
	test,
} from '@jest/globals';

import { sum } from './sum.js';

describe('sum', () => {
	test('adds two numbers', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
