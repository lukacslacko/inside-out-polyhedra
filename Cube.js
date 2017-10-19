var Cube = /** @class */ (function () {
    function Cube() {
        var A = new Point(-1, -1, -1);
        var B = new Point(1, -1, -1);
        var C = new Point(1, 1, -1);
        var D = new Point(-1, 1, -1);
        var E = new Point(-1, -1, 1);
        var F = new Point(1, -1, 1);
        var G = new Point(1, 1, 1);
        var H = new Point(-1, 1, 1);
        this.faces = [
            Face.face(A, B, B, C),
            Face.face(C, B, B, F),
            Face.face(B, F, F, E),
            Face.face(E, F, F, G),
            Face.face(F, G, G, C),
            Face.face(G, C, C, D),
            Face.face(C, D, D, A),
            Face.face(A, D, D, H),
            Face.face(D, H, H, G),
            Face.face(G, H, H, E),
            Face.face(H, E, E, A),
            Face.face(E, A, A, B)
        ];
    }
    Cube.prototype.render = function (scene, sphere, cut) {
        for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
            var face = _a[_i];
            face.render(scene, sphere, cut);
        }
    };
    return Cube;
}());
//# sourceMappingURL=Cube.js.map