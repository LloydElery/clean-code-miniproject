import { describe, expect, it } from '@jest/globals';
import Calculation from './index';

describe('Calcultaion Class', () => {
  let calculate: any;

  beforeEach(() => {
    calculate = new Calculation();
  });

  it('should add two numbers when operation is "+"', () => {
    const result = calculate.numbers(3, 2, '+');
    expect(result).toBe(5);
  });

  it('should subtract two numbers when operation is "-"', () => {
    const result = calculate.numbers(5, 3, '-');
    expect(result).toBe(2);
  });

  it('should multiply two numbers when operation is "*"', () => {
    const result = calculate.numbers(4, 3, '*');
    expect(result).toBe(12);
  });

  it('should divide two numbers when operation is "/"', () => {
    const result = calculate.numbers(10, 2, '/');
    expect(result).toBe(5);
  });

  it('should calculate the power when operation is "^"', () => {
    const result = calculate.numbers(2, 3, '^');
    expect(result).toBe(8);
  });

  it('should calculate the remainder when operation is "%"', () => {
    const result = calculate.numbers(10, 3, '%');
    expect(result).toBe(1);
  });

  it('should calculate the area of a circle when operation is "circle"', () => {
    const result = calculate.numbers(3, 0, 'circle');
    expect(result).toBeCloseTo(28.27); // Changed previous value `28.26` to `28.27` while using `3.14` instead of `Math.PI`
  });

  it('should return magic number 0 for undefined operations', () => {
    const result = calculate.numbers(5, 5, '?');
    expect(result).toBe(0);
  });

  it('should calculate the sum of all numbers up to 0', () => {
    const result = calculate.numbers(0, 0, 'sumLoop');
    expect(result).toBe(0);
  });

  it('should calculate the sum of all numbers up to 1', () => {
    const result = calculate.numbers(1, 0, 'sumLoop');
    expect(result).toBe(1); // 0 + 1 = 1
  });

  it('should calculate the sum of all numbers up to 5', () => {
    const result = calculate.numbers(5, 0, 'sumLoop');
    expect(result).toBe(15); // 0 + 1 + 2 + 3 + 4 + 5 = 15
  });

  it('should calculate the sum of all numbers up to 10', () => {
    const result = calculate.numbers(10, 0, 'sumLoop');
    expect(result).toBe(55); // 0 + 1 + 2 + ... + 10 = 55
  });

  it('should calculate the sum of all numbers up to 100', () => {
    const result = calculate.numbers(100, 0, 'sumLoop');
    expect(result).toBe(5050); // 0 + 1 + 2 + ... + 100 = 5050
  });
});
