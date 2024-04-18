import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Unity Estates | User Profile</title>
      </Helmet>
      <div className="bg-gray-200 mt-6 p-5 md:p-10 rounded-xl shadow-2xl animate__animated animate__zoomIn">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl mx-auto">User Profile:</h1>
          <img src={user.photoURL} className="rounded-full w-1/6"/>
          <h1 className="text-xl text-center mb-0">
            Name: {user.displayName}
          </h1>
          <h1 className="text-xl text-center">
            Email: {user.email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
