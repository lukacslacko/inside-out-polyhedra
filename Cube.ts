class Cube {
    constructor() {}

    public faces() : Face[] {
        var result : Face[];
        var A = new Point(-1, -1, -1);
        var B = new Point(1, -1, -1);
        var C = new Point(1, 1, -1);
        var D = new Point(-1, 1, -1);
        var E = new Point(-1, -1, 1);
        var F = new Point(1, -1, 1);
        var G = new Point(1, 1, 1);
        var H = new Point(-1, 1, 1);
        result = [
            Face.face(A,B,B,C),
            Face.face(B,C,B,F),
            Face.face(B,F,F,E),
            Face.face(F,E,F,G),
            Face.face(F,G,G,C),
            Face.face(G,C,C,D),
            Face.face(C,D,D,A),
            Face.face(D,A,D,H),
            Face.face(D,H,H,G),
            Face.face(H,G,H,E),
            Face.face(H,E,E,A),
            Face.face(E,A,A,B)
        ];
        return result;
    }
}