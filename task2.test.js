const reverseString = require('./task2');

test('reverses a string correctly', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
