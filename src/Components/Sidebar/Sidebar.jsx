import { useState } from "react";
import "../../App.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a href="https://uptime.eglo.pw" target="_blank">Uptime</a>
              </li>
              <li>
                <a>Learn</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Docs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a href="https://uptime.eglo.pw" target="_blank">Uptime</a>
            </li>
            <li>
              <a>Learn</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Docs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://app.eglo.pw/login"
            className="btn btn-outline btn-primary mr-3"
          >
            Login
          </a>
          <a
            href="https://app.eglo.pw/register"
            className="btn btn-outline btn-secondary"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
