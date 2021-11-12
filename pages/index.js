import Head from "next/head";
import React, { Fragment } from "react";
import Hero from "../Companents/HomePage/Hero";
import FeaturedPost from "../Companents/HomePage/FeaturedPosts";
// import { getFeaturedPosts } from "../Helper/posts-util";

const AllFeaturedPosts = [
  {
    slug: "nextjs-complete-course",
    title: "nextjs-complete-course",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs Section",
    date: "2022-09-09",
  },
];

const HomePage = () => {
  // const AllFeaturedPosts = props.featuredAllPost;
  return (
    <Fragment>
      <Head>
        <title> DieseBlog </title>
        <meta
          name="description"
          content=" I Post about programming & web development "
        />
      </Head>
      <Hero />
      <FeaturedPost posts={AllFeaturedPosts} />
    </Fragment>
  );
};

// export function getStaticProps() {
//   const featuredPost = getFeaturedPosts();
//   return {
//     props: { featuredAllPost: featuredPost },
//   };
// }

export default HomePage;
