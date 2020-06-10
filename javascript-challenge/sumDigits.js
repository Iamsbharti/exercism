export function addDigits(num) {
  let sum = 0;

  while (num != 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}
//console.log(addDigits(12));
