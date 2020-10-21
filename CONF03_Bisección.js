//node CONF03_Bisección.js a b aprox iterations p
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
const aprox = Number(process.argv[4]) || 0.0001; //TOl
const iterations = Number(process.argv[5]);
const pKnow = Number(process.argv[6]) || null;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return Number(Math.pow(x, 3) + 4 * Math.pow(x, 2) - 10);
}

/**
 * Function to solve the value of p
 * @param {Number} a value of a
 * @param {Number} b value of b
 */
function solveP(a, b) {
  return Number(a + (b - a) / 2);
}

/**
 * Function to find the error when the value of p is know
 * @param {Number} pn1 value of last p
 */
function findError(pn1) {
  return Number(Math.abs(pKnow - pn1) / Math.abs(pKnow));
}

/**
 * Function to find the error when the value of p is unknown
 * @param {Number} pn value of actual p
 * @param {Number} pn1
 */
function findErrorNotP(pn, pn1) {
  return Number(Math.abs(pn - pn1) / Math.abs(pn));
}

/**
 * Function to display the data table
 * @param {Number} i number of iteration
 * @param {Number} a value of a
 * @param {Number} b value of b
 * @param {Number} pn value of pn
 * @param {Number} px value of p(f)
 * @param {Number} fa value of f(a)
 * @param {Number} fb value of f(b)
 * @param {Number} pE value of error
 */
function showData(i, a, b, pn, px, fa, fb, pE) {
  console.log("iteration " + (i + 1));
  console.log(
    "aN: " +
      a +
      ", bN: " +
      b +
      ", pN: " +
      pn +
      ", f(pN): " +
      px +
      ", f(aN): " +
      fa +
      ", f(bN) " +
      fb +
      ", error: " +
      pE
  );
}

let pHistory = [];
let fa, fb, p, fp, pE;
for (let index = 0; index < iterations; index++) {
  fa = solve(a);
  fb = solve(b);
  p = solveP(a, b);
  pHistory.push(p);
  fp = solve(p);
  pE = findErrorNotP(p, pHistory[pHistory.length - 2]);

  if (fp == 0 || (b - a) / 2 < aprox) {
    console.log("");
    console.log("");
    console.log("Solution!");
    showData(index, a, b, p, fp, fa, fb, pE);
    break;
  } else {
    console.log((b - a) / 2);
    showData(index, a, b, p, fp, fa, fb, pE);
    console.log(
      "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
    );
    //check where the value is negative
    if (fp * fa < 0) {
      b = p;
    } else if (fp * fb < 0) {
      a = p;
    } else {
      console.log("");
      console.log("");
      showData(index, a, b, p, fp, fa, fb, pE);
      console.log("error finding solution! :C");
      break;
    }
  }
}
