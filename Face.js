var Face = /** @class */ (function () {
    function Face(left, right) {
        this.left = left;
        this.right = right;
    }
    Face.face = function (a, b, c, d) {
        return new Face(new Segment(a, c), new Segment(b, d));
    };
    return Face;
}());
//# sourceMappingURL=Face.js.map