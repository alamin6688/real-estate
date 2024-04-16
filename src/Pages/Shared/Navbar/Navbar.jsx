import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () =>{
      logOut()
      .then(result =>{
          console.log(result.user)
      })
      .catch(error =>{
          console.error(error)
      })
  }

  const navLinks = <>
    <li className="btn px-0"><NavLink to="/">Home</NavLink></li>
    <li className="btn px-0"><NavLink to="/about">About</NavLink></li>
    <li className="btn px-0"><NavLink to="/userProfile">User Profile</NavLink></li>
    <li className="btn px-0"><NavLink to="/updateProfile">Update Profile</NavLink></li>
    <li className="btn px-0"><NavLink to="/login">Login</NavLink></li>
    <li className="btn px-0"><NavLink to="/register">Register</NavLink></li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 w-[98%] mx-auto p-0">
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
          <ul className="menu menu-horizontal p-0">
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
          {
                    user ? 
                    <button onClick={handleSignOut} className="btn btn-primary border-none hover:bg-orange-600 bg-orange-500 text-white ml-2">
                        Log Out
                    </button>
                    :
                    <Link to="/login">
                        <button className="btn btn-primary border-none hover:bg-orange-600 bg-orange-500 text-white ml-2">
                          Login
                        </button>
                    </Link>
                }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
