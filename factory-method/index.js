var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello');
var Resource = /** @class */ (function () {
    function Resource() {
    }
    Resource.prototype.find = function (filterQuery) {
        var filters = this.createFiltersService();
        filters.filter(filterQuery);
    };
    return Resource;
}());
var WindowsFiltersService = /** @class */ (function () {
    function WindowsFiltersService() {
    }
    WindowsFiltersService.prototype.filter = function (query) {
        console.log('WindowsFiltersService', query);
    };
    return WindowsFiltersService;
}());
var WindowsResource = /** @class */ (function (_super) {
    __extends(WindowsResource, _super);
    function WindowsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsResource.prototype.createFiltersService = function () {
        return new WindowsFiltersService();
    };
    return WindowsResource;
}(Resource));
var MobileFiltersService = /** @class */ (function () {
    function MobileFiltersService() {
    }
    MobileFiltersService.prototype.filter = function (query) {
        console.log('MobileFiltersService', query);
    };
    return MobileFiltersService;
}());
var MobileResource = /** @class */ (function (_super) {
    __extends(MobileResource, _super);
    function MobileResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileResource.prototype.createFiltersService = function () {
        return new MobileFiltersService();
    };
    return MobileResource;
}(Resource));
var dialog = new WindowsResource();
dialog.find('windows query');
var mobileDialog = new MobileResource();
mobileDialog.find('mobile query');
