var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var routeSaya = require('./route/route')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routeSaya)

app.get('/', (req, res)=>{
    res.send('<h1>Express & Firestore</h1>')
})

app.listen(3210, ()=>{
    console.log('Server aktif @port 3210')
})