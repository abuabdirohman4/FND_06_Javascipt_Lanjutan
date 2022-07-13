// TODO 3. Constructor Function
// ? Menggunakan keyword new

function Mahasiwa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };
}

let hanan = new Mahasiwa("Azati Hanani", 10);