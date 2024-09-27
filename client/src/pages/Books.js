import { useEffect } from 'react';
import Breadcrumb from '../components/breadcrumb';
import Menu from '../components/menu';
import SiteTitle from '../components/site-title';
import '../css/style.css'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { useNavigate } from 'react-router-dom';
import AllBooks from '../components/all-books';

function Books() {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    if(!isAuthenticated) {
      navigate('/login')
    }
  }, [])
  return (
    <main className="wrapper">
      <div className="container">
        <div className="row-container">
          <div className="col-1">
            <Menu page={"books"} />
          </div>
          <div className="col-2">
            <SiteTitle />
            <Breadcrumb
              links={[
                {
                  linkName: "Home",
                  activeLink: true,
                  toPage: "/",
                  separator: "/",
                },
                { linkName: "Books", activeLink: false },
              ]}
            />
            <AllBooks />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Books;
