import Head from "next/Head";
import { Fragment } from "react";
import AllPosts from "../../Companents/Posts/all-posts";
// import { getAllPost } from "../../Helper/posts-util";

const AllPost = [
  {
    slug: "nextjs-complete-course",
    title: "nextjs-complete-course",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs Section",
    date: "2022-09-09",
  },
  {
    slug: "nextjs-complete-course-1",
    title: "nextjs-complete-course",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs Section",
    date: "2022-09-09",
  },
  {
    slug: "nextjs-complete-course-2",
    title: "nextjs-complete-course",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs Section",
    date: "2022-09-09",
  },
];

const AllPostsPage = () => {
  // const AllPost = props.Posts;
  return (
    <Fragment>
      <Head>
        <title> All Blogs </title>
        <meta name="all Blogs" content="All Blogs and post" />
      </Head>
      <AllPosts posts={AllPost} />;
    </Fragment>
  );
};

// export function getStaticProps() {
//   const allPosts = getAllPost();
//   return {
//     props: {
//       Posts: allPosts,
//     },
//   };
// }

export default AllPostsPage;
