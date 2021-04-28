const {vulnerable,funcOne,funcTwo,funcThree,funcFour,funcFive,funcSix,funcSeven,funcEight,funcNine,funcTen} = require('../src/arithFunc');

test('funcOne', () => {
  expect(funcOne(1)).toBe(3);
});

test('funcTwo', () => {
  expect(funcTwo(2)).toBe(6);
});

test('funcThree', () => {
  expect(funcThree(2,5)).toBe(3);
});

test('funcFour', () => {
  expect(funcFour(1337)).toBe(1337);
  expect(funcFour(4141)).toBe(7331);
  expect(funcFour(1337)).not.toBe(7331);
  expect(funcFour(4141)).not.toBe(1337);
});

test('funcFive', () => {
  expect(funcFive(1,1,3)).toBe(4);
  expect(funcFive(1,2,3)).toBe(3);
  expect(funcFive(3,3,3)).toBe(6);
  expect(funcFive(3,3,2)).not.toBe(1);
});

test('funcSix', () => {
  expect(funcSix(3)).toBe(27);
  expect(funcSix(1)).toBe(1);
  expect(funcSix(-1)).toBe(-1);
  expect(funcSix(0)).not.toBe(1);
});

test('funcSeven', () => {
  expect(funcSeven(1,2)).toBe(0);
  expect(funcSeven(3,4)).toBe(0);
  expect(funcSeven("bad","format")).toBe(0);
  expect(funcSeven(null,null)).not.toBe(1);
});

test('funcEight', () => {
  expect(funcEight(1,2,3,4)).toBe(24);
  expect(funcEight(-1,2,-3,4)).toBe(24);
  expect(funcEight(100,200,1000,0)).toBe(0);
  expect(funcEight(100,1000,10000,0)).not.toBe(1000000);
});

test('funcNine', () => {
  expect(funcNine(3,4,6)).toBe(12);
  expect(funcNine(3,4,5)).not.toBe(12);
});

test('funcTen', () => {
  expect(funcTen(10)).toBe(10);
  expect(funcTen(null)).toBe(null);
  expect(funcTen("what")).toBe("what");
});

