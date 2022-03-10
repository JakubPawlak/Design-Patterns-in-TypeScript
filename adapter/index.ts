interface Peg {
	getRadius(): number;
}

class RoundPeg implements Peg {
	constructor(private radius) {}
	getRadius(): number {
		return this.radius;
	}
}

class RoundHole {
	constructor(private radius) {}

	getRadius() {
		return this.radius;
	}

	fits(peg: Peg): boolean {
		return this.getRadius() >= peg.getRadius();
	}
}

// incompatible peg
class SquarePeg {
	constructor(private width) {}

	getWidth(): number {
		return this.width;
	}
}

class SquarePegAdapter implements Peg {
	constructor(private peg: SquarePeg) {}

	getRadius(): number {
		return (this.peg.getWidth() * Math.sqrt(2)) / 2;
	}
}

const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);

console.log('round peg fits', hole.fits(rpeg));

const smallSpeg = new SquarePeg(5);
const largeSpeg = new SquarePeg(10);

// type error
// console.log(hole.fits(smallSpeg));

const smallSpegAdapter = new SquarePegAdapter(smallSpeg);
const largeSpegAdapter = new SquarePegAdapter(largeSpeg);

console.log('small square peg fits', hole.fits(smallSpegAdapter));
console.log('large square peg fits', hole.fits(largeSpegAdapter));
