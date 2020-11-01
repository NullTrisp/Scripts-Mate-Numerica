export { };

class CONF03_Bisección {
    private a: number;
    private b: number;
    private tol: number;
    private iterations: number;
    private pHistory: Array<number>;

    constructor(a: number, b: number, tol: number, it: number) {
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
    private setA(a: number): void {
        this.a = a;
    }

    /**
     * 
     * @param b 
     */
    private setB(b: number): void {
        this.b = b;
    }

    /**
     * 
     * @param x 
     */
    private solve(x: number): number {
        return Math.pow(x, 3) + (4 * Math.pow(x, 2)) - 10;
    }

    /**
     * 
     * @param a 
     * @param b 
     */
    private solveP(a: number, b: number): number {
        return a + (b - a) / 2;
    }

    private showData(i: number, a: number, b: number, pn: number, px: number, fa: number, fb: number): String {
        console.log("iteration " + (i + 1));
        return "aN: " + a + ", bN: " + b + ", pN: " + pn + ", f(pN): " + px + ", f(aN): " + fa + ", f(bN) " + fb;
    }

    /**
     * execute
     */
    public execute(): void {
        let index: number, fa: number, fb: number, p: number, fp: number;
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
            } else {
                console.log(this.showData(index, this.a, this.b, p, fp, fa, fb));
                console.log(
                    "------------------------------------------------------------------------------------------------------------------------------------------------------"
                );
                //check where the value is negative
                if (fp * fa < 0) {
                    this.setB(p);
                } else if (fp * fb < 0) {
                    this.setA(p);
                } else {
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

const exercise: CONF03_Bisección = new CONF03_Bisección(1, 2, 0.0001, 40);
exercise.execute(); //funciona y testeado
//TODO preguntar por error absoluto o algoritmico