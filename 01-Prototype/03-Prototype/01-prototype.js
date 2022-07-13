// // * Materi 1.3. Prototype
function Mahasiswa(nama, energi) {
  //   let this = {Object.create(Mahasiswa.prototype)}; // ? Sebenarnya isinya ada ini
  this.nama = nama;
  this.energi = energi;
  //   return this; // ? Dan ada ini juga

  Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  };

  Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main!`;
  };

  Mahasiswa.prototype.main = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  };
}

let hanan = new Mahasiswa("Azati Hanani", 10);