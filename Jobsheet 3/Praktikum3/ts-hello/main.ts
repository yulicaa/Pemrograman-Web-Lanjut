// jika kita jalankan code berikut maka akan terjadi error
// hal ini disebabkan karena coins tidak mengenal property a dan b
// maka buatlah objek baru dengan nama objekcoins line 18

class Pointku1{
    a: number;
    b: number;

    draw(){
        console.log('X' +this.a + ', Y' +this.b);
    }

    getDistance(another:Pointku1){
        // ....
    }
}

let coins:Pointku1
coins.draw();

// let objekcoins= new Pointku1;
// objekcoins.a= 1;
// objekcoins.b= 3;
// objekcoins.draw();


