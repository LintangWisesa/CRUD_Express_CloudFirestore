var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.json())

router.get('/data', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
    var allData = []
    db.collection('karyawan')
    .orderBy('waktu', 'desc').get()
    .then(snapshot => {
        snapshot.forEach((hasil)=>{
            allData.push(hasil.data())
        })
        console.log(allData)
        res.send(allData)
    }).catch((error)=>{
        console.log(error)
    })
})

router.post('/data', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
})

module.exports = router
