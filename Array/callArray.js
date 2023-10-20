

const arraySaya = ['🦒', '100', {tomato: function() {
    console.log ('ini adalah tomat')}
}, ['eat', 'food']]

console.log (arraySaya[0]) //bisa dipanggil seperti biasa
console.log (arraySaya [3]) // terpanggil 2 nilai
console.log (arraySaya [3][1]) // terpanggil 1 nilai food (ini namanya multi dimensi)

//kalau panggil sebuah function didalam array seperti ini
arraySaya[2].tomato()