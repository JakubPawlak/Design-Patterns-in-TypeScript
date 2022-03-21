class ThirdPartyYouTubeClass {
	listVideos(): string {
		return 'list videos';
	}

	getVideoInfo(id): string {
		return `video info ${id}`;
	}
}

interface ThirdPartyYouTubeLib {
	listVideos(): string;
	getVideoInfo(id): string;
}

class CachedYouTubeClass implements ThirdPartyYouTubeLib {
	private listCache: string;
	private videoCache: string;
	private realService: ThirdPartyYouTubeLib;

	constructor(service: ThirdPartyYouTubeLib) {
		this.realService = service;
	}

	listVideos(): string {
		if (this.listCache == null) {
			this.listCache = this.realService.listVideos();
		}
		return this.listCache;
	}

	getVideoInfo(id): string {
		if (this.videoCache == null) {
			this.videoCache = this.realService.getVideoInfo(id);
		}
		return this.videoCache;
	}
}

class YouTubeManager {
	service: ThirdPartyYouTubeLib;

	constructor(service: ThirdPartyYouTubeLib) {
		this.service = service;
	}

	renderVideoPage() {
		console.log(this.service.getVideoInfo('id'));
	}

	renderListPage() {
		console.log(this.service.listVideos());
	}
}

class YTApp {
	init() {
		const service = new ThirdPartyYouTubeClass();
		const proxy = new CachedYouTubeClass(service);
		const manager = new YouTubeManager(proxy);
		manager.renderVideoPage();
		manager.renderListPage();
	}
}

const ytapp = new YTApp();
ytapp.init();
