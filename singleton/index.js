var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    };
    Singleton.prototype.log = function () {
        console.log("i'm Singleton");
    };
    return Singleton;
}());
// const c = new Singleton();
var single = Singleton.getInstance();
single.log();
var second = Singleton.getInstance();
second.log();
console.log('are equal', single === second);
