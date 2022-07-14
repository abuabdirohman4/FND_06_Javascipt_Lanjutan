// 1. Untuk membuat Function Factories. -MDN

// 2. Untuk membuat private method. -MDN

// 1. Function Factories

// function ucapkanSalam($waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`)
//     }
// }




// 2. Private Method

// Kasus Membuat Counter (Bukan Closure)
    let counter1 = 0
    let add1 = function() {
        return ++counter1;
    }

    console.log(add1())
    console.log(add1())
    console.log(add1())

// Problem 1, kalau ada baris yang mengubah counter
    let counter2 = 0 // Problem 1
    let add2 = function() {
        let counter2 = 0
        return ++counter2;
    }

    // counter = 100 // Problem 1

    console.log(add2())
    console.log(add2())
    console.log(add2())

    // Solusi 1, dengan memasukkan variable counter2 ke dalam function
    // Problem 2 nya, hasilny akan selalu 1, karena kita set counter2 menjadi 0 setiap memanggil function

// Solusi 2, dengan menggunakan closure
    let add3 = function() {
        let counter3 = 0
        return function () {
            return ++counter3;
        }
    }

    let a = add3()

    counter = 100 // tidak akan mengganggu

    console.log(a())
    console.log(a())
    console.log(a())


// Immediately Invoke Function
    let add4 = (function() {
        let counter4 = 0
        return function () {
            return ++counter4;
        }
    })();

    counter = 100 // tidak akan mengganggu

    console.log(add4())
    console.log(add4())
    console.log(add4())