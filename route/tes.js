var fire = require('./fire')
var db = fire.firestore()

db.settings({
    timestampsInSnapshots: true
})

// send data to cloud firestore
db.collection('karyawan').add({
    nama: 'Budi',
    usia: 23,
    kota: 'Bandung',
    waktu: new Date()
}).then((error, hasil)=>{
    console.log(hasil)
})

// get all data from firestore
var allData = []
db.collection('karyawan')
.orderBy('waktu', 'desc').get()
.then(snapshot => {
    snapshot.forEach((hasil)=>{
        allData.push(hasil.data())
        console.log(allData)
    })
}).catch((error)=>{
    console.log(error)
})