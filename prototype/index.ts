abstract class Shape {
	x: number;
	y: number;
	color: string;

	constructor(source?: Shape) {
		if (source) {
			this.x = source.x;
			this.y = source.y;
			this.color = source.color;
		}
	}

	abstract clone(): Shape;
}

class Rectangle extends Shape {
	width: number;
	height: number;

	constructor(source: Rectangle) {
		super(source);
		this.width = source.width;
		this.height = source.height;
	}

	clone(): Shape {
		return new Rectangle(this);
	}
}

class Circle extends Shape {
	radius: number;

	constructor(source?: Circle) {
		super(source);
		this.radius = source?.radius;
	}

	clone(): Shape {
		return new Circle(this);
	}
}

class App {
	shapes: Shape[] = [];

	constructor() {
		const circle = new Circle();
		circle.x = 10;
		circle.y = 10;
		circle.radius = 20;
		circle.color = 'red';

		this.shapes.push(circle);

		const circle2 = circle.clone();
		this.shapes.push(circle2);

		this.copyList();
	}

	copyList() {
		const newShapes: Shape[] = [];
		this.shapes.forEach((shape: Shape) => newShapes.push(shape.clone()));

		this.shapes.forEach((shape) => {
			shape.x = 20;
		});

		console.log('old', this.shapes);
		console.log('new', newShapes);
	}
}

const shapesApp = new App();
