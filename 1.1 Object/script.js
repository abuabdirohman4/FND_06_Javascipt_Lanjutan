// * Cara untuk membuat obejct pada javascript
// TODO 1. Object Literal
let mahasiswa = {
    nama: 'Abu Abdirohman',
    energi: 10,
    makan: function (porsi) {
        this.energi =+ porsi;
        console.log(`Selamat datang ${this.nama}, selamat makan`)
    }
}

// TODO 2. Function Declaration
// TODO 3. Constructor Function
// TODO 4. Object.create