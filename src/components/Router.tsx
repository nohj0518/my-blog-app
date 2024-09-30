import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostList from "pages/posts";
import PostPage from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import ProfilePage from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/posts" element={<PostList />}></Route>
            <Route path="/posts/:id" element={<PostPage />}></Route>
            <Route path="/posts/new" element={<PostNew />}></Route>
            <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route
              path="*"
              element={<Navigate replace to="/"></Navigate>}
            ></Route>
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="*" element={<LoginPage />}></Route>
          </>
        )}
      </Routes>
    </>
  );
}
