var Mesh = /** @class */ (function () {
    function Mesh(material) {
        this.material = material;
        this.mesh = null;
    }
    Mesh.prototype.hide = function () {
        if (this.mesh != null) {
            scene.remove(this.mesh);
            this.mesh.geometry.dispose();
        }
    };
    Mesh.prototype.build = function (geometry) {
        geometry.geometry.computeFaceNormals();
        this.mesh = new THREE.Mesh(geometry.geometry, this.material);
        scene.add(this.mesh);
    };
    Mesh.prototype.changeMaterial = function (m) {
        this.mesh.material = m;
        this.material.dispose();
        this.material = m;
    };
    return Mesh;
}());
//# sourceMappingURL=Mesh.js.map