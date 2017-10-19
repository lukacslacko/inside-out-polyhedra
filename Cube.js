function cubeFaces() {
    var A = new Point(-1, -1, -1);
    var B = new Point(1, -1, -1);
    var C = new Point(1, 1, -1);
    var D = new Point(-1, 1, -1);
    var E = new Point(-1, -1, 1);
    var F = new Point(1, -1, 1);
    var G = new Point(1, 1, 1);
    var H = new Point(-1, 1, 1);
    return [
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
//# sourceMappingURL=Cube.js.map