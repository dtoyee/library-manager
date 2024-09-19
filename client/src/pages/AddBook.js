import { useEffect } from "react";
import axios from 'axios';
import Breadcrumb from "../components/breadcrumb";
import Menu from "../components/menu";
import SiteTitle from "../components/site-title";
import NewBook from "../components/add-book";
import "../css/style.css";

function AddBook() {
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
                {
                  linkName: "Books",
                  activeLink: true,
                  toPage: "/books",
                  separator: "/",
                },
                { linkName: "Add Book", activeLink: false },
              ]}
            />
            <NewBook />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddBook;
