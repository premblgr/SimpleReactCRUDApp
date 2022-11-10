import { Link } from "react-router-dom";

function Nav({ search, setSearch }) {
  return (
    <nav>
      <div className="nav">
        <div className="formWrapper">
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search"></label>
            <input
              className="searchInput"
              id="search"
              type="text"
              placeholder="Search Posts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
        </div>
        <div>
          <ul className="navList">
            <li>
              <Link className="navLinks" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/post">
                Posts
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
