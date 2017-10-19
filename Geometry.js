var Geometry = /** @class */ (function () {
    function Geometry(geometry) {
        this.geometry = geometry;
        this.n = 0;
    }
    Geometry.prototype.asVector3 = function (p, sphere) {
        return new THREE.Vector3(p.getX(sphere), p.getY(sphere), p.getZ(sphere));
    };
    Geometry.prototype.triangle = function (a, b, c, sphere) {
        this.geometry.vertices.push(this.asVector3(a, sphere), this.asVector3(b, sphere), this.asVector3(c, sphere));
        this.geometry.faces.push(new THREE.Face3(this.n, this.n + 1, this.n + 2));
        this.geometry.faces.push(new THREE.Face3(this.n, this.n + 2, this.n + 1));
        this.n += 3;
    };
    Geometry.prototype.quad = function (a, b, c, d, sphere) {
        this.triangle(a, b, c, sphere);
        this.triangle(a, c, d, sphere);
    };
    return Geometry;
}());
//# sourceMappingURL=Geometry.js.map