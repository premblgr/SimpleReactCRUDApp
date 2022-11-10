import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import { format } from "date-fns";
import api from "./api/posts";
import EditPost from "./EditPost";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const history = useNavigate();
  const [posts, setPosts] = useState(
    []
  );


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
      
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
         
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error:${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []); 

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newObj = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: postTitle,
        datetime: format(new Date(), "MMMM dd, yyyy pp"),
        body: postBody,
      };
      const response = await api.post("/posts", newObj);
      setPosts([...posts, response.data]);
      setPostTitle("");
      setPostBody("");
      history("/home");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(
        `http://localhost:3500/posts/${id}`
      ); 
      const newArr = posts.filter((item) => item.id !== id);
      setPosts(newArr);
      history("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEdit = async (id) => {
    const updatedObj = {
      id: id,
      title: editTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedObj);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      history("/");
    } catch (err) {
      console.log(`error:${err.message}`);
    }
  };

  return (
    <div className="app">
      <Header title={"React Js Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        {["/", "home"].map((route, i) => (
          <Route
            path={route}
            key={i}
            element={<Home posts={searchResults} />}
          />
        ))}
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          path="edit/post/:id"
          element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editBody={editBody}
              setEditBody={setEditBody}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
