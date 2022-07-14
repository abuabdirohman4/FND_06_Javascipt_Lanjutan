// Kasus 2
const mahasiswa = [
    {
        "nama" : "Abu Abdirohman",
        "jurusan" : "Informatika",
        "email " : "abuabdirohman4@gmail.com"
    },
    {
        "nama" : "Azati hanani",
        "jurusan" : "Administrasi Bisnis",
        "email " : "hananimania@gmail.com"
    }
]

// Kasus 1
    mahasiswa.forEach(mhs => console.log(mhs.nama))
    // Higher Order Function (forEach) biasanya termasuk Callback Funcation


// Kasus 2
    console.log('mulai')
    // mahasiswa.forEach(mhs => console.log(mhs.nama))
    mahasiswa.forEach(mhs => {
        for (let i = 0; i < 10000000; i++) {
            let data = new Date()
        }
        console.log(mhs.nama)
    })
    console.log('selesai')