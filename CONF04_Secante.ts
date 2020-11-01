export { };

class CONF04_Secante {
    private p0: number;
    private p1: number;
    private tol: number;
    private iterations: number;
    private pHistory: Array<number>;

    constructor(p0: number, p1: number, tol: number, iterations: number) {
        this.p0 = p0;
        this.p1 = p1;
        this.tol = tol;
        this.iterations = iterations;
        this.pHistory = [];
    }

    private solve(x: number): number {
        return Number(Math.cos(x) - x);
    }

    private solveP(p0: number, p1: number, q0: number, q1: number): number {
        return p1 - (q1 * (p1 - p0) / (q1 - q0));
    }

    public execute(): void {
        let q0: number, q1: number, index: number, p: number;

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
            } else {
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

const exercise: CONF04_Secante = new CONF04_Secante(0.5, Math.PI / 4, 0.0001, 50);
exercise.execute(); //funciona y testeado