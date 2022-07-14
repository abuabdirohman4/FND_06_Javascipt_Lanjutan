// JQuery
console.log('mulai')
$.ajax({
    url: './02-Asynchronous/mahasiswa.json',
    success: (mhs) => {
        console.log(mhs)
        mhs.forEach(m => console.log(m.nama))
    },
    error: (err) => {
        console.log(err.responseText)
    }
})
console.log('selesai')