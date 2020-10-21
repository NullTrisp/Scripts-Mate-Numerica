//node CONF04_Secante.js a b iterations tol
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
const iterations = Number(process.argv[4]);
const tol = Number(process.argv[5]) || 0.00001;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return Number(Math.cos(x) - x);
}

/**
 * Function to solve the determined ecuation
 * @param {Number} x value of P
 */
function solveP(x, y) {
  return Number(x - (solve(x) * (x - y)) / (solve(x) - solve(y)));
}

let pnHistory = [],
  po,
  q0,
  q1;
po = solveP(b, a);
console.log("Iteration: " + 1);
console.log(po);
pnHistory.push(a, b, po);
po = solveP(po, b);
console.log("Iteration: " + 2);
console.log(po);
pnHistory.push(po);
for (let index = 0; index < iterations; index++) {
  po = solveP(pnHistory[pnHistory.length - 1], pnHistory[pnHistory.length - 2]);
  pnHistory.push(po);
  if (Math.abs(po - pnHistory[pnHistory.length - 2]) < tol) {
    console.log("");
    console.log("Iteration: " + (index + 3));
    console.log("Solution!");
    console.log(po);
    break;
  } else {
    console.log("");
    console.log("Iteration: " + (index + 3));
    console.log(po);
  }
}
