import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    //create user:
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
