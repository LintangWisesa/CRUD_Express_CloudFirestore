var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/data', (req, res)=>{

})

router.post('/data', (req, res)=>{
    
})

module.exports = router
