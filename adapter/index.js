var RoundPeg = /** @class */ (function () {
    function RoundPeg(radius) {
        this.radius = radius;
    }
    RoundPeg.prototype.getRadius = function () {
        return this.radius;
    };
    return RoundPeg;
}());
var RoundHole = /** @class */ (function () {
    function RoundHole(radius) {
        this.radius = radius;
    }
    RoundHole.prototype.getRadius = function () {
        return this.radius;
    };
    RoundHole.prototype.fits = function (peg) {
        return this.getRadius() >= peg.getRadius();
    };
    return RoundHole;
}());
// incompatible peg
var SquarePeg = /** @class */ (function () {
    function SquarePeg(width) {
        this.width = width;
    }
    SquarePeg.prototype.getWidth = function () {
        return this.width;
    };
    return SquarePeg;
}());
var SquarePegAdapter = /** @class */ (function () {
    function SquarePegAdapter(peg) {
        this.peg = peg;
    }
    SquarePegAdapter.prototype.getRadius = function () {
        return (this.peg.getWidth() * Math.sqrt(2)) / 2;
    };
    return SquarePegAdapter;
}());
var hole = new RoundHole(5);
var rpeg = new RoundPeg(5);
console.log('round peg fits', hole.fits(rpeg));
var smallSpeg = new SquarePeg(5);
var largeSpeg = new SquarePeg(10);
// type error
// console.log(hole.fits(smallSpeg));
var smallSpegAdapter = new SquarePegAdapter(smallSpeg);
var largeSpegAdapter = new SquarePegAdapter(largeSpeg);
console.log('small square peg fits', hole.fits(smallSpegAdapter));
console.log('large square peg fits', hole.fits(largeSpegAdapter));
