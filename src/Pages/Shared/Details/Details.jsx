import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbProgressAlert } from "react-icons/tb";
import { Helmet } from "react-helmet";

const Details = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id === parseInt(id));
  console.log(estate);
  return (
    <div>
      <Helmet>
        <title>Unity Estates | Details - {id}</title>
      </Helmet>
      <h1 className="text-center text-4xl mt-10 mb-10 mx-auto pt-10 pb-10 bg-gray-200 rounded-2xl shadow-2xl animate__animated animate__zoomIn">Estate Details</h1>
      <div className=" bg-gray-200 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-center p-5 md:p-10 animate__animated animate__zoomIn">
        {/*image */}
        <figure className=" flex-1">
          <img src={estate.image} className="rounded-xl w-full" />
        </figure>

        {/* texts */}
        <div
          className=" items-start 
         flex-1"
        >
          <div className="space-y-3">
            <h2 className=" text-3xl text-start">{estate.estate_title}</h2>
            <h2 className=" text-xl text-start">{estate.segment_name}</h2>
            <p className=" text-lg text-start">{estate.description}</p>
          </div>
          <div className="space-y-2">
            <p className="text-start font-bold text-xl">Facilities:</p>
            {estate.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </div>
          <div className="flex flex-col space-y-0 mt-5">
            <div className="flex justify-start items-center  space-x-2 pt-0">
              <IoLocationSharp className="text-orange-400"></IoLocationSharp>
              <p className="font-bold uppercase">{estate.location}</p>
            </div>
            <div className="flex justify-start items-center space-x-2 pt-0">
              <TbProgressAlert className="text-orange-400" />
              <p className="font-bold uppercase">{estate.status}</p>
            </div>
            <div className="flex justify-start items-center space-x-2 pt-0">
              <FaDollarSign className="text-orange-400 text-xl" />
              <p className="font-bold uppercase">{estate.price}</p>
            </div>
            <div>
            <h2 className=" font-normal text-lg text-start">
                <strong>Area:</strong> {estate.area}
              </h2>
            </div>
          </div>
          <div className="">
            <Link>
              <button className="btn btn-primary border-none hover:bg-orange-600 bg-orange-500 text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
