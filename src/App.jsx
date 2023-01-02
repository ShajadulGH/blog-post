import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage from "./pages/BlogPosts";
import NewPostPage from "./pages/NewPost";
import PostDetailPage from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import { loader as blogLoader } from "./pages/BlogPosts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogPostsPage />} loader={blogLoader} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
        <Route path="/blog/new" element={<NewPostPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
