import Breadcrumb from '../components/breadcrumb';
import Menu from '../components/menu';
import SearchBar from '../components/search-bar';
import SiteTitle from '../components/site-title';
import '../css/style.css'

function Books() {
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
            <SearchBar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Books;
