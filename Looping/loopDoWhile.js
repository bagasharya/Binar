let d = 1
do {
    if (d % 2 == 0) {
        console.log('Mengepel dilantai ke -', d )
    } else {
        if (d % 2 !== 0) {
        console.log("Menyapu dilantai ke -", d )
        }
    } console.log()
d++
} while (d <= 10)