import { useNavigate } from "react-router-dom" 
import useSignOut from 'react-auth-kit/hooks/useSignOut'

function Menu({page}) {
    const navigate = useNavigate()
    const signOut = useSignOut()

    const logout = () => {
        signOut()
        navigate('/login')
    }
    return (
        <>
            <a href="/" className={page === "index" ? "active-menu-link" : "menu-link"}>Home</a>
            <a href="/books" className={page === "books" ? "active-menu-link" : "menu-link"}>Books</a>
            <a href="/settings" className={page === "settings" ? "active-menu-link" : "menu-link"}>Settings</a>
            <a href="" className="menu-link" onClick={logout}>Logout</a>
        </>
    )
}

export default Menu