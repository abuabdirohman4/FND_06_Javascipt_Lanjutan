// * Cara untuk membuat object pada javascript
// TODO 1. Object Literal
// ! Problem 1 : Tidak efektif untuk objek yang banyak

let mahasiswa1 = {
    nama: "Abu Abdirohman",
    energi: 10,
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
};

let mahasiswa2 = {
    nama: "Azati Hanani",
    energi: 10,
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
};