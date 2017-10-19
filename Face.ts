class Face {
    constructor(private left : Segment, private right : Segment) {
        this.middleMaterial = new THREE.MeshLambertMaterial({color: 0x0080ff}); // new THREE.MeshNormalMaterial();
        this.otherMaterial = new THREE.MeshLambertMaterial({color: 0xfff000});        
        this.middleMesh = null;
        this.otherMesh = null;
    }
    
    private middleMaterial : any;
    private otherMaterial : any;
    private middleMesh : any;
    private otherMesh : any;

    public static face(a : Point, b : Point, c : Point, d : Point) {
        return new Face(new Segment(a, d), new Segment(c, b));
    }

    private corner(i : number, j : number) : Point {
        return new Segment(this.left.interpolate(i), this.right.interpolate(i)).interpolate(j);
    }

    private removeMesh(mesh : any) : void {
        if (mesh != null) {
            scene.remove(mesh);
            mesh.geometry.dispose();
        }
    }

    public hide() : void {
        this.removeMesh(this.middleMesh);
        this.removeMesh(this.otherMesh);
    }

    public render(scene : any, sphere : number, cut : number) : void {
        this.hide();
        var middleGeometry = new Geometry(new THREE.Geometry());
        var otherGeometry = new Geometry(new THREE.Geometry());
        var n = 21;
        var step = 1 / n;
        for (var i = 0; i < n; ++i) {
            for (var j = cut; j < n-cut; ++j) {
                var x = i / n;
                var y = j / n;

                ((j % 3 == 1) ? middleGeometry : otherGeometry).quad(
                    this.corner(x,y), this.corner(x+step, y),
                    this.corner(x+step, y+step), this.corner(x, y+step),
                    sphere);
            }
        }
        middleGeometry.geometry.computeFaceNormals();
        otherGeometry.geometry.computeFaceNormals();
        this.middleMesh = new THREE.Mesh(middleGeometry.geometry, this.middleMaterial);
        this.otherMesh = new THREE.Mesh(otherGeometry.geometry, this.otherMaterial);
        scene.add(this.middleMesh);
        scene.add(this.otherMesh);
    }
}
