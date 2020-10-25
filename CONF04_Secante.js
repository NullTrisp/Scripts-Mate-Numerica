//node CONF04_Secante.js p0 p1 iterations tol
let p0 = Number(process.argv[2]);
let p1 = Number(process.argv[3]);
const iterations = Number(process.argv[4]);
const tol = Number(process.argv[5]) || 0.0001;

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
//*p0 and p1 solution
q0 = solve(p0);
console.log("Iteration: 1");
console.log("Pn: " + p0);
console.log("");

q1 = solveP(p1);
console.log("Iteration: 2");
console.log("Pn: " + p1);
console.log("");

pnHistory.push(p0, p1);

for (let index = 0; index < iterations; index++) {
  po = solveP(pnHistory[pnHistory.length - 1], pnHistory[pnHistory.length - 2]);
  pnHistory.push(po);

  if (Math.abs(po - pnHistory[pnHistory.length - 2]) < tol) {
    console.log("");
    console.log("");
    console.log("");
    console.log("Iteration: " + (index + 3));
    console.log("Solution!");
    console.log("Pn: " + po);
    break;
  } else {
    console.log("");
    console.log("Iteration: " + (index + 3));
    console.log("Pn: " + po);
  }
}
