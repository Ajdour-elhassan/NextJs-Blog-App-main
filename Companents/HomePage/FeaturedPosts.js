import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostGrid from "../Posts/Post-grid";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featues Post</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
