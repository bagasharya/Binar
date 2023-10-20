// Note bos : Boleh kelola array original tapi jangan sampai merubah nilai originalnya


const arraySaya = ['🐵', '🐺', '🦒', '🐸', '🐔'] //Original

//contoh salah = nilai original akan ikut tertukar apabila kita kelola dengan cara syntax dibawah
const newArraySaya = arraySaya //KW

newArraySaya[0] = '😎' // ini akan merubah nilai originalnya juga 

console.log ({arraySaya})
console.log ({newArraySaya})

// agar nilai original tidak tertukar bisa menggunakan beberapa cara ini
const newArraySaya = [...arraySaya]
const newArraySaya = arraySaya.slice()
const newArraySaya = Array.from(arraySaya)
const newArraySaya = JSON.parse(JSON.stringify(arraySaya))
