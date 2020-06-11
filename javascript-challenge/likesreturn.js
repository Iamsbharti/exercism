function likes(names) {
  // TODO
  let returnLike = " like this";
  let finalStmt = "";
  if (names.length === 0) {
    return "no one" + " likes this";
  } else {
    //let newMap = names.map((nm, index) => `${nm}`);
    switch (names.length) {
      case 1:
        return (finalStmt = names.join("").concat(" likes this"));
      case 2:
        return (finalStmt = names.join(" and ").concat(returnLike));
      case 3:
        return names
          .map((m, index) =>
            index < 2
              ? finalStmt.concat(`, ${m}`)
              : finalStmt.concat(` and ${m}`)
          )
          .join("")
          .concat(returnLike)
          .replace(/,/, " ")
          .trim("");
      default:
        return names.reduce((pre, next, index) => {
          console.log(index, names.length);
          return pre
            .concat(
              index <= 1
                ? ` ,${next}`
                : index > 1 && ","
                ? ` and ${names.length - index} others${returnLike}`
                : ""
            )
            .replace(/,/, "")
            .trim("");
        });
    }
  }
}
console.log(likes([]));
console.log(likes(["peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "sb"]));

/*  Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']) 'Alex, Jacob and 2 others like this');
*/
