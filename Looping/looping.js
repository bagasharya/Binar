for (let z = 0; z < 5; z++) {
    console.log('ini untuk  increment = ', z)
}

for (let z = 1; z <= 5; z++) {
    console.log('ini untuk  increment = ', z)
} 


for (let z = 5 ; z >= 1; z--) {
    console.log('ini untuk decrement =', z)
}


for (let z = 1; z <= 5; z++) {
    if (z % 2 == 0)
    console.log('ini menampilkan bilangan genap =', z)
} 


let x = 1
while (x <= 5) {
    console.log('ini untuk while =', x)
    x++
}

let y = 1
do {
    console.log('ini untuk do while =', y)
    y++
} while (y <= 5)

// FOR OF, FOR IN, FOREACH
let keluargaSaya = ['bagas', 'fira', 'bara']
for (let keluarga of keluargaSaya) {
    console.log('ini untuk for of = ', keluarga)
}

const keluargaBesarSaya = ['bagas', 'fira', 'bara']
for (let keluargaBesar in keluargaBesarSaya) {
    console.log('ini untuk for in = ', keluargaBesar)
}

keluargaSaya.forEach(keluarga => {
    console.log('ini untuk foreach =', keluarga)
});

keluargaSaya.forEach((keluarga, index) => {
    console.log('ini untuk foreach variasi =', keluarga, index + 1)
});
