export function firstDuplicate(inputs) {
  let firstDuplicate = {};
  for (let i of inputs) {
    if (firstDuplicate.hasOwnProperty(i)) {
      console.log(firstDuplicate);
      return i;
    }
    firstDuplicate[i] = i;
  }
  return -1;
}
//const nums = [2, 1, 3, 2, 3, 7];
//console.log(firstDuplicate(nums));
