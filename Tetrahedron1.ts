function tetrahedron1Faces() : Face[] {
    var A = new Point(-1, -1, -1);
    var B = new Point(1, 1, -1);
    var C = new Point(1, -1, 1);
    var D = new Point(-1, 1, 1);
    return [
        Face.face(A,D,D,B),
        Face.face(D,B,B,C),
        Face.face(B,C,C,A),
        Face.face(C,A,A,D)
    ];
}
