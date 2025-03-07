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

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <p>
          &copy; 2025.03 - fait par <b>Chloé Seclier</b> avec la Wild Code
          School
        </p>
      </footer>
    </>
  );
}

export default App;
