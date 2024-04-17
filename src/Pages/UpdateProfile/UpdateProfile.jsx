import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(name, photo);

    //update
    updateUserProfile(name, photo).then(() => {
      e.target.reset();
    });
  };
  return (
    <div className="animate__animated animate__zoomIn">
      <Helmet>
        <title>Unity Estates | Update Profile</title>
      </Helmet>
      <div className="bg-gray-200 mt-6 p-5 md:p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl text-center">Update Profile:</h2>
        <div className="flex flex-col w-3/4 mx-auto justify-center">
          <div className="flex  flex-col lg:flex-row items-center">
            <div className="text-lg font-bold">Name: &nbsp;</div>
            <div>
              <h1 className="text-lg "> {user.displayName}</h1>
            </div>
          </div>

          <div className="flex  flex-col lg:flex-row items-center">
            <div className="text-lg font-bold">Photo URL: &nbsp;</div>
            <div>
              <h1 className="text-lg "> {user.photoURL}</h1>
            </div>
          </div>
        </div>
        <hr className="w-3/4 border-dashed border-gray-400" />
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col items-center justify-center">
            <div className="form-control w-3/4 mb-6">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered  border-none bg-gray-100"
                required
              />
            </div>
            <div className="form-control w-3/4">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered border-none bg-gray-100"
                required
              />
            </div>
            <div className="form-control w-3/4 mt-10">
                <button className="btn btn-ghost hover:bg-blue-600 bg-blue-500 text-xl text-white rounded-xl w-full">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
