// Ada 2 Fase pada Execution Context
// 1. Fase Creation
// 2. Face Execution

// Ada 2 Context
// 1. Global Context (Di Dalam File Javascript)
// 2. Local Context (Di Dalam Function Javascript)

// Kasus 1 ----------------------
console.log(nama) 
// Hasil di console nya "Reference Error, nama is not defined"

// Kasus 2 ----------------------
console.log(nama)
var nama = "Abu"
// Hasilnya "undefined" & tidak error

// Kasus 3 ----------------------
var nama = "Abu"
console.log(nama)
// Hasilnya "Abu" alias aman dan berhasil

// Q : Kenapa bisa terjadi kasus 2 ?
// A : Karena ada yang namanya "Creation Phase" yang terjadi di "Global Context"

// 1. Creation Phase ----------------------
// Pada Fase ini akan ada 4 hal yang dilakukan 
    // 1. Pengecekan apakah ada "variable" di dalam kodingan kita
    // 2. Pengecekan apakah ada "function" di dalam kodingan kita
    // 3. Mendefinisikan object "window" sebagai "global object"
    // 4. Mendefinisikan object"this" sebagai "window"

    // 1. Pengecekan apakah ada "variable" di dalam kodingan kita
        // ? kalau ketemu variabel, variabel diisi undefined
        // var nama_variabel = undefined

    // 2. Pengecekan apakah ada "function" di dalam kodingan kita
        // ? kalau ketemu function, function diisi kode function itu sendiri
        // function = fn() 

        // ----------------------
        // ? 2 hal yang dilakukan diatas disebut hoisting
        // NB : Website untuk visualisasi -> https://pythontutor.com/javascript.html#mode=edit

// 2. Creation Phase
// Mengeksekusi programnya baris per baris dari atas ke bawah


// Contoh Kasus untuk fungsi
// Kasus 1 ----------------------
// console.log(sayHello)
// var nama = 'Abu'
// var umur = 25

// function sayHello() {
//     console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`)
// }
// Hasil di console nya isi dari funcntion
// ƒ sayHello() {
//     console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`)

// Kasus 2 ----------------------
// console.log(sayHello())
var nama = 'Abu'
var umur = 25

// function sayHello() {
//     console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`)
// }
// Hasil di console nya isi dari function dengan nama & umurnya undefined, lalu baris berikutanya undefined karena kita tidak me return sesuatu pada function nya
// Halo, nama saya Abu, saya undefined tahun
// undefined

console.log(sayHello())
function sayHello() {
    return (`Halo, nama saya ${nama}, saya ${umur} tahun`)
}