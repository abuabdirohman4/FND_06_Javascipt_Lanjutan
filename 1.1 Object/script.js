// * Cara untuk membuat obejct pada javascript
// TODO 1. Object Literal
// let mahasiswa1 = {
//   nama: "Abu Abdirohman",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Azati Hanani",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// TODO 2. Function Declaration
// function Mahasiwa(nama, energi) { // ? Huruf besat sebagai penanda objek
//   let mahasiswa = {}; // ? Variabel dengan bentuk objek
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };

//   return mahasiswa;
// }

// let abu = Mahasiwa("Abu Abdirohman", 10);
// let hanan = Mahasiwa("Azati Hanani", 10);

// TODO 3. Constructor Function
// ? Menggunakan keyword new

function Mahasiwa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };
}

let hanan = new Mahasiwa("Azati Hanani", 10);

// TODO 4. Object.create
