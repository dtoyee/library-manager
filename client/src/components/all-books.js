import { useEffect, useState } from "react";
import axios from "axios";

function AllBooks() {
  const [allBooks, setBooks] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const getAllBooks = async () => {
    await axios.get("http://localhost:8000/api/get-all-books").then((data) => {
      data.data.books.map((book) => {
        setBooks((allBooks) => [...allBooks, book]);
      });
    });
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const deleteBook = (id) => {
    const newList = allBooks.filter((book) => book.id !== id);
    const book = JSON.stringify({
      id: id,
    });
    setBooks(newList);
    axios.post("http://localhost:8000/api/delete-book", book, config);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <div className="search-holder">
        <div className="searchbox-add-button">
          <input
            type="text"
            placeholder="Search Your Books"
            className="searchbox"
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          />
          <a href="/books/add" className="add-book-btn">
            Add Book
          </a>
        </div>
      </div>
      <table className="table" cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allBooks
            .filter((book) => book.title.toLowerCase().includes(searchVal))
            .map((book) => {
              return (
                <tr>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publish_year}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteBook(book.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default AllBooks;
