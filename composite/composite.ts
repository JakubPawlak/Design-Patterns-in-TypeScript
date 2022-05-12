namespace Composite {
	interface Graphic {
		move(x, y);
	}

	class Dot implements Graphic {
		constructor(public x: number, public y: number) {
			console.log("I'm a dot at", x, y);
		}

		move(x: number, y: number) {
			this.x += x;
			this.y += y;
			console.log('I was moved to', this.x, this.y);
		}
	}

	class Circle extends Dot {
		constructor(public x: number, public y: number, public radius: number) {
			super(x, y);
			this.radius = radius;
			console.log("I'm a circle at", x, y);
		}
	}

	class CompoundGraphic implements Graphic {
		children: Graphic[] = [];

		add(child: Graphic) {
			this.children.push(child);
		}

		move(x: number, y: number) {
			this.children.forEach((child) => {
				child.move(x, y);
			});
		}
	}

	export class ImageEditor {
		all: CompoundGraphic;

		load() {
			this.all = new CompoundGraphic();
			this.all.add(new Dot(1, 2));
			this.all.add(new Circle(3, 4, 10));
		}

		moveSelected(x: number, y: number) {
			this.all.move(x, y);
		}
	}
}

const imageEditor = new Composite.ImageEditor();
imageEditor.load();
imageEditor.moveSelected(100, 200);
