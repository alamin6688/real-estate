const Banner = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div>
        <div className="carousel w-full md:h-[700px] rounded-2xl mt-4 animate__animated animate__slideInDown shadow-xl">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/92fSWCq/sean-pollock-Ph-Yq704ffd-A-unsplash.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/YttkYVj/clay-banks-kiv1ggvkg-Qk-unsplash.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/7pVYp99/andrea-cau-n-V7-GJm-Sq3zc-unsplash.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/RCg3Tn4/analog-landscape-city-with-buildings.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 animate__animated animate__slideInDown">
          <a href="#item1" className="btn btn-xs bg-gray-200 hover:bg-gray-300">
            1
          </a>
          <a href="#item2" className="btn btn-xs bg-gray-200 hover:bg-gray-300">
            2
          </a>
          <a href="#item3" className="btn btn-xs bg-gray-200 hover:bg-gray-300">
            3
          </a>
          <a href="#item4" className="btn btn-xs bg-gray-200 hover:bg-gray-300">
            4
          </a>
        </div>
      </div>
      <div className="absolute bg-gray-200 bg-opacity-90 text-center w-3/4 md:w-[60%] rounded-2xl shadow-2xl animate__animated animate__fadeInUp">
          <h2 className="text-xl md:text-3xl text-orange-600 mb-0">
            Welcome to Unity Estates!
          </h2>
          <p className="w-full mx-auto text-black md:text-xl">
            Experience the joy of Unity Estates excellence where luxury meets personalized excellence.
          </p>
        </div>
    </div>
  );
};

export default Banner;
