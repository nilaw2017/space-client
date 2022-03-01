import { Component } from "react";
import { Link } from "react-router-dom";
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
    // fetch(
    //   `http://localhost:1337/api/blogs?fields=blogTitle,blogContent&populate=featuredImage`
    // )
    fetch(`http://localhost:1337/api/blogs?populate=*`)
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
  }
  render() {
    return (
      <div className="container d-flex-column d-md-flex justify-content-center">
        {this.state.blogs.map(({ id, attributes }) => (
          <div className="blogs card" key={id}>
            <Link to={`/blog/${attributes.BlogID}`}>
              <div>
                <img
                  className="card-img blogs-img"
                  src={`http://localhost:1337${attributes.FeaturedImage.data.attributes.url}`}
                  alt="Image"
                />
                <hr />
                <div className="text-center">
                  <h5 className="card-title">{attributes.BlogTitle}</h5>
                  <p>{attributes.BlogBody}</p>
                </div>
                <div className="text-center">
                  <h5 className="card-title">{attributes.BlogTitle}</h5>
                  <p>{attributes.Description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
