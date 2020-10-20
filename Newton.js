let init = new Date();
let po = Number(process.argv[2]);
const tol = Number(process.argv[3]) || 0.0001;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return Math.pow(x, 3) - (2 * Math.pow(x, 2) - 5);
}

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of the derivative
 */
function solveDerivative(x) {
  return 3 * Math.pow(x, 2) - (4 * x);
}

/**
 * Function to solve the determined ecuation
 * @param {Number} x value of P
 */
function solveP(x) {
  return x - solve(x) / solveDerivative(x);
}

let i = 0;
let poh = [];
console.log(po);
while (i < 10) {
  po = solveP(po);
  poh.push(po);
  if (Math.abs(po - poh[poh.length - 2]) < tol) {
    console.log("The result is: " + po);
    break;
  } else {
    console.log(po);
  }
  i++;
}
let end = new Date();

console.log("Time: " + (end - init));
