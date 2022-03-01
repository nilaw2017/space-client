import { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavMenu from "./nav-menu/NavMenu.component";
import HomePage from "./home-page/Home.component";
import BlogList from "./blog-page/BlogList.component";
import SingleBlog from "./blog-page/SingleBlog.component";
import Footer from "./footer/Footer.component";
import AboutUsPage from "./aboutUs-page/AboutUs.component";
import FbPost from "./fb-post-list/FbPosts.component";
import ServicePage from "./service-page/ServicePage.component";
import Tracker from "./service-page/Tracker";

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <header>
          <BrowserRouter>
            <NavMenu />
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/tracker/:orderId" element={<Tracker />} />

              <Route path="/blogs" element={<BlogList />}></Route>
              <Route path="/blog/:blogId" element={<SingleBlog />} />
              {/* <Route
              path="/contact"
              component={Contact}
              element={<Contact />}
            ></Route> */}
              <Route path="/posts" element={<FbPost />} />
            </Routes>
          </BrowserRouter>
        </header>
        <Footer />
      </div>
    );
  }
}
