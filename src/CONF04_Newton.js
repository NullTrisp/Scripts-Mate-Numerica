"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CONF04_Newton {
    /**
     * Newton constructor
     * @param po first aproximation
     * @param it number of iterations
     * @param tol tolerance for answer
     */
    constructor(po, it, tol) {
        this.po = po;
        this.iterations = it;
        this.tol = tol || 0.0001;
        this.poHistory = [];
    }
    /**
     *Function to solve the determined ecuation (change this in every exercise)
     *@param {number} x value of x
     */
    solve(x) {
        return (Math.cos(x) - x);
    }
    /**
     * Function to solve the determined ecuation (change this in every exercise)
     * @param {number} x value of the derivative
     */
    solveDerivative(x) {
        return (-Math.sin(x) - 1);
    }
    /**
     * Function to solve the determined ecuation
     * @param {number} x value of P
     */
    solveP(x) {
        return x - this.solve(x) / this.solveDerivative(x);
    }
    execute() {
        let index;
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
            }
            else {
                console.log("Iteration: " + (index + 1));
                console.log("Error: " + Math.abs(this.po - this.poHistory[this.poHistory.length - 2]) / this.po);
                console.log("Pn: " + this.po);
                console.log("------------------------------------------------");
            }
        }
    }
}
//node CONF04_Newton.js
const exercise = new CONF04_Newton(0.7853981634, 30, 0.0001);
exercise.execute();
