import Posts from "../components/Posts";
import { getPosts } from "../util/api";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
function BlogPostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Erorr occured!!!</p>}
        >
          {(loadedData) => <Posts blogPosts={loadedData} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export async function loader() {
  return defer({ posts: getPosts() });
}
