class Mesh {
    constructor(private material : any) {
        this.mesh = null;
    }

    private mesh : any;

    public hide() : void {
        if (this.mesh != null) {
            scene.remove(this.mesh);
            this.mesh.geometry.dispose();
        }
    }

    public build(geometry : Geometry) : void {
        geometry.geometry.computeFaceNormals();
        this.mesh = new THREE.Mesh(geometry.geometry, this.material);
        scene.add(this.mesh);
    }

    public changeMaterial(m : any) : void {
        if (this.mesh != null) this.mesh.material = m;
        this.material.dispose();
        this.material = m;
    }
}