// task1.test.js
const stringLength = require('./task1');

test('returns correct length of string', () => {
  expect(stringLength('Hello')).toBe(5);
  expect(stringLength('1234567890')).toBe(10);
});

test('throws error for an empty string', () => {
  expect(() => stringLength('')).toThrowError('String must be at least 1 character long and not longer than 10 characters.');
});

test('throws error for a string longer than 10 characters', () => {
  expect(() => stringLength('ThisIsTooLong')).toThrowError('String must be at least 1 character long and not longer than 10 characters.');
});
