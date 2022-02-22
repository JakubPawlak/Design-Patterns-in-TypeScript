interface IChair {
	hasBackrest: boolean;
	sitOn(): any;
}

interface ITable {
	hasLegs: boolean;
}

interface IFurnitureFactory {
	createChair(): IChair;
	createTable(): ITable;
}

class VictorianChair implements IChair {
	hasBackrest = true;
	sitOn() {
		console.log('sit on victorian chair');
	}
}

class VictorianTable implements ITable {
	hasLegs = true;
}

class VictorianFurnitureFactory implements IFurnitureFactory {
	createChair(): IChair {
		return new VictorianChair();
	}
	createTable(): ITable {
		return new VictorianTable();
	}
}

function mainFurniture() {
	const factory: IFurnitureFactory = new VictorianFurnitureFactory();
	const chair: IChair = factory.createChair();
	chair.sitOn();
}

mainFurniture();
