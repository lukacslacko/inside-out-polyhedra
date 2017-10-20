var Face = /** @class */ (function () {
    function Face(left, right) {
        this.left = left;
        this.right = right;
        this.middle = new Mesh(new THREE.MeshLambertMaterial({ color: 0x0080ff }));
        this.other = new Mesh(new THREE.MeshLambertMaterial({ color: 0xfff000 }));
        this.edge = new Mesh(new THREE.MeshLambertMaterial({ color: 0x400000 }));
    }
    Face.face = function (a, b, c, d) {
        return new Face(new Segment(a, d), new Segment(b, c));
    };
    Face.prototype.corner = function (i, j) {
        return new Segment(this.left.interpolate(i), this.right.interpolate(i)).interpolate(j);
    };
    Face.prototype.hide = function () {
        this.middle.hide();
        this.other.hide();
        this.edge.hide();
    };
    Face.prototype.setWhite = function (white) {
        if (white) {
            this.middle.changeMaterial(new THREE.MeshLambertMaterial({ color: 0xbbbbbb }));
            this.other.changeMaterial(new THREE.MeshLambertMaterial({ color: 0xbfbfbf }));
        }
        else {
            this.middle.changeMaterial(new THREE.MeshLambertMaterial({ color: 0x0080ff }));
            this.other.changeMaterial(new THREE.MeshLambertMaterial({ color: 0xfff000 }));
        }
    };
    Face.prototype.render = function (scene, sphere, cut) {
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
                ((j < cut || j >= n - cut) ? edgeGeometry : (j % 3 == 1) ? middleGeometry : otherGeometry).quad(this.corner(x, y), this.corner(x + step, y), this.corner(x + step, y + step), this.corner(x, y + step), sphere);
            }
        }
        this.middle.build(middleGeometry);
        this.other.build(otherGeometry);
        this.edge.build(edgeGeometry);
    };
    return Face;
}());
//# sourceMappingURL=Face.js.map