import { BrowserRouter, Routes, Route } from "react-router-dom";
import createStore from 'react-auth-kit/createStore'
import AuthProvider from 'react-auth-kit'
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login";

function App() {
  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  })

  return (
    <AuthProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
