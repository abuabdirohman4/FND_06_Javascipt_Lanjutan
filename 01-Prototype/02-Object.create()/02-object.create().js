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
    // * Penggunaan Object.create agar tidak perlu membuat deklarasi berulang2
    let mahasiswa = Object.create(methodMahasiwa);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let abu = Mahasiswa("Abu Abdirohman", 10);
let hanan = Mahasiswa("Azati Hanani", 10);

