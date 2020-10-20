let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
const aprox = Number(process.argv[4]) || 0.0000000001;
let po = (a + b) / 2;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return /*Math.cos(x);*/ Math.pow(10 / (4 + x), 0.5);
}

let i = 0;
//p history
let po1 = [];
while (i < 60) {
  po = solve(po) || null;
  po1.push(po);
  if (po === null) {
    console.log("Error! :c ");
    break;
  } else if (Math.abs(po - po1[po1.length - 2]) < aprox) {
    console.log("The aproximated result is: " + po);
    break;
  } else {
    console.log(
      "Iteration: " +
        (i + 1) +
        ": " +
        po +
        ", Error: " +
        Math.abs(po - po1[po1.length - 2])
    );
    console.log("");
  }
  i++;
}
