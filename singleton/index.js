var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
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
