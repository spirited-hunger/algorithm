const paveBox = require("./Queue/paveBox.js");

test("test1", () => {
  expect(paveBox([1])).toBe(1);
})

test("test2", () => {
  expect(paveBox([5, 1, 4, 6])).toBe(3);
})

test("test3", () => {
  expect(paveBox([80, 30, 40, 55, 66, 21, 8, 25, 44, 77, 92])).toBe(10);
})

test("test4", () => {
  expect(paveBox([95, 90, 99, 99, 80, 99])).toBe(4);
})