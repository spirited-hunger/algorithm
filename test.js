const paveBox = require("./Queue/paveBox.js");
const permutation = require("./Exhaustive Search/permutation.js");

describe("----- PaveBox Problem -----", () => {
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
});

describe("----- Permuation Problems -----", () => {
  test("p1", () => {
    expect(permutation.basicPermuation([1, 2, 3, 4], 3)).toBe(24);
  })
});
