// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response)
            } else if (xhr.status === 404) {
                error()
            }
        }
    }

    xhr.open('get', url)
    xhr.send()
}

// function success(results) {
//     console.log(results)
// }
// function error() {}
// getDataMahasiswa('./02-Asynchronous/mahasiswa.json', success, error)

console.log('mulai')
getDataMahasiswa('./02-Asynchronous/mahasiswa.json', results => {
    // console.log(results) // tampilan masih dalam bentuk teks
    // console.log(JSON.parse(results)) // tampilan dalam bentuk objek
    
    const mhs = JSON.parse(results)
    mhs.forEach(m => console.log(m.nama))
}, () => {

})
console.log('selesai')