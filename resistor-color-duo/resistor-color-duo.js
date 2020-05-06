//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
export const decodedValue = (subArr = [...arr]) => {
  let mapColorCode = [];
  if (subArr.length > 2) {
    subArr.pop();
  }
  subArr.forEach((ele) =>
    COLORS.forEach((color, index) => {
      // console.log(`${color === ele} at ${index}`);
      color === ele ? mapColorCode.push(index) : "";
    })
  );

  let retValue = mapColorCode.join("");
  return parseInt(retValue.substring(0, 2));
};
