interface DataSource {
	writeData(data: string): void;
	readData(): string;
}

class FileDataSource implements DataSource {
	writeData(data: string): void {
		console.log('saving data...', data);
	}

	readData(): string {
		return 'read message';
	}
}

class DataSourceDecorator implements DataSource {
	constructor(private wrappee: DataSource) {}

	writeData(data: string): void {
		this.wrappee.writeData(data);
	}
	readData(): string {
		return this.wrappee.readData();
	}
}

class EncryptionDecorator extends DataSourceDecorator {
	constructor(wrappee: DataSource) {
		super(wrappee);
	}

	writeData(data: string): void {
		const encrypted = 'encrypted ' + data;
		super.writeData(encrypted);
	}
	readData(): string {
		const data = super.readData();
		return 'decrypted ' + data;
	}
}

class EncryptorApplication {
	// configurable
	testWrite(encryptionEnabled: boolean) {
		let source = new FileDataSource();

		if (encryptionEnabled) {
			source = new EncryptionDecorator(source);
		}
		source.writeData('hello world!');
	}
}

// Example when app does not know anything about decorators
class PreconfiguredApp {
	constructor(private source: DataSource) {}

	load() {
		this.source.readData();
	}

	save(data) {
		this.source.writeData(data);
	}
}

// tests
const ea = new EncryptorApplication();
ea.testWrite(false);
ea.testWrite(true);
