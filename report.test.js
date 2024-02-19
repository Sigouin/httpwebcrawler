const { test, expect } = require("@jest/globals");
const { sortPages } = require("./report.js");

test("sortPages", () => {
  const input = {
    "https://wageslane.dev/path": 1,
    "https://wageslane.dev": 3,
  };

  const actual = sortPages(input);
  const expected = [
    ["https://wageslane.dev", 3],
    ["https://wageslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
