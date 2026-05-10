import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>

      <div className="footer-main">

        <Link to="/about">
          About Me
        </Link>

        <Link to="/skills">
          Marketable Skills
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/resume">
          Resume
        </Link>

        <Link to="/contact">
          Contact Me
        </Link>

      </div>

      <div className="footer-social">

        <a
          href="https://www.linkedin.com/in/sonia-campana-minchong-b56b2053/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <p>
        © 2026 Sonia Campana
      </p>

    </footer>
  );
}

export default Footer;