// jika kita jalankan code berikut maka akan terjadi error
// hal ini disebabkan karena coins tidak mengenal property a dan b
// maka buatlah objek baru dengan nama objekcoins line 18
var Pointku1 = /** @class */ (function () {
    function Pointku1() {
    }
    Pointku1.prototype.draw = function () {
        console.log('X' + this.a + ', Y' + this.b);
    };
    Pointku1.prototype.getDistance = function (another) {
        // ....
    };
    return Pointku1;
}());
var coins;
coins.draw();

// let objekcoins= new Pointku1;
// objekcoins.a= 1;
// objekcoins.b= 3;
// objekcoins.draw();
