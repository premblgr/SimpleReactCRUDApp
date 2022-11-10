import Feed from "./Feed";

function Home({ posts }) {
  return (
    <main className="home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <div className="NoMessageContainer">
          <p className="noPostsMessage">No Posts to display</p>
        </div>
      )}
  
    </main>
  );
}

export default Home;
