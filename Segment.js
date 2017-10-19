var Segment = /** @class */ (function () {
    function Segment(from, to) {
        this.from = from;
        this.to = to;
    }
    Segment.prototype.interpolate = function (position) {
        return new Point((1 - position) * this.from.getX(0) + position * this.to.getX(0), (1 - position) * this.from.getY(0) + position * this.to.getY(0), (1 - position) * this.from.getZ(0) + position * this.to.getZ(0));
    };
    return Segment;
}());
//# sourceMappingURL=Segment.js.map