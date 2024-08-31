import { NavLink, Outlet } from "react-router-dom";
import './App.css';

export default function Root() {
  return (
    <div className="container background" >
      <ul className="nav bg-light mb-3 border-bottom">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">
            Shop
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
