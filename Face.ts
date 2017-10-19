class Face {
    constructor(private left : Segment, private right : Segment) {}
    public static face(a : Point, b : Point, c : Point, d : Point) {
        return new Face(new Segment(a, c), new Segment(b, d));
    }
}