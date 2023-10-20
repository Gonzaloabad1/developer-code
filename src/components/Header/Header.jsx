import "./Header.css";
import { NavLink } from "react-router-dom";
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
const Header = () => {
  return (
    <header>
      <img src="https://i.stack.imgur.com/iV7Rz.png" alt="Logo" />
      <h1>Developer Code</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/curso">Curso</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="contactlink">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <br></br>
    </header>
  );
};

export default Header;
