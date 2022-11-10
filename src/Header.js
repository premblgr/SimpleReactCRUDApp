import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header>
      <div className="header">
        <Link className="headerLink" to="/Home">
          <h1 className="title">{title}</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
