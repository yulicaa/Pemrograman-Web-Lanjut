# Jobsheet 2 - TypeScript

### Praktikum – Bagian 1: Instalasi Typescript
##### Soal 1
- Menginstall typescript, dimana Typescript adalah bahasa pemrograman yang menawarkan class, module, dan interface yang membuat developer bisa mengembangkan aplikasi kompleks dengan lebih mudah. 
- Cara menginstall **typescript** dengan perintah berikut `npm install -g typescript`

![](image/Jobsheet2/1.png)


##### Soal 2
- Cek version dari **typescript** yang terinstall `tsc --version`

![](image/Jobsheet2/2.png)

- Membuat folder **ts-hello** menggunakan `mkdir ts-hello` dan memindah path ke dalam folder **ts-hello**

![](image/Jobsheet2/3.png)

- Tulisakan file **main.ts** dengan code berikut:

```typescript
function log(message) {
    console.log(message);
}

let message = "Hello World";

log(message);
```

- Kemudian ketik perintah `tsc main.ts` untuk melakukan transpile file **typescript** kedalam **javascript**

![](image/Jobsheet2/4.png)

##### Soal 3
- Cek apakah sudah terbuat file **main.js**, lakukan perintah `ls`

![](image/Jobsheet2/5.png)


##### Soal 4
- Buka file javascript, perhatikan apakah sama isi dari file **main.ts** dan `main.js` isinya sedikit berbeda dengan main.ts, pada main.ts menggunakan let sedangkan pada main.js menggunakan var

![](image/Jobsheet2/6.png)

##### Soal 5
- Lakukan execute pada file **main.js** dengan perintah `node main.js`. Maka setelah di execute akan muncul pesan berupa text yang berisikan **Hello World**

![](image/Jobsheet2/7.png)

### Praktikum – Bagian 2: Declaring Variables
- Buka file **main.ts**, kemudian tulis code berikut:
```typescript
function doSomething(){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
```

##### Soal 6
- Remove file **main.js** hasil praktikum bagian 1 dengan perintah `rm main.js` dan cek apakah sudah terhapus atau belum

![](image/Jobsheet2/8.png)

##### Soal 7
- Lakukan transpile file **main.ts** dengan perintah `tsc main.ts`

![](image/Jobsheet2/9.png)

- catat apakah file main.js sudah terbuat

![](image/Jobsheet2/10.png)

##### Soal 8
- Execute file javascript dengan perintah `node main.js`

![](image/Jobsheet2/11.png)

### Praktikum - Bagian 3: Types
- Buka file **main.ts**, kemudian tuliskan listing program berikut:
```typescript
let count =5;
count = 'a';
```

![](image/Jobsheet2/13.png)

- Akan terdapat masalah pada file **main.ts**

![](image/Jobsheet2/12a.png)

##### Soal 9
- Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts` 

![](image/Jobsheet2/12.png)

- Hasil transpile file **main.ts**, menghasilkan file **main.js** seperti berikut:

```typescript
var count = 5;
count = 'a'; 
```

![](image/Jobsheet2/13.png)

### Praktikum – Bagian 4: Type Assertion
- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
let pesan;
pesan='abc';
let percobaan=(<string>pesan).endsWith('c');
let alternative=(pesan as string).endsWith('c');
```

##### Soal 10
- Remove file **main.js** sebelumnya, lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`. Hasil file **main.js**

```typescript
var pesan;
pesan = 'abc';
var percobaan = pesan.endsWith('c');
var alternative = pesan.endsWith('c');
```

![](image/Jobsheet2/14.png)

### Praktikum – Bagian 5: Arrow Function
- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
let log = function pesan(){
    console.log();
}

//kode diatas bisa disingkat menggunakan fungsi arrow
let doLog=(pesan)=>{
    console.log(pesan);
}

//atau seperti berikut
let doLog1=(pesan)=>console.log(pesan);
```

##### Soal 11
- Remove file **main.js** sebelumnya, lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`. Hasil file **main.js**

![](image/Jobsheet2/15.png)

```typescript
var log = function pesan() {
    console.log();
};
//kode diatas bisa disingkat menggunakan fungsi arrow
var doLog = function (pesan) {
    console.log(pesan);
};
//atau seperti berikut
var doLog1 = function (pesan) { return console.log(pesan); };
```

![](image/Jobsheet2/16.png)

![](image/Jobsheet2/17.png)

### Praktikum – Bagian 6: Interface
- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
interface Point{
    x:number;
    y:number;
}

let drawPoint=(point:Point)=>{
    //...
}

drawPoint({
    x:1,
    y:3,
})
```

##### Soal 12
- Remove file **main.js** sebelumnya, sehingga

![](image/Jobsheet2/18.png)

- lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`. Hasil file **main.js**

![](image/Jobsheet2/19.png)

```typescript
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 3
});
```

![](image/Jobsheet2/20.png)

### Praktikum – Bagian 7: Classes
- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
class Pointku{
    a:number;
    b:number;

    draw(){
        //...
    }

    getDistance(another:Pointku){
        //...
    }
}
```
##### Soal 13
- Remove file **main.js** sebelumnya, 

![](image/Jobsheet2/21.png)

- lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts`

![](image/Jobsheet2/22.png)

![](image/Jobsheet2/23.png)


### Praktikum – Bagian 8: Objects
- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
class Pointku{
    a:number;
    b:number;

    draw(){
        console.log('X' + this.a + ',Y' + this.b);
    }

    getDistance(another:Pointku){
        //...
    }
}
```

##### Soal 14
- Remove file **main.js** sebelumnya, 

![](image/Jobsheet2/24.png)

- lalu Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts` sehingga menhasilkan 

![](image/Jobsheet2/25.png)


![](image/Jobsheet2/26.png)