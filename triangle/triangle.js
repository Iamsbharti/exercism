//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  sideA;
  sideB;
  sideC;
  constructor(a, b, c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    //console.log(this.sideA, this.sideB, this.sideC);
  }
  checkTriangleInequality() {
    let isValid = false;
    let s1 = this.sideA + this.sideB;
    let s2 = this.sideB + this.sideC;
    let s3 = this.sideA + this.sideC;
    isValid =
      s1 >= this.sideC && s2 >= this.sideA && s3 >= this.sideB ? true : false;
    //console.log(isValid);
    return isValid;
  }
  checkForZero() {
    let zeroSides = false;
    zeroSides =
      this.sideA !== 0 && this.sideB !== 0 && this.sideC !== 0 ? true : false;
    return zeroSides;
  }
  isEquilateral() {
    let result = this.checkForZero()
      ? this.sideA === this.sideB &&
        this.sideB === this.sideC &&
        this.sideA === this.sideC
        ? true
        : false
      : false;
    return result;
  }

  isIsosceles() {
    let result = false;
    //check triangle Inequality
    result = this.checkTriangleInequality()
      ? this.sideA === this.sideB ||
        this.sideB === this.sideC ||
        this.sideC === this.sideA
        ? true
        : false
      : false;

    return result;
  }

  isScalene() {
    let result = this.checkTriangleInequality()
      ? this.sideA !== this.sideB &&
        this.sideB !== this.sideC &&
        this.sideC !== this.sideA
        ? true
        : false
      : false;
    return result;
  }
}
/*console.log(new Triangle(1, 1, 1).isEquilateral());
console.log(new Triangle(7, 2, 1).isIsosceles());
console.log(new Triangle(0.5, 0.4, 0.6).isScalene());
*/
