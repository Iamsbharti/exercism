function likes(names) {
  // TODO
  let returnLike = " likes this";
  let finalStmt = "";
  if (names.length === 0) {
    return "no one" + returnLike;
  } else {
    //let newMap = names.map((nm, index) => `${nm}`);
    switch (names.length) {
      case 1:
        return (finalStmt = names.join().concat(returnLike));
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
          .replace(/,/, "");
      default:
        return names
          .map((m, index) =>
            index <= 1
              ? finalStmt.concat(`,${m}`)
              : finalStmt.concat(` and ${names.length - index} others`)
          )
          .join("")
          .concat(returnLike)
          .replace(/,/, "");
    }
  }
}
console.log(likes([]));
console.log(likes(["peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

/*  Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']) 'Alex, Jacob and 2 others like this');
*/
