function SearchBar() {
    return(
        <div className="search-holder">
            <div className="searchbox-add-button">
                <input type="text" className="searchbox" />
                <a href="/" className="add-book-btn">Add Book</a>
            </div>
        </div>
    )
}

export default SearchBar