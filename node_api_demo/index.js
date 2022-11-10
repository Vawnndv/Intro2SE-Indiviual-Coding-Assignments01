const express = require('express')
const app = express()

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

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})