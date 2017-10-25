class Face {
    constructor(private left : Segment, private right : Segment) {
        this.middle = new Mesh(new THREE.MeshLambertMaterial({color: 0x0080ff}));
        this.other = new Mesh(new THREE.MeshLambertMaterial({color: 0xfff000}));
        this.edge = new Mesh(new THREE.MeshLambertMaterial({color: 0x400000}));
    }
    
    private middle : Mesh;
    private other : Mesh;
    private edge : Mesh; 

    public static face(a : Point, b : Point, c : Point, d : Point) {
        return new Face(new Segment(a, d), new Segment(b, c));
    }

    private corner(i : number, j : number) : Point {
        return new Segment(this.left.interpolate(i), this.right.interpolate(i)).interpolate(j);
    }

    public hide() : void {
        this.middle.hide();
        this.other.hide();
        this.edge.hide();
    }

    public setWhite(white : boolean) : void {
        if (white) {
            this.middle.changeMaterial(new THREE.MeshLambertMaterial({color: 0xbbbbbb}));
            this.other.changeMaterial(new THREE.MeshLambertMaterial({color: 0xbfbfbf}));    
        } else {
            this.middle.changeMaterial(new THREE.MeshLambertMaterial({color: 0x0080ff}));
            this.other.changeMaterial(new THREE.MeshLambertMaterial({color: 0xfff000}));    
        }
    }

    public setTransparent(transparent : boolean) : void {
        if (transparent) {
            this.edge.changeMaterial(new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0}));
        } else {
            this.edge.changeMaterial(new THREE.MeshLambertMaterial({color: 0x400000}));            
        }
    }

    public render(scene : any, sphere : number, cut : number) : void {
        this.hide();
        var middleGeometry = new Geometry(new THREE.Geometry());
        var otherGeometry = new Geometry(new THREE.Geometry());
        var edgeGeometry = new Geometry(new THREE.Geometry());
        var n = 21;
        var step = 1 / n;
        for (var i = 0; i < n; ++i) {
            for (var j = 0; j < n; ++j) {
                var x = i / n;
                var y = j / n;

                ((j < cut || j >= n-cut) ? edgeGeometry : (j % 3 == 1) ? middleGeometry : otherGeometry).quad(
                    this.corner(x,y), this.corner(x+step, y),
                    this.corner(x+step, y+step), this.corner(x, y+step),
                    sphere);
            }
        }
        this.middle.build(middleGeometry);
        this.other.build(otherGeometry);
        this.edge.build(edgeGeometry);
    }
}
