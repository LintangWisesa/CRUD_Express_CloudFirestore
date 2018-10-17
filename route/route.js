var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.json())

router.get('/data', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
})

router.post('/data', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
})

module.exports = router
