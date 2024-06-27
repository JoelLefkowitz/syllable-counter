import { range } from "./arrays";

describe("range", () => {
  it("creates an array of 0 to n - 1", () => {
    expect(range(0)).toEqual([]);
    expect(range(1)).toEqual([0]);
    expect(range(2)).toEqual([0, 1]);
    expect(range(3)).toEqual([0, 1, 2]);
  });
});
