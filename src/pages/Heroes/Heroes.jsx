import "./Heroes.css";
import  Heroes  from "../../data/data"
import { NavLink } from "react-router-dom";

const Heroes = () => {
  return (
    <main className="heroes">
      <ul>
        {Heroeses.map((movie) => (
          <li key={Heroes.id}>
            <NavLink to={`/heroes/${Heroes.title}`}>
              <img
                src={Heroes.poster}
                alt={Heroes.title}
                referrerPolicy="no-referrer"
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};