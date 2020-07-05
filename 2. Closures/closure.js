// function init() {
//   //   let nama = "Abu Abdirohman";
//   //   let umur = "23";
//   //   function tampilNama() {
//   //   function tampilNama(nama) {
//   // let nama = "Azati hanani";
//   // console.log(nama);
//   // console.log(umur);
//   //   }
//   //   tampilNama();
//   //   console.log(tampilNama());
//   //   console.log(tampilNama);
//   //   console.dir(tampilNama);
//   //   return tampilNama;

//   // ? Lebih Ringkas
//   return function (nama) {
//     console.log(nama);
//   };
// }
// // init();
// let panggilNama = init();
// // panggilNama();

// // * Penggunaan Closure
// panggilNama("Abu Abdirohman");
// panggilNama("Azati Hanani");

// * Function Factories
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Abu Abdirohman");
// selamatSiang("Abu Abdirohman");
// selamatMalam("Azati Hanani");

// console.dir(selamatMalam);

// * Membuat Seolah2 Private Method

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
