class Polyhedron {
    constructor(private faces : Face[]) {}

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

    public setWhite(white : boolean) : void {
        for (let face of this.faces) {
            face.setWhite(white);
        }
    }

    public setTransparent(transparent : boolean) : void {
        for (let face of this.faces) {
            face.setTransparent(transparent);
        }
    }
}