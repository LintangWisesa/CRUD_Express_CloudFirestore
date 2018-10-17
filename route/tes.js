var fire = require('./fire')
var db = fire.firestore()

db.settings({
    timestampsInSnapshots: true
})

db.collection('karyawan').add({
    nama: 'Budi',
    usia: 23,
    kota: 'Bandung',
    waktu: new Date()
}).then((error, hasil)=>{
    console.log(hasil)
})