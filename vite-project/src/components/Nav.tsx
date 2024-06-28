import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center gap-5 text-white">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Mes Compétences</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Me Contacter</NavLink>
        </li>
      </ul>
    </nav>
  );
}