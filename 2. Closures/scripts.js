// TODO 2.1 Execution Context, Hoisting & Scope

// var nama = "Abu";
// console.log(nama);

// ! Creation phase pada Global Context

// ? kalo ketemu variabel
// nama var = undefined

// ? kalao ketemu function
// nama function = fn()
// ? disebut hoisting

// Window = global object
// this = window

// ! Execution phase

// console.log(sayHello);
// console.log(sayHello());

// var nama = "Abu Abdirohman";
// var umur = 24;

// console.log(sayHello());

// function sayHello() {
//   console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`);
// }

// * Untuk kasus function
// ? function membuat Local Execution Context
// ? yang di dalamnya terdapat creation dan execution phase
// ? window
// ? arguments
// ? hoisting

var nama = "Abu Abdirohman";
var username = "abuabdirohman4";

// function cetakURL(username) {
function cetakURL() {
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL("azatihanani"));

// console.log(cetakURL(username));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

// function satu() {
//   var nama = "Abu";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Hanan";
// satu();
// dua("Azati");
// console.log(nama);
