// * Penyelesaian Problem 1
const methodMahasiwa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`);
    },
};

function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiwa.makan;
    mahasiswa.main = methodMahasiwa.main;
    mahasiswa.tidur = methodMahasiwa.tidur;

    return mahasiswa;
}

let abu = Mahasiswa("Abu Abdirohman", 10);
let hanan = Mahasiswa("Azati Hanani", 10);

