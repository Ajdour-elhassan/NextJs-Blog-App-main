// Adding Function to read data & fetch data in Markdown!
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "Blogs");

// Get File Path
export function getFileNamePath() {
  const postFiles = fs.readdirSync(postDirectory);
  return postFiles;
}

// We can use it in Single Page Deatils == Slug
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // Remove the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// Get & Export All Posts
export function getAllPost() {
  const postFile = getFileNamePath();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // Get Post with greater date
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

// Get featured Posts
export function getFeaturedPosts() {
  const allPosts = getAllPost();

  const featuredPosts = allPosts.filter((post) => post.isFeatured === true);

  return featuredPosts;
}
