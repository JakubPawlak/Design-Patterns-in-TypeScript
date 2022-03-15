class VideoFile {}
class CompressionCodec {}
class CodecFactory {}
class AudioMixer {}

class VideoConverter {
	convertVideo(filename: string, format: string): void {
		const file = new VideoFile();
		const sourceCodec = new CodecFactory();
		let result;
		// ...
		return result;
	}
}

const converter = new VideoConverter();
const mp4 = converter.convertVideo('sth', 'mp4');
