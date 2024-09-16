const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/test', (req, res) => {
    res.send({message: "Hello from the server"})
})

app.listen(8000, () => {
    console.log("Server running on port 8000")
})