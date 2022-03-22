interface Device {
	isEnabled: () => boolean;
	enable: () => void;
	disable: () => void;
	getVolume: () => number;
	setVolume: (volume: number) => void;
}

class Remote {
	constructor(protected device: Device) {}

	togglePower() {
		if (this.device.isEnabled()) {
			this.device.disable();
		} else {
			this.device.enable();
		}
	}

	volumeUp() {
		const old = this.device.getVolume();
		this.device.setVolume(old + 1);
	}
}

class AdvancedRemote extends Remote {
	mute() {
		this.device.setVolume(0);
	}
}

class Tv implements Device {
	private enabled = false;
	private volume = 10;
	isEnabled() {
		console.log('is enabled', this.enabled);
		return this.enabled;
	}
	enable() {
		console.log('enable');
		this.enabled = true;
	}
	disable() {
		console.log('disable');
		this.enabled = false;
	}
	getVolume() {
		console.log('get volume', this.volume);
		return this.volume;
	}
	setVolume(volume: number) {
		console.log('set volume');
		this.volume = volume;
	}
}

// class Radio implements Device {}

console.log('\tremote');
const tv = new Tv();
const remote = new Remote(tv);
remote.togglePower();

console.log('\tadvanced remote');
const advancedTv = new Tv();
const advancedRemote = new AdvancedRemote(tv);
advancedRemote.mute();
