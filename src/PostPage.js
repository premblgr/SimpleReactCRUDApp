import { useParams, Link } from "react-router-dom";

function PostPage({ posts, handleDelete }) {
  const { id } = useParams(); 
  const post = posts.find(
    (post) => post.id.toString() === id
  ); 

  return (
    <main className="postWrapper pwHeight">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button className="deleteBtn" onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
            <Link to={`/edit/post/${post.id}`}>
              <button className="editBtn">Edit Post</button>
            </Link>
          </>
        ) : (
          <>
            <p>No post found</p>
            <Link to="/home">
              <p>back to home</p>
            </Link>
          </>
        )}

      </article>
    </main>
  );
}

export default PostPage;
