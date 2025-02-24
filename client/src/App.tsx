import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar1">
          <h1>Welcome to Wild Series</h1>
        </div>

        <div className="navbar2">
          <Link to="/programs">Séries</Link>
          <Link to="/categories">Catégories</Link>
        </div>
      </nav>

      <main>...main...</main>

      <footer>footer</footer>
    </>
  );
}

export default App;
