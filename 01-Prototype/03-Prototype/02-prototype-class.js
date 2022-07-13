// * Versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let abu = new Mahasiswa("Abu Abdirohman", 10);
let hanan = new Mahasiswa("Azati Hanani", 10);

abu;
hanan;