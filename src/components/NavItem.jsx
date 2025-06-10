import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-pink-400 transition duration-200 ${
          isActive ? "border-b-2 border-pink-400 pb-1" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}
