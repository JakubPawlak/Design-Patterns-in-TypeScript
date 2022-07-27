namespace Strategy {
	interface Strategy {
		execute: (a: number, b: number) => number;
	}

	class MultiplyStrategy implements Strategy {
		execute(a: number, b: number) {
			return a * b;
		}
	}

	class DivideStrategy implements Strategy {
		execute(a: number, b: number) {
			return a / b;
		}
	}

	class Context {
		strategy: Strategy;

		// constructor(strategy: Strategy) {
		//     this.strategy = strategy;
		// }

		setStrategy(strategy: Strategy) {
			this.strategy = strategy;
		}

		execute(a: number, b: number): number {
			if (this.strategy) {
				return this.strategy.execute(a, b);
			}
		}
	}

	export class Application {
		operationContext: Context;

		constructor() {
			this.operationContext = new Context();

			const multiplyStrategy = new MultiplyStrategy();
			this.operationContext.setStrategy(multiplyStrategy);
			console.log(this.operationContext.execute(10, 5));

			const divideStrategy = new DivideStrategy();
			this.operationContext.setStrategy(divideStrategy);
			console.log(this.operationContext.execute(10, 5));
		}
	}
}

const strategyApp = new Strategy.Application();
