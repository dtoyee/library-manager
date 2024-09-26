import axios from "axios"
import { useState } from "react"

function NewBook() {
    let [bookISBN, setBookISBN] = useState('')
    let [bookTitle, setBookTitle] = useState('')
    let [bookAuthor, setBookAuthor] = useState('')
    let [publishYear, setPublishYear] = useState('')

    const searchISBN = async () => {
        // TO DO: check if an ISBN has been entered
        let bookData = await axios.get("http://openlibrary.org/api/books?bibkeys=ISBN:"+bookISBN+"&jscmd=details&format=json")
        let book = Object.values(bookData.data)
        book.map(detail => {
            setBookTitle(detail.details.title)
            setBookAuthor(detail.details.authors[0]['name'])
            setPublishYear(detail.details.publish_date)
        })
    }

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    const addBook = () => {
        // TO DO: check if an ISBN has been entered
        let slug = bookTitle.replaceAll(" ", "-")
        let bookDetails = JSON.stringify({
            title: bookTitle,
            isbn: bookISBN,
            author: bookAuthor,
            publish_year: publishYear,
            slug: slug
        })
        axios.post("http://localhost:8000/api/add-book", bookDetails, config)
            .then(res => {
                if(res.data.success) {
                    console.log("added")
                    setBookISBN("")
                    setBookTitle("")
                    setBookAuthor("")
                    setPublishYear("")
                    // TODO: display message that informs the user that the book has been added
                }
            })
    }

    return (
        <>
            <div className="search-holder">
                <div className="searchbox-add-button">
                    <input type="text" className="searchbox" placeholder="Book ISBN" onChange={(e) => {setBookISBN(e.target.value)} } value={bookISBN} />
                    <a className="add-book-btn" onClick={searchISBN}>Search</a>
                </div>

                <div className="add-book-form-holder">
                    <label className="book-label">Book Title</label>
                    <input type="text" value={bookTitle} disabled />
                    <label className="book-label">Book Author</label>
                    <input type="text" value={bookAuthor} disabled />
                    <label className="book-label">Publish Year</label>
                    <input type="text" value={publishYear} disabled />
                </div>

                <div className="add-book-form-holder">
                    <button className="add-book-btn" disabled={false} onClick={addBook}>Add Book</button>
                </div>
            </div>
        </>
    )
}

export default NewBook