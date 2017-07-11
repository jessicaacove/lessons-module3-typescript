var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
var myGreetThang = new Greeter('Jello, world!');
document.getElementById('container').innerHTML = myGreetThang.sayHi();
