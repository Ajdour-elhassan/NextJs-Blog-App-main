import React from "react";
import classes from "./all-posts.module.css";
import PostGrid from "./Post-grid";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h2> All Blogs </h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
