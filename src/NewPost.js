function NewPost({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) {
  return (
    <main className="newPost">
      <div className="formContainer">
        <form className="newPostForm" onSubmit={handleSubmit}>
          <h2 className="formTitle">New Post</h2>
          <label htmlFor="postTitle">Title : </label>
          <input
            className="titleInput"
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postbody">Post : </label>
          <textarea
            className="bodyInput"
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <button className="newPostSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default NewPost;
