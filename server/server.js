import express from 'express'
import cors from 'cors'
import { addBook, deleteBook, findUserByUsername, getAllBooks, updatePassword } from './database.js'
import generateToken from './token.js'
import bcrypt from 'bcryptjs'

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
    const encPassword = foundUser[0].password

    if(foundUser[0].username === username) {
        if(bcrypt.compareSync(password, encPassword)) {
            let userDetails = {
                id: foundUser[0].id,
                username: foundUser[0].username
            }
            let token = generateToken(userDetails)
            res.send({ success: true, user: userDetails, token: token })
        }
    }
})

app.post('/api/change-password', (req, res) => {
    const userId = req.body.userId
    const newPassword = req.body.password
    const encPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync())
    updatePassword(encPassword, userId)
    res.send({ success: true })
})

app.post('/api/add-book', (req, res) => {
    const title = req.body.title
    const isbn = req.body.isbn
    const author = req.body.author
    const publish_year = req.body.publish_year
    const slug = req.body.slug
    addBook(title,author,publish_year,isbn,slug)
    res.send({ success: true })
})

app.get('/api/get-all-books', async (req, res) => {
    const allBooks = await getAllBooks()
    res.send({ books: allBooks })
})

app.post("/api/delete-book", (req, res) => {
    const id = req.body.id
    deleteBook(id)
})