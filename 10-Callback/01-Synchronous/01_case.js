// Callback
// Function yang dieksekusi setelah fungsi lain selesai dijalankan

// Synchrounous Callback

// Kasus 1
    // Cara 1 (Function Declaration) ----------------
    // function halo(nama) { // function sbg parameter
    //     alert(`Halo, ${nama}`)
    // }
    // function tampilkanPesan(callback) {
    //     const nama = prompt('Masukkan Nama : ')
    //     callback(nama)
    // }
    // tampilkanPesan(halo)

    // Cara 2 (Anonymous Function & Direct Parameter) ----------------
    function tampilkanPesan2(callback) {
        const nama = prompt('Masukkan Nama : ')
        callback(nama)
    }
    // tampilkanPesan2(function(nama) {
    //     alert(`Halo, ${nama}`)
    // })
    // tampilkanPesan2((nama) => {
    //     alert(`Halo, ${nama}`)
    // })
    tampilkanPesan2(nama => alert(`Halo, ${nama}`))