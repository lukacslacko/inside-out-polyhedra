function tetrahedron2Faces() {
    var A = new Point(-1, -1, -1);
    var B = new Point(1, 1, -1);
    var C = new Point(1, -1, 1);
    var D = new Point(-1, 1, 1);
    var X = new Segment(A, B).interpolate(0.5);
    var Y = new Segment(C, D).interpolate(0.5);
    var E = new Segment(A, D).interpolate(1 / 3);
    var F = new Segment(A, D).interpolate(2 / 3);
    var G = new Segment(B, C).interpolate(1 / 3);
    var H = new Segment(B, C).interpolate(2 / 3);
    return [
        Face.face(G, B, B, D),
        Face.face(B, D, D, F),
        Face.face(F, D, D, Y),
        Face.face(D, Y, H, G),
        Face.face(H, G, X, A),
        Face.face(X, A, A, E),
        Face.face(E, A, A, C),
        Face.face(A, C, C, H),
        Face.face(H, C, C, Y),
        Face.face(C, Y, F, E),
        Face.face(F, E, X, B),
        Face.face(X, B, B, G)
    ];
}
//# sourceMappingURL=Tetrahedron2.js.map