import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../../../Firebase/firebase.config";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);
  console.log(app)
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Google Sign In
  const handleGoogleSignIn = () =>{
    console.log('Google handle clicked')
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);

      toast.success('Login successful!', { autoClose: 1800 });
      setTimeout(() => {
          // Navigate after a delay of 1800ms 
          navigate(location?.state ? location.state : '/');
      }, 1900);
    })
    .catch(error => {
      console.error(error.message)
    })
  }

  // Github Sign In
  const handleGithubSignIn = () =>{
    console.log('Github handle clicked');
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);

      toast.success('Login successful!', { autoClose: 1800 });
      setTimeout(() => {
          // Navigate after a delay of 1800ms 
          navigate(location?.state ? location.state : '/');
      }, 1900);
    })
    .catch(error => {
      console.error(error.message)
    })
  }

  
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('Location in the login page', location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email,password)
    .then(result => {
      console.log(result.user)
      
    // Navigate after login
    navigate(location?.state ? location.state  : '/');
    })
    .catch(error => {
      console.error(error)
    })
  };

  return (
    <div>
       <Helmet>
        <title>Unity Estates | Login</title>
      </Helmet>
      <div
        className="hero py-20 bg-gray-200 mt-7 rounded-3xl shadow-2xl animate__animated animate__zoomIn"
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
                <div className="relative">
              <input
                  type={ showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered border-none bg-gray-200 w-[90%]"
                  required />
                <span 
                className="absolute top-4 right-3" 
                onClick={()=> setShowPassword(!showPassword)}>
                  {
                    showPassword ? <IoEyeOff className="text-xl"/> : <IoEye className="text-xl"/>
                  }
                </span>
              </div>
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
                    <button onClick={handleGoogleSignIn} className="btn border-none outline outline-1 outline-gray-500">
                      <FaGoogle className="text-xl text-gray-600"/> <span className="text-gray-700">Google</span>
                    </button>
                  </div>
                  <div className="divider divider-horizontal">
                    <span className="text-xs font-bold">OR</span>
                  </div>
                  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                  <button onClick={handleGithubSignIn} className="btn border-none outline outline-1 outline-gray-500">
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
