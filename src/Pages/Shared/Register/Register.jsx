import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [ registerError , setRegisterError ] = useState('');
  const [ success , setSuccess ] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // reset Error
    setRegisterError('')

    // reset success
    setSuccess('');

    if(password.length < 6){
      setRegisterError('Password should be at least 6 characters or longer.');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your password should have at least one uppercase characters!');
      return;
    }
    else if (!/[a-z]/.test(password)) {
      setRegisterError('Your password should have at least one lowercase character!');
      return;
    }
    else if (!/\d/.test(password)) {
      setRegisterError('Your password should have at least one digit!');
      return;
    }


    // create user:
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess('User created Successfully!');
        
        // navigate after register to login page
        navigate(location?.state ? location.state  : '/');
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
 
  };

  const notify = () => toast("Successfully Registered!");

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero py-20 bg-gray-200 mt-7 rounded-3xl shadow-2xl animate__animated animate__zoomIn"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/tCZMYmNk/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg)",
        }}
      >
        <div className="hero-content w-[90%] mx-auto">
          <div className="card shrink-0 w-full md:w-[900px] max-w-sm shadow-2xl bg-white">
            <form onSubmit={handleRegister} className="card-body p-4">
              <h2 className="text-center text-3xl font-bold pb-10">
                Register Now!
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered border-none bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo url"
                  className="input input-bordered border-none bg-gray-200"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button onClick={notify} className="btn bg-blue-600 hover:bg-blue-700 text-white border-none font-bold text-xl">
                  Register
                </button>
              </div>
              <div>
                <p className="text-center text-xs pt-3">
                  Already Have An Account ? <span></span>
                  <Link to="/login">
                    <span className="text-blue-600 underline font-bold">
                      Login Now
                    </span>
                  </Link>
                </p>
              </div>
            </form>
            {
              registerError && <p className="text-red-600 text-center text-xs mt-0">{registerError}</p>
            }
            {
              success && <p className="text-green-600 text-center text-xs mt-0">{success}</p>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
