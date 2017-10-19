class Segment {
    constructor(private from : Point, private to : Point) {}
    public interpolate(position : number) : Point {
        return new Point(
            (1-position) * this.from.getX(0) + position * this.to.getX(0),
            (1-position) * this.from.getY(0) + position * this.to.getY(0),
            (1-position) * this.from.getZ(0) + position * this.to.getZ(0));
    }
}