import { type } from "os";

export function addBorder(array) {
  //  write code here.
  //["*****", "*abc*", "*ded*", "*****"]
  let border = "*****";
  // const strings = ["abc", "ded"];

  let newArray = array.map((item) => "*" + item.concat("*"));
  newArray.push(border);
  newArray.unshift(border);
  return newArray;
}
//console.log(addBorder());
