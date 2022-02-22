// INTERFEJSY
interface FiltersService {
	filter: (filterQuery) => void;
}

abstract class Resource {
	abstract createFiltersService(): FiltersService;

	find(filterQuery: string): void {
		const filters: FiltersService = this.createFiltersService();
		filters.filter(filterQuery);
	}
}

// IMPLEMENTACJA DLA WINDOWS
class WindowsFiltersService implements FiltersService {
	filter(query: string): void {
		console.log('WindowsFiltersService', query);
	}
}

class WindowsResource extends Resource {
	createFiltersService(): FiltersService {
		return new WindowsFiltersService();
	}
}

// IMPLEMENTACJA DLA MOBILE
class MobileFiltersService implements FiltersService {
	filter(query: string): void {
		console.log('MobileFiltersService', query);
	}
}

class MobileResource extends Resource {
	createFiltersService(): FiltersService {
		return new MobileFiltersService();
	}
}

// WYWOŁANIE
let dialog: Resource = new WindowsResource();
dialog.find('windows query');

let mobileDialog: Resource = new MobileResource();
mobileDialog.find('mobile query');
