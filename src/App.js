import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import Register from "./pages/register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/createPost";
import PostPage from "./pages/postPage";
import EditPost from "./pages/editPost";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />

            <Route path={"/create"} element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
