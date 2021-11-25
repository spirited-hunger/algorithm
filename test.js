const paveBox = require("./Queue/paveBox.js");

test("test1", () => {
  expect(paveBox([1])).toBe(1);
})

test("test2", () => {
  expect(paveBox([5, 1, 4, 6])).toBe(3);
})

test("test3", () => {
  expect(paveBox([95, 90, 99, 99, 80, 99])).toBe(4);
})