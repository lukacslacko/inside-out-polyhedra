function icosahedronFaces() {
    var f = (Math.sqrt(5) + 1) / 2;
    var P = new Point(0, 1, f);
    var A = new Point(-f, 0, 1);
    var B = new Point(0, -1, f);
    var C = new Point(f, 0, 1);
    var D = new Point(1, f, 0);
    var E = new Point(-1, f, 0);
    var p = new Point(0, -1, -f);
    var a = new Point(f, 0, -1);
    var b = new Point(0, 1, -f);
    var c = new Point(-f, 0, -1);
    var d = new Point(-1, -f, 0);
    var e = new Point(1, -f, 0);
    var PB = new Segment(P, B).interpolate(1 / 2);
    var CC = new Segment(C, P).interpolate(1 / 3);
    var PP = new Segment(P, C).interpolate(1 / 3);
    var PD = new Segment(P, D).interpolate(1 / 2);
    var AE = new Segment(A, E).interpolate(1 / 2);
    var Ad = new Segment(A, d).interpolate(1 / 2);
    var BB = new Segment(B, e).interpolate(1 / 3);
    var ee = new Segment(e, B).interpolate(1 / 3);
    var Ce = new Segment(C, e).interpolate(1 / 2);
    var Da = new Segment(D, a).interpolate(1 / 2);
    var Eb = new Segment(E, b).interpolate(1 / 2);
    var EE = new Segment(E, c).interpolate(1 / 3);
    var cc = new Segment(c, E).interpolate(1 / 3);
    var de = new Segment(d, e).interpolate(1 / 2);
    var pa = new Segment(p, a).interpolate(1 / 2);
    var pp = new Segment(p, b).interpolate(1 / 3);
    var bb = new Segment(b, p).interpolate(1 / 3);
    var pc = new Segment(p, c).interpolate(1 / 2);
    return [
        Face.face(A, P, P, PB),
        Face.face(A, B, B, PB),
        Face.face(PB, P, P, PP),
        Face.face(B, PB, PP, CC),
        Face.face(B, C, C, CC),
        Face.face(PP, P, P, PD),
        Face.face(CC, PP, PD, D),
        Face.face(CC, C, C, D),
        Face.face(E, P, P, PD),
        Face.face(E, D, D, PD),
        Face.face(P, E, E, AE),
        Face.face(P, A, A, AE),
        Face.face(B, A, A, Ad),
        Face.face(B, d, d, Ad),
        Face.face(BB, B, B, C),
        Face.face(ee, BB, C, Ce),
        Face.face(ee, e, e, Ce),
        Face.face(C, D, D, Da),
        Face.face(C, a, a, Da),
        Face.face(D, E, E, Eb),
        Face.face(D, b, b, Eb),
        Face.face(EE, E, E, AE),
        Face.face(cc, EE, AE, A),
        Face.face(cc, c, c, A),
        Face.face(d, B, B, BB),
        Face.face(d, de, ee, BB),
        Face.face(de, e, e, ee),
        Face.face(a, C, C, Ce),
        Face.face(a, e, e, Ce),
        Face.face(b, D, D, Da),
        Face.face(b, a, a, Da),
        Face.face(Eb, E, E, EE),
        Face.face(b, Eb, EE, cc),
        Face.face(b, c, c, cc),
        Face.face(c, A, A, Ad),
        Face.face(c, d, d, Ad),
        Face.face(pa, p, p, pp),
        Face.face(pa, a, bb, pp),
        Face.face(a, b, b, bb),
        Face.face(e, p, p, pa),
        Face.face(e, a, a, pa),
        Face.face(p, d, d, de),
        Face.face(p, e, e, de),
        Face.face(d, p, p, pc),
        Face.face(d, c, c, pc),
        Face.face(pc, p, p, pp),
        Face.face(pc, c, bb, pp),
        Face.face(c, b, b, bb)
    ];
}
//# sourceMappingURL=Icosahedron.js.map