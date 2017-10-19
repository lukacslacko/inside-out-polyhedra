class Point {
    private r : number;
    constructor(private x : number, private y : number, private z : number) {
        this.r = Math.sqrt(x*x+y*y+z*z);
    }
    public getX(sphere : number) : number {
        return this.x * (sphere*Math.sqrt(3) + (1-sphere)*this.r)/this.r;
    }
    public getY(sphere : number) : number {
        return this.y * (sphere*Math.sqrt(3) + (1-sphere)*this.r)/this.r;
    }
    public getZ(sphere : number) : number {
        return this.z * (sphere*Math.sqrt(3) + (1-sphere)*this.r)/this.r;
    }
}
