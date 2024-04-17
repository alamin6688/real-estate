import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {

    const {id} = useParams();

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[98%] mx-auto px-0 md:px-0">
        <h2 className="text-center mt-10 mb-10 mx-auto pt-10 pb-10 bg-gray-200 rounded-2xl outline-dashed outline-gray-300 animate__animated animate__zoomIn">
          Residential Estates Details
        </h2>
      </div>
      <div>
        <div className="card lg:card-side bg-gray-200 shadow-xl animate__animated animate__slideInDown">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{id}</h2>
            <p>arghahr</p>
            <p>arghahr</p>
            <p>arghahr</p>
            <p>arghahr</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
