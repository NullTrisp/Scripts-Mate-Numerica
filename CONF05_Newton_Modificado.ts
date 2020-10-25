export { };
class CONF05_Newton_Modificado {
    private po: number;
    private iterations: number;
    private tol: number;
    private poHistory: Array<number>;

    constructor(po: number, it: number, tol: number) {
        this.po = po;
        this.iterations = it;
        this.tol = tol || 0.0001;
        this.poHistory = [];
    }

    /**
     * Function to solve the determined ecuation (change this in every exercise)
     * @param x value of x
     */
    private solve(x: number): number {
        return Math.cos(x) - x;
    }

    /**
     * Function to solve the determined ecuation (change this in every exercise)
     * @param x value of the derivative
     */
    private solveDerivative(x: number): number {
        return -Math.sin(x) - 1;
    }

    /**
     * Function to solve the determined ecuation (change this in every exercise)
     * @param x value of the derivative
     */
    private solveSecondDerivative(x: number): number {
        return -Math.cos(x);
    }

    /**
     * Function to solve the determined ecuation
     * @param x value of P
     */
    private solveP(x: number) {
        return (this.solve(x) * this.solveDerivative(x)) / (Math.pow(this.solveDerivative(x), 2) - this.solve(x) * this.solveSecondDerivative(x));
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

const exercise: CONF05_Newton_Modificado = new CONF05_Newton_Modificado(1, 30, 0.0001);
exercise.execute();