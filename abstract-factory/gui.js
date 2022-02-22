var WinButton = /** @class */ (function () {
    function WinButton() {
    }
    WinButton.prototype.click = function () {
        console.log('win button click');
    };
    return WinButton;
}());
var WinCheckbox = /** @class */ (function () {
    function WinCheckbox() {
    }
    WinCheckbox.prototype.toggle = function () {
        console.log('win checkbox toggle');
    };
    return WinCheckbox;
}());
var WinGUIFactory = /** @class */ (function () {
    function WinGUIFactory() {
    }
    WinGUIFactory.prototype.createButton = function () {
        return new WinButton();
    };
    WinGUIFactory.prototype.createCheckbox = function () {
        return new WinCheckbox();
    };
    return WinGUIFactory;
}());
var Application = /** @class */ (function () {
    function Application(factory) {
        this.factory = factory;
        this.createUI();
    }
    Application.prototype.createUI = function () {
        this.button = this.factory.createButton();
        this.button.click();
    };
    return Application;
}());
var ApplicationConfigurator = /** @class */ (function () {
    function ApplicationConfigurator() {
        this.isWindows = true;
    }
    ApplicationConfigurator.prototype.main = function () {
        var factory;
        if (this.isWindows) {
            factory = new WinGUIFactory();
        }
        var app = new Application(factory);
    };
    return ApplicationConfigurator;
}());
var app = new ApplicationConfigurator();
app.main();
