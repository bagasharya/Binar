
const arraySaya = ['🐵', '🐺', '🦒', '🐸', '🐔']

const jerapah = arraySaya.includes('🦒')

if (jerapah) {
    const posisiJerapah = arraySaya.indexOf('🦒')
    const indexBefore = posisiJerapah - 1
    const indexAfter = posisiJerapah + 1
    const before = arraySaya[indexBefore]
    const after = arraySaya[indexAfter]
    console.log (`hewan sebelum jerapah adalah ${before}`)
    console.log (`hewan setelah jerapah adalah ${after}`)
    console.log (`jerapah itu ada dan dia berapa di posisi index ke ${posisiJerapah}`,)
    } else {
        console.log('tidak tahu posisinya dimana')
    }