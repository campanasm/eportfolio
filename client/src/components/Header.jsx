import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header() {

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
        ? "enabled"
        : "disabled"
    );
  };

  return (
    <header>

      <div className="header-left">

        <img
          src="./images/headshot.jpg"
          alt="Portrait of Sonia Campana"
          className="profile-pic"
        />

        <h1 className="logo">
          Sonia Campana
        </h1>

      </div>

      <nav>
        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>

      <button onClick={toggleDarkMode}>
        Toggle Dark/Light Mode
      </button>

    </header>
  );
}

export default Header;