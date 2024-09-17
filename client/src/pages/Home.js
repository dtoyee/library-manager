import Breadcrumb from '../components/breadcrumb';
import Menu from '../components/menu';
import SiteTitle from '../components/site-title';
import '../css/style.css'

function Home() {
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
