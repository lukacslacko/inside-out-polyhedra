var Polyhedron = /** @class */ (function () {
    function Polyhedron(faces) {
        this.faces = faces;
    }
    Polyhedron.prototype.render = function (scene, sphere, cut) {
        for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
            var face = _a[_i];
            face.render(scene, sphere, cut);
        }
    };
    Polyhedron.prototype.hide = function () {
        for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
            var face = _a[_i];
            face.hide();
        }
    };
    Polyhedron.prototype.setWhite = function (white) {
        for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
            var face = _a[_i];
            face.setWhite(white);
        }
    };
    return Polyhedron;
}());
//# sourceMappingURL=Polyhedron.js.map