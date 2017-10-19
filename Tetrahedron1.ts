class Tetrahedron1 {
    private faces : Face[];
    constructor() {
        var A = new Point(-1, -1, -1);
        var B = new Point(1, 1, -1);
        var C = new Point(1, -1, 1);
        var D = new Point(-1, 1, 1);
        this.faces = [
            Face.face(A,D,D,B),
            Face.face(D,B,B,C),
            Face.face(B,C,C,A),
            Face.face(C,A,A,D)
        ];
    }

    public render(scene : any, sphere : number, cut : number) : void {
        for (let face of this.faces) {
            face.render(scene, sphere, cut);
        }
    }

    public hide() : void {
        for (let face of this.faces) {
            face.hide();
        }
    }

}