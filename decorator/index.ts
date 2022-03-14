interface Notifier {
	send(message: string): void;
}

class ConcreteNotifier implements Notifier {
	send(message: string): void {
		console.log('sending mail', message);
	}
}

abstract class BaseDecorator implements Notifier {
	constructor(private wrappee: Notifier) {}

	send(message: string): void {
		this.wrappee.send(message);
	}
}

class SmsDecorator extends BaseDecorator {
	constructor(wrappee: Notifier) {
		super(wrappee);
	}

	send(message: string): void {
		super.send(message);
		this.sendSms(message);
	}

	sendSms(message): void {
		console.log('sending SMS', message);
	}
}

class FacebookDecorator extends BaseDecorator {
	constructor(wrappee: Notifier) {
		super(wrappee);
	}

	send(message: string): void {
		super.send(message);
		this.sendFacebook(message);
	}

	sendFacebook(message): void {
		console.log('sending facebook notification', message);
	}
}

class DecoratorApplication {
	notifier: Notifier;

	setNotifier(notifier: Notifier): void {
		this.notifier = notifier;
	}
}

const decApp = new DecoratorApplication();

let stack = new ConcreteNotifier();
stack = new SmsDecorator(stack);
stack = new FacebookDecorator(stack);

decApp.setNotifier(stack);
decApp.notifier.send('Hello world!');
