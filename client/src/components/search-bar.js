function SearchBar() {
    return(
        <div className="search-holder">
            <div className="searchbox-add-button">
                <input type="text" placeholder="Search Your Books" className="searchbox" />
                <a href="/books/add" className="add-book-btn">Add Book</a>
            </div>
        </div>
    )
}

export default SearchBar