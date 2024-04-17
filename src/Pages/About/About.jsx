import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from "swiper/modules";

const About = () => {
  return (
    <div>
       <Helmet>
        <title>Unity Estates | About</title>
      </Helmet>



      <div className="flex justify-center items-center h-auto md:h-[80vh] mb-10">
            <Helmet>
                <title>Urban Estates | About</title>
            </Helmet>
            <div className="animate__animated animate__zoomIn hero bg-gray-100 md:p-2 rounded-xl">
                <div className="hero-content text-center mt-12 mb-12">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold">Hello People!</h1>
                        <p className="py-6 w-full">
                        Utility Estates are specialized properties designed for essential functions like infrastructure, energy, and public services. They include power plants, transportation hubs, and government buildings, crucial for community well-being and economic development. These properties play a vital role in supporting societies fundamental needs and promoting sustainable growth.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            <b>Located at:</b>  Gulshan, Dhaka <br />
                        </p>
                        <p className="flex gap-1 items-center justify-center mx-auto mb-6">
                            <NavLink to='/'>

                            </NavLink>
                        </p>
                        <NavLink to='/'>
                            <button className="btn bg-green-400 hover:bg-green-600 text-white border-none">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>


        <div className='h-[30vh] md:h-[45vh] lg:h-[70vh] relative flex justify-center items-center'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                effect='fade'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=' animate__animated animate__fadeInRight'
            >


                <SwiperSlide>
                    <img src="https://i.postimg.cc/Y9TRNFpy/andrei-turca-pi-JGB1n-J1k-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/tCZMYmNk/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/90Spp7Cn/gerardo-mr-p-Qr-Xgg-KVvz-I-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>

            </Swiper>
            <div className='animate__animated animate__fadeInLeft   absolute space-y-2 md:space-y-5 py-2 px-0 md:py-10 md:px-0 lg:py-20 bg-white bg-opacity-80 rounded-xl text-center w-[75%] z-20'>
                <h1 className=" text-xl md:text-4xl lg:text-5xl font-bold text-orange-600 ">Welcome to Unity Estates!</h1>
                <p className=' text-sm md:text-[15px] lg:text-xl px-1 md:w-2/3 mx-auto'> Experience the joy of Unity Estates excellence where luxury meets personalized excellence.</p>
            </div>
        </div>
    </div>
  );
};

export default About;
