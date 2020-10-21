//node CONF04_Newton.js po iterations tol
let init = new Date();
let po = Number(process.argv[2]);
const iterations = Number(process.argv[3]);
const tol = Number(process.argv[4]) || 0.00001;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return Math.cos(x) - x;
}

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of the derivative
 */
function solveDerivative(x) {
  return -Math.sin(x) - 1;
}

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of the derivative
 */
function solveSecondDerivative(x) {
  return -Math.cos(x);
}

/**
 * Function to solve the determined ecuation
 * @param {Number} x value of P
 */
function solveP(x) {
  return Number(
    (solve(x) * solveDerivative(x)) /
      (Math.pow(solveDerivative(x), 2) - solve(x) * solveSecondDerivative(x))
  );
}

let poHistory = [];
for (let index = 0; index < iterations; index++) {
  po = solveP(po);
  poHistory.push(po);

  if (Math.abs(po - poHistory[poHistory.length - 2]) < tol) {
    console.log("");
    console.log("");
    console.log("Solution!");
    console.log("The result is: " + po);
    break;
  } else {
    console.log("Iteration: " + (index + 1));
    console.log(
      "Error: " + Math.abs(po - poHistory[poHistory.length - 2]) / po
    );
    console.log(po);
    console.log("------------------------------------------------");
  }
}

let end = new Date();
console.log("Time: " + (end - init));
