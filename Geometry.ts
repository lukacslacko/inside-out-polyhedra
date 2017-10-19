class Geometry {
    private n : number;
    constructor(public geometry : any) { this.n = 0; }

    private asVector3(p : Point, sphere : number) : any {
        return new THREE.Vector3(p.getX(sphere), p.getY(sphere), p.getZ(sphere));
    }

    public triangle(a : Point, b : Point, c : Point, sphere : number) : void {
        this.geometry.vertices.push(this.asVector3(a, sphere), this.asVector3(b, sphere), this.asVector3(c, sphere));
        this.geometry.faces.push(new THREE.Face3(this.n, this.n+1, this.n+2));
        this.geometry.faces.push(new THREE.Face3(this.n, this.n+2, this.n+1));
        this.n += 3;
    }

    public quad(a : Point, b : Point, c : Point, d : Point, sphere : number) : void {
        this.triangle(a, b, c, sphere);
        this.triangle(a, c, d, sphere);
    }
}