var Tetrahedron1 = /** @class */ (function () {
    function Tetrahedron1() {
        var A = new Point(-1, -1, -1);
        var B = new Point(1, 1, -1);
        var C = new Point(1, -1, 1);
        var D = new Point(-1, 1, 1);
        this.faces = [
            Face.face(A, D, D, B),
            Face.face(D, B, B, C),
            Face.face(B, C, C, A),
            Face.face(C, A, A, D)
        ];
    }
    Tetrahedron1.prototype.render = function (scene, sphere, cut) {
        for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
            var face = _a[_i];
            face.render(scene, sphere, cut);
        }
    };
    Tetrahedron1.prototype.hide = function () {
        for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
            var face = _a[_i];
            face.hide();
        }
    };
    return Tetrahedron1;
}());
//# sourceMappingURL=Tetrahedron1.js.map