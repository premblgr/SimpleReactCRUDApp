import { Link } from "react-router-dom";

function Missing() {
  return (
    <main className="missing">
      <h2>Page not found</h2>
      <p>
        <Link to="/home">Back to home</Link>
      </p>
    </main>
  );
}

export default Missing;
