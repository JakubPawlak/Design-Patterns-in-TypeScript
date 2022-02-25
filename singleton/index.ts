class Singleton {
	private static instance: Singleton;

	private constructor() {}

	static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	log(): void {
		console.log("i'm Singleton");
	}
}

// const c = new Singleton();
const single = Singleton.getInstance();
single.log();

const second = Singleton.getInstance();
second.log();

console.log('are equal', single === second);
