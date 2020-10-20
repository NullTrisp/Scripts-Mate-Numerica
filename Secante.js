let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
const tol = Number(process.argv[4]) || null;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return /*Math.cos(x);*/ Math.pow(10 / (4 + x), 0.5);
}

/**
 * Function to solve the determined ecuation
 * @param {Number} x value of P
 */
function solveP(x, y) {
  return x - (solve(x) * (x - y)) / (solve(x) - solve(y));
}

let i = 0;
let pnh = [];
let q0 = solve(a);
let q1 = solve(b);
while (i < 40) {
    po = solveP(po);
}
