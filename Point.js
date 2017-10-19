var Point = /** @class */ (function () {
    function Point(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = Math.sqrt(x * x + y * y + z * z);
    }
    Point.prototype.getX = function (sphere) {
        return this.x * (sphere * Math.sqrt(3) + (1 - sphere) * this.r) / this.r;
    };
    Point.prototype.getY = function (sphere) {
        return this.y * (sphere * Math.sqrt(3) + (1 - sphere) * this.r) / this.r;
    };
    Point.prototype.getZ = function (sphere) {
        return this.z * (sphere * Math.sqrt(3) + (1 - sphere) * this.r) / this.r;
    };
    return Point;
}());
//# sourceMappingURL=Point.js.map