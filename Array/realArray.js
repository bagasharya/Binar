
const datas = [
    {
        nama: "bagas",
        job : "FSW",
        age : "26"
    },
    {
        nama: "fira",
        job : "bisnis",
        age : "24"
    },
    {
        nama: "rosma",
        job : "karyawan",
        age : "25"
    }
]

datas.map((values, index) => {
    console.log(values.nama, values.job) //memunculkan yang dipilih
    console.log(values) //memunculkan semua
})

datas.sort((a,b) => b.age - a.age).map(values => console.log(values)) //cara mengurutkan kebesar - kecil
datas.sort((a,b) => a.age - b.age).map(values => console.log(values)) //cara mengurutkan kecil - kebesar

datas.filter((x) => x.age >= 25).map((values) => console.log(values)) //memfilter umur >= 25

datas
    .sort((a,b) => a.age - b.age)
    .filter((x) => x.age >= 25)
    .map((values) => console.log(values)) // variasi