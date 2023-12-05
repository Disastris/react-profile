import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex justify-between p-5">
        <h1 className="text-3xl">Santiago Garcia-Chavez</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/">About</Link> {/* <a href="/about">About</a> */}
            </li>
            <li>
              <Link to="/Project">Project</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="flex justify-center gap-16 py-5 text-gray-600">
        <SocialIcon url="https://github.com/Disastris" network="github" />
        <SocialIcon
          url="https://www.linkedin.com/in/santiago-garcia-chavez-609463179/"
          network="linkedin"
        />
      </footer>
    </>
  );
}

export default App;
