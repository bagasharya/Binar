
// cara menggabungkan 2 array

const arrayHewan = ['🐔', '🐺', '🐸']
const arrayBuah = ['🍇', '🥑', '🥕']

const mergeArray = arrayHewan.concat(arrayBuah) //cara ini untuk menggabungkan 2 buah array

console.log(mergeArray)

//memapping sebuah data dan memecah data array yang sudah terkombain 
//list adalah hasil akhir dari loopingan (mergeArray yang kita lakukan)
for(list of mergeArray) console.log (list) //menghasilkan urutan array yang sudah terkombain

// untuk in menampilkan urutan index
for(list in mergeArray) console.log (list) //menghasilkan urutan index 

// untuk menampilan keduanya index dan value
mergeArray.map((value, index) => console.log(value, index))
