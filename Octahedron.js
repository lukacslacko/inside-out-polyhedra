function octahedronFaces() {
    var p = Math.sqrt(1.5);
    var A = new Point(-p, -p, 0);
    var B = new Point(-p, p, 0);
    var C = new Point(p, p, 0);
    var D = new Point(p, -p, 0);
    var X = new Point(0, 0, Math.sqrt(3));
    var Y = new Point(0, 0, -Math.sqrt(3));
    var BY = new Segment(B, Y).interpolate(0.5);
    var DY = new Segment(D, Y).interpolate(0.5);
    var AX = new Segment(A, X).interpolate(0.5);
    var CX = new Segment(C, X).interpolate(0.5);
    var A1 = new Segment(A, D).interpolate(1 / 3);
    var D1 = new Segment(D, A).interpolate(1 / 3);
    var B1 = new Segment(B, C).interpolate(1 / 3);
    var C1 = new Segment(C, B).interpolate(1 / 3);
    return [
        Face.face(BY, Y, Y, A),
        Face.face(A, B, B, BY),
        Face.face(AX, A, A, B),
        Face.face(B, X, X, AX),
        Face.face(BY, B, B, B1),
        Face.face(B1, B, B, X),
        Face.face(Y, BY, B1, C1),
        Face.face(B1, C1, CX, X),
        Face.face(C1, C, C, Y),
        Face.face(C1, C, C, CX),
        Face.face(AX, A, A, A1),
        Face.face(Y, A, A, A1),
        Face.face(AX, X, D1, A1),
        Face.face(A1, D1, DY, Y),
        Face.face(DY, D, D, D1),
        Face.face(D1, D, D, X),
        Face.face(CX, X, X, D),
        Face.face(CX, C, C, D),
        Face.face(C, D, D, DY),
        Face.face(C, Y, Y, DY)
    ];
}
//# sourceMappingURL=Octahedron.js.map