import { useEffect } from 'react';
import Breadcrumb from '../components/breadcrumb';
import Menu from '../components/menu';
import SiteTitle from '../components/site-title';
import '../css/style.css'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { useNavigate } from 'react-router-dom';

function Home() {
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
            <Menu page={"index"} />
          </div>
          <div className="col-2">
            <SiteTitle />
            <Breadcrumb
              links={[
                {
                  linkName: "Home",
                  activeLink: false
                }
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
