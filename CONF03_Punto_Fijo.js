//node CONF03_Punto_Fijo.js a b iterations aprox
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
const iterations = Number(process.argv[4]);
const aprox = Number(process.argv[5]) || 0.0001;
let po = (a + b) / 2;

/**
 * Function to solve the determined ecuation (change this in every exercise)
 * @param {Number} x value of x
 */
function solve(x) {
  return Math.pow(10 / (4 + x), 0.5);
}

let po1 = [];
for (let index = 0; index < iterations; index++) {
  po = solve(po); //p = g(p)
  po1.push(po);
  if (Math.abs(po - po1[po1.length - 2]) < aprox) {
    console.log("");
    console.log("");
    console.log("Solution!");
    console.log(
      "Iteration: " +
        (index + 1) +
        ": " +
        po +
        ", Error: " +
        Math.abs(po - po1[po1.length - 2])
    );
    break;
  } else {
    console.log(
      "Iteration: " +
        (index + 1) +
        ": " +
        po +
        ", Error: " +
        Math.abs(po - po1[po1.length - 2])
    );
    console.log(
      "-----------------------------------------------------------------------------------------------"
    );
  }
}
