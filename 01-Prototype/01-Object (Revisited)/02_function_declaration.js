// TODO 2. Function Declaration
// !

function Mahasiwa(nama, energi) {
    // ? Huruf besar sebagai penanda objek
    let mahasiswa = {}; // ? Variabel dengan bentuk objek
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    };

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    };

    return mahasiswa;
}

let abu = Mahasiwa("Abu Abdirohman", 10);
let hanan = Mahasiwa("Azati Hanani", 10);