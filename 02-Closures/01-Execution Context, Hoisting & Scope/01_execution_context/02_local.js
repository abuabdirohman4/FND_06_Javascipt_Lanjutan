// Function membuat Local Execution Context
// yang di dalamnya terdapat creation & execution phase sendiri
// yang dihasilkan :
// windows
// arguments

var nama = "Abu Abdirohman"
var username = "abuabdirohman4"

function cetakURL(username) {
    var instagram = "http://instagram.com/"
    return instagram + username
}

console.log(cetakURL(username))


function a() {
    console.log('ini a')

    function b() {
        console.log('ini b')
    
        function c() {
            console.log('ini c')
        }

        c()
    }

    b()
}

a()
