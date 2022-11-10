const express = require('express')
var bodyParser = require('body-parser')
// const mongoose = require('mongoose')

// const mongoDB = 'mongodb://localhost:27017/phone_api'
// mongoose.connect(mongoDB, {proxyUsername: true, useUnifiedTopology: true});

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// const phoneSchema = new mongoose.Schema({
//     id: Number,
//     name: String,
//     color: String,
//     price: String
// })

// const Phone = mongoose.model('Phone', phoneSchema)
const app = express()
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const port = 3000

const phones = [
    { id: 1, name: "IPhone X", color: "Black", price: "30000000"},
    { id: 2, name: "IPhone X PRO", color: "Green", price: "40000000"}
]

// CRUD = Creat, Read, Update, Delete

app.get("/", (req, res) => {
    res.json(phones)
})

app.get("/phones/:id", (req, res) =>{
    res.json(phones[parseInt(req.params.id) - 1])
})

app.post("/phones", (req, res) => {
    console.log(req.body)
    res.json({message: "OK"})
})

app.put("/phones/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({message: `update phone ${req.params.id}`})
})

app.delete("/phones/:id", (req, res) => {
    console.log(req.params.id)
    res.json({message: `deleting phone ${req.params.id}`})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})