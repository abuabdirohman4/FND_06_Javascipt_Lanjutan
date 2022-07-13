const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// mencari angka => 3
// for
const newAngkaFor = []
for (let index = 0; index < angka.length; index++) {
    if (angka[index] >= 3) {
        // console.log(angka[index])
        newAngkaFor.push(angka[index])
    }
}
console.log("For :", newAngkaFor)

// filter (Array.prototype.filter)
// const newAngkaFilter = angka.filter(function (e) {
//     // if (e >= 3) {
//     //     console.log(e)
//     // }
//     return e >=3
//     // return e * 2
// })
const newAngkaFilter = angka.filter( e => e >= 3)
console.log("Filter :", newAngkaFilter)

// map (Array.prototype.map)
// seperti forEach tapi untuk map, hasilnya akan membuat array baru

// kalikan semua angka dengan 2
// const newAngkaMap = angka.map(function (e) {
//     // console.log(e * 2)
//     return e * 2
// })
const newAngkaMap = angka.map(e => e * 2)
console.log("Map :", newAngkaMap)

// reduce (Array.prototype.reduce)
// memiliki 2 arguments

// jumlahkan seluruh elemen pada array
const newAngkaReduce = angka.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0 // default 0
    // accumulator + currentValue, 2
)
console.log("Reduce :", newAngkaReduce)

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(e => e > 5) // 8,9,9
                .map(e => e * 3) // 24,27,27
                .reduce((acc, cur) => acc + cur) //78
console.log("Hasil :", hasil)
