import React from "react";
import { Link } from "react-router";
import RegisterPage from "../Authentication/RegisterPage";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 backdrop-blur shadow-md ">
      <div className="navbar max-w-screen-2xl mx-auto px-4 lg:px-8">

        {/* ---------- Navbar Start ---------- */}
        <div className="navbar-start ">

          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>

              <li>
                <details>
                  <summary>Category</summary>
                  <ul className="p-2">
                    <li><Link to="/">Web Design</Link></li>
                    <li><Link to="/">App Development</Link></li>
                    <li><Link to="/">UI/UX Design</Link></li>
                    <li><Link to="/">T-Shirt Design</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="btn btn-ghost text-3xl font-bold hidden md:flex ">
            web<span className="text-blue-600">Code</span>
          </Link>
        </div>

        {/* ---------- Navbar Center (Desktop) ---------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>

            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2 w-44 bg-base-100 shadow rounded-box">
                  <li><Link to="/">Web Design</Link></li>
                  <li><Link to="/">App Development</Link></li>
                  <li><Link to="/">UI/UX Design</Link></li>
                  <li><Link to="/">T-Shirt Design</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* ---------- Navbar End ---------- */}
        <div className="navbar-end gap-3">

          {/* Login (Tablet & Desktop) */}
          <Link
            to="/register"
            className="hidden md:inline-flex btn btn-outline btn-primary"
          >
            Log In
          </Link>

          {/* Free Trial */}
          <Link
            to="/pricing"
            className="btn btn-primary bg-blue-600 border-none hover:bg-blue-800 duration-300 cursor-pointer"
          >
            Start Free Trial
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
