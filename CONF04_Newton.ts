export { };
class CONF04_Newton {
  private po: number;
  private iterations: number;
  private tol: number;
  private poHistory: Array<number>;

  /**
   * Newton constructor
   * @param po first aproximation
   * @param it number of iterations
   * @param tol tolerance for answer
   */
  constructor(po: number, it: number, tol: number) {
    this.po = po;
    this.iterations = it;
    this.tol = tol || 0.0001;
    this.poHistory = [];
  }

  /**
   *Function to solve the determined ecuation (change this in every exercise)
   *@param x value of x
   */
  private solve(x: number): number {
    return (Math.cos(x) - x);
  }

  /**
   * Function to solve the determined ecuation (change this in every exercise)
   * @param x value of the derivative
   */
  private solveDerivative(x: number): number {
    return (-Math.sin(x) - 1);
  }

  /**
   * Function to solve the determined ecuation
   * @param x value of P
   */
  private solveP(x: number): number {
    return x - this.solve(x) / this.solveDerivative(x);
  }

  /**
   * Method to execute the exercise
   */
  public execute(): void {
    let index: number;

    for (index = 0; index < this.iterations; index++) {
      this.po = this.solveP(this.po);
      this.poHistory.push(this.po);

      if (Math.abs(this.po - this.poHistory[this.poHistory.length - 2]) < this.tol) {
        console.log("");
        console.log("");
        console.log("Solution!");
        console.log("Iteration: " + (index + 1));
        console.log("The result is: " + this.po);
        break;
      } else {
        console.log("Iteration: " + (index + 1));
        console.log(
          "Error: " + Math.abs(this.po - this.poHistory[this.poHistory.length - 2]) / this.po
        );
        console.log("Pn: " + this.po);
        console.log("------------------------------------------------");
      }
    }
  }
}

//node CONF04_Newton.js
const exercise: CONF04_Newton = new CONF04_Newton(0.7853981634, 30, 0.0001);
exercise.execute();
