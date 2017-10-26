function dodecahedronFaces() {
    var phi = (1 + Math.sqrt(5)) / 2;
    var ihp = 1 / phi;
    var A = new Point(-1, -1, 1);
    var B = new Point(-ihp, 0, phi);
    var C = new Point(ihp, 0, phi);
    var D = new Point(1, -1, 1);
    var E = new Point(0, -phi, ihp);
    var AA = new Segment(A, B).interpolate(1 / 3);
    var BB = new Segment(B, A).interpolate(1 / 3);
    var CD = new Segment(C, D).interpolate(1 / 2);
    var P1 = new Point(-phi, -ihp, 0);
    var IV = new Point(-phi, ihp, 0);
    var P2 = new Point(-1, 1, 1);
    var P1_P1 = new Segment(P1, IV).interpolate(1 / 3);
    var IV_IV = new Segment(IV, P1).interpolate(1 / 3);
    var B2 = new Segment(B, P2).interpolate(1 / 2);
    var V = new Point(0, phi, ihp);
    var P3 = new Point(1, 1, 1);
    var V2 = new Segment(V, P2).interpolate(1 / 2);
    var V3 = new Segment(V, P3).interpolate(1 / 2);
    var P4 = new Point(phi, -ihp, 0);
    var I = new Point(phi, ihp, 0);
    var P5 = new Point(0, -phi, -ihp);
    var II = new Point(1, -1, -1);
    var II4 = new Segment(II, P4).interpolate(1 / 2);
    var III = new Point(-1, -1, -1);
    var III5 = new Segment(III, P5).interpolate(1 / 2);
    var e = new Point(0, phi, -ihp);
    var a = new Point(1, 1, -1);
    var b = new Point(ihp, 0, -phi);
    var aa = new Segment(a, b).interpolate(1 / 3);
    var bb = new Segment(b, a).interpolate(1 / 3);
    var c = new Point(-ihp, 0, -phi);
    var bc = new Segment(b, c).interpolate(1 / 2);
    var cIII = new Segment(c, III).interpolate(1 / 2);
    var d = new Point(-1, 1, -1);
    var dd = new Segment(d, e).interpolate(1 / 3);
    var ee = new Segment(e, d).interpolate(1 / 3);
    return [
        Face.face(AA, A, A, E),
        Face.face(BB, AA, E, D),
        Face.face(B, BB, D, CD),
        Face.face(B, C, C, CD),
        Face.face(AA, A, A, P1),
        Face.face(BB, AA, P1, P1_P1),
        Face.face(B, BB, P1_P1, IV_IV),
        Face.face(B2, B, IV_IV, IV),
        Face.face(B2, P2, P2, IV),
        Face.face(C, B, B, B2),
        Face.face(P3, C, B2, P2),
        Face.face(V3, P3, P2, V2),
        Face.face(V3, V, V, V2),
        Face.face(CD, D, D, P4),
        Face.face(C, CD, P4, I),
        Face.face(C, P3, P3, I),
        Face.face(E, P5, P5, II),
        Face.face(D, E, II, II4),
        Face.face(II4, P4, P4, D),
        Face.face(P1, III, III, III5),
        Face.face(A, P1, III5, P5),
        Face.face(A, E, E, P5),
        Face.face(P3, I, I, a),
        Face.face(V3, P3, a, e),
        Face.face(V3, V, V, e),
        Face.face(II4, II, II, b),
        Face.face(P4, II4, b, bb),
        Face.face(I, P4, bb, aa),
        Face.face(I, a, a, aa),
        Face.face(II, b, b, bc),
        Face.face(II, P5, c, bc),
        Face.face(P5, III5, cIII, c),
        Face.face(III5, III, III, cIII),
        Face.face(P1_P1, P1, P1, III),
        Face.face(IV_IV, P1_P1, III, cIII),
        Face.face(IV, IV_IV, cIII, c),
        Face.face(IV, d, d, c),
        Face.face(P2, IV, IV, d),
        Face.face(V2, P2, d, dd),
        Face.face(V, V2, dd, ee),
        Face.face(V, e, e, ee),
        Face.face(e, a, a, aa),
        Face.face(ee, e, aa, bb),
        Face.face(ee, dd, b, bb),
        Face.face(dd, d, bc, b),
        Face.face(d, c, c, bc)
    ];
}
//# sourceMappingURL=Dodecahedron.js.map