import { Component } from "react";
import fetch from "isomorphic-fetch";
import "./fb-post.component.css";

export default class FbPost extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:1337/api/posts`)
      .then((res) => {
        if (res.status >= 400) {
          console.log("Bad Response from server");
        }
        return res.json();
      })
      .then((posts) => {
        this.setState({
          posts: posts.data,
        });
      });
  }

  render() {
    const fbEmbed = (
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fspaceenterprises799%2Fposts%2F150967643943842&show_text=false&width=500"
        width="500"
        height="250"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    );
    return (
      <div>
        <h1>Gallery</h1>

        <div>
          {this.state.posts.map(({ id, attributes }) => (
            <div key={id}>
              <iframe
                src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fspaceenterprises799%2Fposts%${attributes.post}&show_text=false&width=500`}
                width="500"
                height="500"
                style={({ border: "none" }, { overflow: "hidden" })}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
