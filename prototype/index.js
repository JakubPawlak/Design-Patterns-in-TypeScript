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
var Shape = /** @class */ (function () {
    function Shape(source) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(source) {
        var _this = _super.call(this, source) || this;
        _this.width = source.width;
        _this.height = source.height;
        return _this;
    }
    Rectangle.prototype.clone = function () {
        return new Rectangle(this);
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(source) {
        var _this = _super.call(this, source) || this;
        _this.radius = source === null || source === void 0 ? void 0 : source.radius;
        return _this;
    }
    Circle.prototype.clone = function () {
        return new Circle(this);
    };
    return Circle;
}(Shape));
var App = /** @class */ (function () {
    function App() {
        this.shapes = [];
        var circle = new Circle();
        circle.x = 10;
        circle.y = 10;
        circle.radius = 20;
        circle.color = 'red';
        this.shapes.push(circle);
        var circle2 = circle.clone();
        this.shapes.push(circle2);
        console.log(this.shapes);
        this.copyList();
    }
    App.prototype.copyList = function () {
        var newShapes = [];
        this.shapes.forEach(function (shape) { return newShapes.push(shape.clone()); });
        this.shapes.forEach(function (shape) {
            shape.x = 20;
        });
        console.log('old', this.shapes);
        console.log('new', newShapes);
    };
    return App;
}());
var shapesApp = new App();
