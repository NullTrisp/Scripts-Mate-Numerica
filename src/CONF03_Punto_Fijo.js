"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CONF03_Punto_Fijo {
    constructor(initP, tol, iterations) {
        this.initP = initP;
        this.tol = tol;
        this.iterations = iterations;
        this.pHistory = [];
    }
    /**
     *
     * @param x
     */
    solve(x) {
        return Math.pow(10 / (4 + x), 0.5);
    }
    getError(pn, pn_1) {
        return Math.abs(pn - pn_1);
    }
    /**
     * execute
     */
    execute() {
        let index;
        for (index = 0; index < this.iterations; index++) {
            this.initP = this.solve(this.initP);
            this.pHistory.push(this.initP);
            if (this.getError(this.initP, this.pHistory[this.pHistory.length - 2]) < this.tol) {
                console.log("");
                console.log("");
                console.log("Solution!");
                console.log("Pn: " + this.initP);
                break;
            }
            else {
                console.log("Iteration: " + (index + 1));
                console.log("Pn: " + this.initP);
            }
        }
    }
}
const exercise = new CONF03_Punto_Fijo(1.5, 0.0001, 60);
exercise.execute(); //funciona y testeado
