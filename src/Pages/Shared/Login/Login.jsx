import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();
  // console.log('Location in the login page', location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      console.log(result.user)

    // Navigate after login
    // navigate(location?.state ? location.state  : '/');
    // })
    // .catch(error => {
    //   console.error(error)
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero py-20 bg-gray-200 mt-7 rounded-3xl shadow-2xl"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/tCZMYmNk/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg)",
        }}
      >
        <div className="hero-content w-[90%] mx-auto">
          <div className="card shrink-0 w-full md:w-[900px] max-w-sm shadow-2xl bg-white">
            <form onSubmit={handleLogin} className="card-body p-4">
              <h2 className="text-center text-3xl font-bold pb-2">
                Login Please!
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered border-none bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered border-none bg-gray-200"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none font-bold text-xl">
                  Login
                </button>
              </div>
              {/* Google Github Login Pannel */}
              <div>
                <div className="flex w-full">
                  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    <button className="btn border-none outline outline-1 outline-gray-500">
                      <FaGoogle className="text-xl text-gray-600"/> <span className="text-gray-700">Google</span>
                    </button>
                  </div>
                  <div className="divider divider-horizontal">
                    <span className="text-xs font-bold">OR</span>
                  </div>
                  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                  <button className="btn border-none outline outline-1 outline-gray-500">
                      <FaGithub className="text-xl text-gray-600"/> <span className="text-gray-700">Github</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-center text-xs pt-0">
                  Dont’t Have An Account ? <span></span>
                  <Link to="/register">
                    <span className="text-blue-600 underline font-bold">
                      Register
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
