import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function EditPost({
  handleEdit,
  editTitle,
  setEditBody,
  editBody,
  setEditTitle,
  posts,
}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main>
      {editTitle && 
        <div className="formContainer" >
          <form className="editPostForm" onSubmit={(e) => e.preventDefault()}>
            <h2 className="formTitle">Edit Post</h2>
            <label htmlFor="postTitle">Title : </label>
            <input
              className="titleInput"
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postbody">Post : </label>
            <textarea
              className="bodyInput"
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              className="newPostSubmit"
              type="submit"
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
          </div>
      }
      {!editTitle && (
        <>
          <p>No post found</p>
          <Link to="/home">
            <p>back to home</p>
          </Link>
        </>
      )}
    </main>
  );
}

export default EditPost;
