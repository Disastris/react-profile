import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex justify-between p-5">
        <h1 className="text-3xl">Logo</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/">About</Link> {/* <a href="/about">About</a> */}
            </li>
            <li>
              <Link to="/Project">Project</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
