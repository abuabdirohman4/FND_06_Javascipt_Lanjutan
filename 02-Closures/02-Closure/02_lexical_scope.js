// Lexical Scope
function init() {
    let nama = 'Abu Abdirohman' // local variable
    function tampilNama() { // inner function (closure*)
        consolelog(nama) // akses ke parent variable
    }
    tampilNama()
}
init()

// Inner function membutuhkan variable di parent scope nya, inner function ini disebut closure