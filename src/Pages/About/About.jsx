import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Unity Estates | About</title>
      </Helmet>

      <div className="flex justify-center items-center mt-6 md:mt-10 mb-6 md:mb-20">
        <Helmet>
          <title>Urban Estates | About</title>
        </Helmet>
        <div className="animate__animated animate__zoomIn hero bg-gray-200 md:p-2 rounded-2xl shadow-2xl">
          <div className="hero-content text-center mb-8">
            <div className="">
              <h1 className="text-3xl md:text-5xl font-bold">Hello People!</h1>
              <p className="py-6 w-full">
                Welcome to Unity Estates, where we believe in igniting a passion for finding the perfect home through a carefully curated selection of properties for all needs and preferences. Just as every reader finds their perfect book, we're dedicated to helping every client find their ideal property match.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <b>Located at:</b> Banai, Dhaka <br />
              </p>
              <p className="flex gap-1 items-center justify-center mx-auto mb-6">
                <NavLink to="/"></NavLink>
              </p>
              <NavLink to="/">
                <button className="btn btn-primary border-none hover:bg-orange-600 bg-orange-500 text-white">
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl md:text-4xl mt-10 mb-10 mx-auto pt-10 pb-10 bg-gray-200 rounded-2xl shadow-2xl animate__animated animate__zoomIn">
        Our Properties Gallery
      </h1>
      <div className="flex justify-center items-center mt-16 md:mt-20 mb-16 md:mb-24">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="animate__animated animate__zoomIn"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/Y9TRNFpy/andrei-turca-pi-JGB1n-J1k-unsplash.jpg"
              className="w-full brightness-50 rounded-xl h-[35vh] md:h-[45vh] lg:h-[70vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/tCZMYmNk/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg"
              className="w-full brightness-50 rounded-xl h-[35vh] md:h-[45vh] lg:h-[70vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/90Spp7Cn/gerardo-mr-p-Qr-Xgg-KVvz-I-unsplash.jpg"
              className="w-full brightness-50 rounded-xl h-[35vh] md:h-[45vh] lg:h-[70vh]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
