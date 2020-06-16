//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  //console.log(n);
  let stepCount = 0;
  let conditionMatch = false;
  const isEven = (num) => {
    let result = false;
    stepCount += 1;
    result = num % 2 === 0 ? true : false;
    return result;
  };
  let temp = n;
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  while (!conditionMatch) {
    if (temp === 1) {
      conditionMatch = true;
      return stepCount;
    } else {
      isEven(temp) ? (temp /= 2) : (temp = temp * 3 + 1);
    }
  }
};
//console.log(steps(12));
