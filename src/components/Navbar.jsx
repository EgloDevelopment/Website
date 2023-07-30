import { useState } from "react";

function Component(props) {
  return (
    <>
      <div className="navbar bg-base-200 fixed left-0 top-0 z-50">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-secondary"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="https://uptime.eglo.pw" target="_blank">
                  Uptime
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="/">Eglo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="https://uptime.eglo.pw" target="_blank">
                Uptime
              </a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-ghost capitalize mr-5"
            href="https://app.eglo.pw/login"
            target="_blank"
          >
            Login
          </a>
          <a
            className="btn btn-secondary capitalize"
            href="https://app.eglo.pw/register"
            target="_blank"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
}

export default Component;
