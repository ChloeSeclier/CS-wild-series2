import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>header</header>

      <nav>nav</nav>

      <main>
        Welcome to Wild Series
        <Link to="/programs">PROGRAM</Link>
      </main>

      <footer>footer</footer>
    </>
  );
}

export default App;
