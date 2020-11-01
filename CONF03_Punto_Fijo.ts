export { };

class CONF03_Punto_Fijo {
    private initP: number;
    private tol: number;
    private iterations: number;
    private pHistory: Array<number>;


    constructor(initP: number, tol: number, iterations: number) {
        this.initP = initP;
        this.tol = tol;
        this.iterations = iterations;
        this.pHistory = [];
    }

    /**
     * 
     * @param x 
     */
    private solve(x: number): number {
        return Math.pow(10 / (4 + x), 0.5);
    }

    private getError(pn, pn_1): number {
        return Math.abs(pn - pn_1);
    }

    /**
     * execute
     */
    public execute(): void {
        let index: number;

        for (index = 0; index < this.iterations; index++) {
            this.initP = this.solve(this.initP);
            this.pHistory.push(this.initP);
            if (this.getError(this.initP, this.pHistory[this.pHistory.length - 2]) < this.tol) {
                console.log("");
                console.log("");
                console.log("Solution!");
                console.log("Pn: " + this.initP);
                break;
            } else {
                console.log("Iteration: " + (index + 1));
                console.log("Pn: " + this.initP);
            }
        }
    }
}

const exercise: CONF03_Punto_Fijo = new CONF03_Punto_Fijo(1.5, 0.0001, 60);
exercise.execute(); //funciona y testeado