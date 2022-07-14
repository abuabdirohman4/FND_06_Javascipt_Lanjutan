// * Function Declaration

// function tampilkanPesan(nama) {
//   console.log("Halo " + nama);
// }

// tampilkanPesan("Abu Abdirohman");

// * Function Expression
// ? Function tanpa nama = Anonymous function

// let tampilPesan = function (nama) {
//   console.log("Halo", nama);
// };

// tampilPesan("Azati Hanani");

// * Arrow Function
// let tampilPesan2 = (nama) => {
//   console.log("Halo", nama);
// };

// tampilPesan2("Imania");

// // * Implisit Return
// // ? Kalau return nya hanya 1 baris

// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Abu Abdirohman"));

let mahasiswa = ["Abu Abdirohman", "Azati Hanani", "Imanis"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return console.log(nama.length);
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// ? Menampilkan dalam bentuk objek
let jumlahHuruf = mahasiswa.map((nama) => ({
  //   nama: nama,
  nama, //? kalo nama property dan nilainya sama, cukup tulis satu namanya saja
  jumlahHuruf: nama.length,
}));
console.log(jumlahHuruf);
console.table(jumlahHuruf);