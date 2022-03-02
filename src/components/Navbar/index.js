import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  var [username, setUsername] = useState("Pham Nhat Minh");
  return (
    <>
      <nav id="navbar">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
        </ul>

        <div className="nav-details">
          <p className="nav-username"> {username} </p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
