import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";
const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">Online Booking</div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            Menu
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/appointment">New Appointment</Link>
              </li>
              <li>
                <Link to="/check">Check Booking</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
