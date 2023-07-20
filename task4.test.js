const capitalize = require('./task4');

test('capitalize the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('javascript')).toBe('Javascript');
});
