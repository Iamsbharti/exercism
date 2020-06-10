import { addDigits } from "./sumDigits";
import { addDigitsByReduce } from "./sumDigits";
/**
 * Test Suite
 */

describe("sun digits()", () => {
  it("adds digits", () => {
    const num = 123;
    const result = addDigits(num);
    const resReduce = addDigitsByReduce(34);
    console.log("Result- add dig", result);
    expect(result).toEqual(6);
    console.log("reduce-- add dig1", resReduce);
    expect(resReduce).toEqual(7);
  });
});
