// import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
// import Image from "next/image";

const dummy_data = {
  slug: "nextjs-complete-course",
  title: "Jsx Syntax for reactJs Developer",
  image: "getting-started-nextjs.png",
  date: "2022-09-09",
  content: "# this is a first mardown post",
};

function PostContent() {
  const imagePath = `/images/posts/${dummy_data.slug}/${dummy_data.image}`;

  // const CutomRenders = {
  // image(image) {
  //   return (
  //     <Image
  //       src={`/images/posts/${post.slug}/${image.url}`}
  //       alt={image.alt}
  //       width={600}
  //       width={400}
  //     />
  //   );
  // },
  //   paragraph(paragraph) {
  //     const { node } = paragraph;

  //     if (node.children[0].type == "image") {
  //       const image = node.children[0];

  //       return (
  //         <div className={classes.image}>
  //           <Image
  //             src={`/images/posts/${post.slug}/${image.url}`}
  //             alt={image.alt}
  //             width={600}
  //             width={400}
  //           />
  //         </div>
  //       );
  //     }
  //     return <p> {paragraph.children} </p>;
  //   },
  // };
  return (
    <article className={classes.content}>
      <PostHeader title={dummy_data.title} image={imagePath} />
      {/* <ReactMarkdown renderers={CutomRenders}> {posts.content} </ReactMarkdown> */}
    </article>
  );
}

export default PostContent;
