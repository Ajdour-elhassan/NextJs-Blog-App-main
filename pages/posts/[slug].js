import Head from "next/head";
import React, { Fragment } from "react";
import PostContent from "../../Companents/Posts/post-content";
// import { getPostData, getFileNamePath } from "../../Helper/posts-util";

const PostDetail = {
  slug: "nextjs-complete-course",
  title: "nextjs-complete-course",
  image: "getting-started-nextjs.png",
  excerpt: "Nextjs Section",
  date: "2022-09-09",
};

function SinglePostDetailsPage() {
  // const getEverySinglePost = props.postDetails;
  return (
    <Fragment>
      <Head>
        <title> {PostDetail.title} </title>
        <meta name={PostDetail.title} content={PostDetail.excerpt} />
      </Head>
      <PostContent />
    </Fragment>
  );
}

// export function getStaticProps(context) {
//   const { params } = context;
//   const { slug } = params;

//   const GetPostDetails = getPostData(slug);

//   return {
//     props: {
//       postDetails: GetPostDetails,
//     },
//     revalidate: 480,
//   };
// }

// export function getStaticPath() {
//   const postFileNames = getFileNamePath();
//   const slugs = postFileNames.map((filename) => {
//     filename.replace(/\.md$/, "");
//   });
//   return {
//     path: slugs.map((slug) => ({
//       params: { slug: slug },
//     })),
//     fallBack: false,
//   };
// }

export default SinglePostDetailsPage;
