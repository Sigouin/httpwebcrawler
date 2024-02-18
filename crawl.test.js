const { test, expect } = require("@jest/globals");
const { normalizeURL } = require("./crawl.js");

test("normalizeURL strip protocol", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});