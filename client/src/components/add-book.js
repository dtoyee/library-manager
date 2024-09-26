import axios from "axios"
import { useState } from "react"

function NewBook() {
    let [bookISBN, setBookISBN] = useState('')
    let [bookTitle, setBookTitle] = useState('')
    let [bookAuthor, setBookAuthor] = useState('')
    let [publishDate, setPublishDate] = useState('')

    const searchISBN = async () => {
        let bookData = await axios.get("http://openlibrary.org/api/books?bibkeys=ISBN:"+bookISBN+"&jscmd=details&format=json")
        let book = Object.values(bookData.data)
        book.map(detail => {
            setBookTitle(detail.details.title)
            setBookAuthor(detail.details.authors[0]['name'])
            setPublishDate(detail.details.publish_date)
        })
    }

    return (
        <>
            <div className="search-holder">
                <div className="searchbox-add-button">
                    <input type="text" className="searchbox" placeholder="Book ISBN" onChange={(e) => {setBookISBN(e.target.value)} } />
                    <a className="add-book-btn" onClick={searchISBN}>Search</a>
                </div>

                <div className="add-book-form-holder">
                    <label className="book-label">Book Title</label>
                    <input type="text" value={bookTitle} disabled />
                    <label className="book-label">Book Author</label>
                    <input type="text" value={bookAuthor} disabled />
                    <label className="book-label">Publish Date</label>
                    <input type="text" value={publishDate} disabled />
                </div>

                <div className="add-book-form-holder">
                    <button className="add-book-btn">Add Book</button>
                </div>
            </div>
        </>
    )
}

export default NewBook