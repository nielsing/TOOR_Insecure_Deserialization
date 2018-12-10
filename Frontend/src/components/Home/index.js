import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { getPosts } from "../../actions/postsActions";

//CSS
import styles from "./Home.module.css";

//Our components
import Post from "../Post";

class Home extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, error } = this.props;
    let postsJSX = posts.map(post => <Post key={post.id} post={post} />);
    if (error) {
      postsJSX = <div>The posts could not be fetched at this time.</div>;
    }
    return <div className={styles["container"]}>{postsJSX}</div>;
  }
}

const mapStateToProps = ({ auth, posts }) => ({
  user: auth.username,
  posts: posts.posts,
  error: posts.error
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Home);
