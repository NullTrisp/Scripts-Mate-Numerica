"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CONF03_Bisección {
    constructor(a, b, tol, it) {
        this.a = a;
        this.b = b;
        this.tol = tol || 0.0001;
        this.iterations = it;
        this.pHistory = [];
    }
    /**
     *
     * @param a
     */
    setA(a) {
        this.a = a;
    }
    /**
     *
     * @param b
     */
    setB(b) {
        this.b = b;
    }
    /**
     *
     * @param x
     */
    solve(x) {
        return Math.pow(x, 3) + (4 * Math.pow(x, 2)) - 10;
    }
    /**
     *
     * @param a
     * @param b
     */
    solveP(a, b) {
        return a + (b - a) / 2;
    }
    showData(i, a, b, pn, px, fa, fb) {
        console.log("iteration " + (i + 1));
        return "aN: " + a + ", bN: " + b + ", pN: " + pn + ", f(pN): " + px + ", f(aN): " + fa + ", f(bN) " + fb;
    }
    /**
     * execute
     */
    execute() {
        let index, fa, fb, p, fp;
        for (index = 0; index < this.iterations; index++) {
            fa = this.solve(this.a);
            fb = this.solve(this.b);
            p = this.solveP(this.a, this.b);
            this.pHistory.push(p);
            fp = this.solve(p);
            if (fp == 0 || (this.b - this.a) / 2 < this.tol) {
                console.log("");
                console.log("");
                console.log("Solution!");
                console.log(this.showData(index, this.a, this.b, p, fp, fa, fb));
                break;
            }
            else {
                console.log(this.showData(index, this.a, this.b, p, fp, fa, fb));
                console.log("------------------------------------------------------------------------------------------------------------------------------------------------------");
                //check where the value is negative
                if (fp * fa < 0) {
                    this.setB(p);
                }
                else if (fp * fb < 0) {
                    this.setA(p);
                }
                else {
                    console.log("");
                    console.log("");
                    console.log(this.showData(index, this.a, this.b, p, fp, fa, fb));
                    console.log("error finding solution! :C");
                    break;
                }
            }
        }
    }
}
const exercise = new CONF03_Bisección(1, 2, 0.0001, 40);
exercise.execute();
