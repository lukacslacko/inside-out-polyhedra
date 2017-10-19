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
}