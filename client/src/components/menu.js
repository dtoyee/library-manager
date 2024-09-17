function Menu({page}) {
    return (
        <>
            <a href="/" className={page == "index" ? "active-menu-link" : "menu-link"}>Home</a>
            <a href="/books" className={page == "books" ? "active-menu-link" : "menu-link"}>Books</a>
            <a href="" className={page == "settings" ? "active-menu-link" : "menu-link"}>Settings</a>
            <a href="" className="menu-link">Logout</a>
        </>
    )
}

export default Menu