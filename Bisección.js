let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
const aprox = Number(process.argv[4]) || 0.0001; //TOl
const p = Number(process.argv[5]) || null;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return Math.pow(x, 3) + 4 * Math.pow(x, 2) - 10;
}

/**
 * Function to solve the value of p
 * @param {Number} a value of a
 * @param {Number} b value of b
 */
function solveP(a, b) {
  return a + (b - a) / 2;
}

/**
 * Function to find the error when the value of p is know
 * @param {Number} pn1 value of last p
 */
function findError(pn1) {
  return Math.abs(p - pn1) / Math.abs(p);
}

/**
 * Function to find the error when the value of p is unknown
 * @param {Number} pn value of actual p
 * @param {Number} pn1
 */
function findErrorNotP(pn, pn1) {
  return Math.abs(pn - pn1) / Math.abs(pn);
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

//determine if p is known
if (p != null) {
  let i = 0;
  let fa,
    fb,
    pn,
    px,
    pE = 1;
  //p history
  let pn1 = [];
  while (pE > aprox) {
    fa = solve(a);
    fb = solve(b);
    pn = solveP(a, b);
    pn1.push(pn);
    px = solve(pn);
    pE = findError(pn, pn1[pn1.length - 2]) || 1; //pn1[pn1.length - 2] is pn - 1 in a nutshell
    showData(i, a, b, pn, px, fa, fb, pE);

    //check where the value is negative
    if (px * fa < 0) {
      b = pn;
    } else if (px * fb < 0) {
      a = pn;
    } else {
      console.log("error finding solution");
      break;
    }
    console.log(
      "-----------------------------------------------------------------------------------------------------"
    );
    console.log("");
    i++;
  }
} else {
  let i = 0;
  let fa,
    fb,
    pn,
    px,
    pE = 1;

  //p history
  let pn1 = [];
  while (pE > aprox) {
    fa = solve(a);
    fb = solve(b);
    pn = solveP(a, b);
    pn1.push(pn);
    px = solve(pn);
    pE = findErrorNotP(pn, pn1[pn1.length - 2]) || 1; //pn1[pn1.length - 2] is pn - 1 in a nutshell
    showData(i, a, b, pn, px, fa, fb, pE);

    //check where the value is negative
    if (px * fa < 0) {
      b = pn;
    } else if (px * fb < 0) {
      a = pn;
    } else {
      console.log("error finding solution");
      break;
    }
    console.log(
      "-----------------------------------------------------------------------------------------------------"
    );
    console.log("");
    i++;
  }
}
