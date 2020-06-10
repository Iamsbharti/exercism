export function sumAllPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        console.log(i, "is prime");
        sum += j;
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return sum;
}
console.log(sumAllPrimes(10));
