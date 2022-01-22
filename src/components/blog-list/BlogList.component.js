import { Component } from "react";
import fetch from "isomorphic-fetch";
import "./blog-list.component.css";

export default class BlogList extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:1337/api/blogs?fields=blogTitle,blogContent&populate=featuredImage`
    )
      .then((res) => {
        if (res.status >= 400) {
          console.log("Bad Response from server");
        }
        return res.json();
      })
      .then((blogs) => {
        this.setState({
          blogs: blogs.data,
        });
      });
    // console.log("BLOG Mount>>", this.state.blogs);
  }
  render() {
    console.log("BLOG update>>", this.state.blogs);

    return (
      <div className="container d-flex-column d-md-flex justify-content-center">
        {this.state.blogs.map(({ id, attributes }) => (
          <div className="blogs card" key={id}>
            <img
              className="card-img blogs-img"
              src={`http://localhost:1337${attributes.featuredImage.data.attributes.url}`}
              alt=""
            />
            <hr />
            <div className="text-center">
              <h5 className="card-title">{attributes.blogTitle}</h5>
              <p>{attributes.blogContent}</p>
            </div>
          </div>
        ))}
      </div>
      // </div>
    );
  }
}
