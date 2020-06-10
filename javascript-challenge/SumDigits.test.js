import { addDigits } from "./sumDigits";
import { isMainThread } from "worker_threads";
/**
 * Test Suite
 */

describe("sun digits()", () => {
  it("adds digits", () => {
    const num = 123;
    const result = addDigits(num);
    expect(result).toEqual(6);
  });
});
