var VictorianChair = /** @class */ (function () {
    function VictorianChair() {
        this.hasBackrest = true;
    }
    VictorianChair.prototype.sitOn = function () {
        console.log('sit on victorian chair');
    };
    return VictorianChair;
}());
var VictorianTable = /** @class */ (function () {
    function VictorianTable() {
        this.hasLegs = true;
    }
    return VictorianTable;
}());
var VictorianFurnitureFactory = /** @class */ (function () {
    function VictorianFurnitureFactory() {
    }
    VictorianFurnitureFactory.prototype.createChair = function () {
        return new VictorianChair();
    };
    VictorianFurnitureFactory.prototype.createTable = function () {
        return new VictorianTable();
    };
    return VictorianFurnitureFactory;
}());
function mainFurniture() {
    var factory = new VictorianFurnitureFactory();
    var chair = factory.createChair();
    chair.sitOn();
}
mainFurniture();
