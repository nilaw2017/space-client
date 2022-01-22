import BlogList from "./components/blog-list/BlogList.component";
import FbPost from "./components/fb-post-list/fbPost.component";
import NavBar from "./components/nav-bar/NavBar.component";
import Tracker from "./components/tracker/Tracker";

function App() {
  return (
    <div>
      <NavBar />
      <Tracker />
      <BlogList />
      <FbPost />
    </div>
  );
}
export default App;
