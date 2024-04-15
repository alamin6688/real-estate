import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = <>
    <li className=""><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li className="mr-2"><NavLink to="/login">Login</NavLink></li>
    <li className="mr-2"><NavLink to="/register">Register</NavLink></li>

 
  </>

  return (
    <div>
      <div className="navbar bg-base-100 w-[98%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div><Link to="/">
            <button className="btn btn-ghost font-bold text-xl md:text-2xl pl-0 md:pl-2 text-black">
              Unity Estates
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end mr-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          <div>
            <Link to="/login">
              <button className="btn bg-gray-400 ml-2 text-black border-none">Login</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
