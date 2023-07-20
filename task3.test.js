const Calculator = require('./task3');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should return the correct sum of two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(-1, 5)).toBe(4);
    });
  });

  describe('subtract', () => {
    test('should return the correct difference between two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
      expect(calculator.subtract(0, 0)).toBe(0);
      expect(calculator.subtract(5, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should return the correct result of division', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(0, 5)).toBe(0);
      expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrowError('Hey!! Be careful with division by zero! Is not allowed.');
    });
  });

  describe('multiply', () => {
    test('should return the correct product of two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(0, 5)).toBe(0);
      expect(calculator.multiply(-2, 4)).toBe(-8);
    });
  });
});
