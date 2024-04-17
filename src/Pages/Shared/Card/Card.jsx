import { FaDollarSign } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbProgressAlert } from "react-icons/tb";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Card = ({ Acard }) => {
  const { id, estate_title, price,location, image,status, facilities } = Acard;

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="card w-full bg-gray-200 shadow-2xl outline-dashed outline-gray-300" data-aos="zoom-in">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-3xl h-[200px]"
        />
      </figure>
      <div className="card-body items-start text-center pt-0">
        <h2 className="card-title text-2xl text-start">{estate_title}</h2>
        <div>
        <p className="text-start font-bold text-xl">Facilities:</p>
        <ul className="text-start pl-5 space-y-2">
            <li>{facilities[0]}</li>
            <li>{facilities[1]}</li>
            <li>{facilities[2]}</li>
        </ul>
        </div>
        <div className="flex justify-center items-center space-x-2 pt-0">
            <IoLocationSharp className="text-orange-400"></IoLocationSharp>
            <p className="font-bold uppercase">{location}</p>
        </div>
        <div className="flex justify-center items-center space-x-2 pt-0">
        <TbProgressAlert className="text-orange-400"/>
            <p className="font-bold uppercase">{status}</p>
        </div>
        <div className="flex justify-center items-center space-x-2 pt-0">
        <FaDollarSign className="text-orange-400 text-xl"/>
            <p className="font-bold uppercase">{price}</p>
        </div>
        <div className="card-actions">
          <Link to={`/details/${id}`}>
            <button className="btn btn-primary border-none hover:bg-orange-600 bg-orange-500 text-white">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
Card.propTypes = {
  Acard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    estate_title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

