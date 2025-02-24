import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar1">
          <Link to="/">
            <h1>Wild Series</h1>
          </Link>
        </div>

        <div className="navbar2">
          <Link to="/programs">Séries</Link>
          <Link to="/categories">Catégories</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </>
  );
}

export default App;
