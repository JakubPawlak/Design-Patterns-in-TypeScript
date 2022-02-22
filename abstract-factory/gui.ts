interface IButton {
	click(): void;
}

interface ICheckbox {
	toggle(): void;
}

interface IGUIFactory {
	createButton(): IButton;
	createCheckbox(): ICheckbox;
}

class WinButton implements IButton {
	click() {
		console.log('win button click');
	}
}

class WinCheckbox implements ICheckbox {
	toggle() {
		console.log('win checkbox toggle');
	}
}

class WinGUIFactory implements IGUIFactory {
	createButton(): IButton {
		return new WinButton();
	}
	createCheckbox(): ICheckbox {
		return new WinCheckbox();
	}
}

class Application {
	private factory: IGUIFactory;
	private button: IButton;

	constructor(factory: IGUIFactory) {
		this.factory = factory;
		this.createUI();
	}

	createUI(): void {
		this.button = this.factory.createButton();
		this.button.click();
	}
}

class ApplicationConfigurator {
	isWindows = true;
	main(): void {
		let factory: IGUIFactory;
		if (this.isWindows) {
			factory = new WinGUIFactory();
		}

		const app = new Application(factory);
	}
}

const app = new ApplicationConfigurator();
app.main();
