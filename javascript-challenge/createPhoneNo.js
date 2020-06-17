/**
 * Write a function that takes an array of 10 integers
 * (between 0 and 9) and returns a string in form of a phone number.
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
 * createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"
 */

import { join } from "path";

export function createPhoneNumber(numbers) {
  let code = "(";
  numbers
    .map((n, i) => {
      switch (i) {
        case 0:
          code = `${code}${n}`;
          break;
        case 1:
          code = `${code}${n}`;
          break;
        case 2:
          code = `${code}${n})`;
          break;
        case 3:
          code = `${code} ${n}`;
          break;
        case 4:
          code = `${code}${n}`;
          break;
        case 5:
          code = `${code}${n}`;
          break;
        case 6:
          code = `${code}-${n}`;
          break;
        case 7:
          code = `${code}${n}`;
          break;
        case 8:
          code = `${code}${n}`;
          break;
        case 9:
          code = `${code}${n}`;
          break;
      }
    })
    .join("");
  return code;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
