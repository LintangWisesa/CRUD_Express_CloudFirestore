var fire = require('./fire')
var db = fire.firestore()

db.settings({
    timestampsInSnapshots: true
})

// send data to cloud firestore
// db.collection('karyawan').add({
//     nama: 'Budi',
//     usia: 23,
//     kota: 'Bandung',
//     waktu: new Date()
// }).then((error, hasil)=>{
//     console.log(hasil)
// })

// get all data from firestore
db.collection('karyawan')
.orderBy('waktu', 'desc').get()
.then(snapshot => {
    snapshot.forEach((hasil)=>{
        console.log(hasil.data())
    })
}).catch((error)=>{
    console.log(error)
})