import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";
import { useLoaderData } from "react-router-dom";
function PostDetailPage() {
  const blogDetails = useLoaderData();
  return (
    <>
      <BlogPost title={blogDetails.title} text={blogDetails.body} />
    </>
  );
}

export default PostDetailPage;

export function loader({ params }) {
  const id = params.id;
  return getPost(id);
}
