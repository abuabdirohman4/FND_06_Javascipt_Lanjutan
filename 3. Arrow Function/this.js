// * Konsep this pada Arrow Function

// * Constructor Function
// const Mahasiswa = function () {
//   (this.nama = "Abu Abdirohman"),
//     (this.umur = 23),
//     (this.sayHello = function () {
//       console.log(
//         `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`
//       );
//     });
// };

// const abu = new Mahasiswa();

// const Mahasiswa = function () {
//   (this.nama = "Abu Abdirohman"),
//     (this.umur = 23),
//     (this.sayHello = () => {
//       console.log(
//         `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`
//       );
//     });
// };

// const abu = new Mahasiswa();


// * Object Literal
// const mhs1 = {
//     nama: 'Abu Abdirohman'
//     umur: 23,
//     sayHello: function() {
//         console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`)
//     }   
// }

// console.log(mhs1)

const module = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42