import express from 'express'
import cors from 'cors'
import { findUserByUsername } from './database.js'
import generateToken from './token.js'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(8000, () => {
    console.log("Server running on port 8000")
})

app.post('/api/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const foundUser = await findUserByUsername("username","users",username)

    if(foundUser[0].username === username) {
        if(foundUser[0].password === password) {
            let userDetails = {
                id: foundUser[0].id,
                username: foundUser[0].username
            }
            let token = generateToken(userDetails)
            res.send({ success: true, user: userDetails, token: token })
        }
    }
})