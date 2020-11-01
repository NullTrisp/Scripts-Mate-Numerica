"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CONF04_Secante {
    constructor(p0, p1, tol, iterations) {
        this.p0 = p0;
        this.p1 = p1;
        this.tol = tol;
        this.iterations = iterations;
        this.pHistory = [];
    }
    solve(x) {
        return Number(Math.cos(x) - x);
    }
    solveP(p0, p1, q0, q1) {
        return p1 - (q1 * (p1 - p0) / (q1 - q0));
    }
    execute() {
        let q0, q1, index, p;
        q0 = this.solve(this.p0);
        console.log("Iteration: 1");
        console.log("Pn: " + this.p0);
        console.log("");
        q1 = this.solve(this.p1);
        console.log("Iteration: 2");
        console.log("Pn: " + this.p1);
        console.log("");
        this.pHistory.push(this.p0, this.p1);
        for (index = 2; index < this.iterations; index++) {
            p = this.solveP(this.p0, this.p1, q0, q1);
            this.pHistory.push(p);
            if (Math.abs(p - this.pHistory[this.pHistory.length - 2]) < this.tol) {
                console.log("");
                console.log("");
                console.log("");
                console.log("Iteration: " + (index + 1));
                console.log("Solution!");
                console.log("Pn: " + this.p0);
                break;
            }
            else {
                console.log("");
                console.log("Iteration: " + (index + 1));
                console.log("Pn: " + p);
                this.p0 = this.p1;
                q0 = q1;
                this.p1 = p;
                q1 = this.solve(p);
            }
        }
    }
}
const exercise = new CONF04_Secante(0.5, Math.PI / 4, 0.0001, 50);
exercise.execute(); //funciona y testeado
