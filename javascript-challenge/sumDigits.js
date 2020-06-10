export function addDigits(num) {
  let sum = 0;

  while (num != 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}
//console.log(addDigits(12));
export function addDigitsByReduce(num) {
  let num_array = num.toString().split("");
  return num_array.reduce((sum, value) => {
    return parseInt(sum) + parseInt(value);
  }, 0);
}
//console.log(addDigitsByReduce(23));
