// Cara membuat array dan cara panggil value dan cara menentukan posisi

const arraySaya = ['🐵', '🐺', '🦒', '🐸', '🐔']

const jerapah = arraySaya.includes('🦒') // includes = untuk mengecek apakah jerapah ada di dalam sebuah array

if (jerapah) {
    const posisiJerapah = arraySaya.indexOf('🦒') // indexOf = untuk menentukan index ke berapa jerapah tersebut
    const indexBefore = posisiJerapah - 1
    const indexAfter = posisiJerapah + 1
    const before = arraySaya[indexBefore]
    const after = arraySaya[indexAfter]
    console.log (`jerapah berada di index ke ${posisiJerapah}`)
    console.log (`hewan sebelum jerapah adalah ${before}`)
    console.log (`hewan setelah jerapah adalah ${after}`)
    const hewanAwal = arraySaya.shift() // atau arraySaya.[0]
    console.log (`hewan awal adalah ${hewanAwal}`)
    const hewanAkhir = arraySaya[arraySaya.length - 1] // atau arraySaya.pop()
    console.log (`hewan terakhir adalah ${hewanAkhir}`)
} 