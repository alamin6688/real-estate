const Banner = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div>
        <div className="carousel w-full md:h-[550px] rounded-2xl mt-4 animate__animated animate__slideInDown">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.postimg.cc/0jxxNbLh/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.postimg.cc/6qXDtgD0/lotus-design-n-print-Alp8v3dp-Gh0-unsplash.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.postimg.cc/tCZMYmNk/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.postimg.cc/KvNRSyd0/jan-jakub-nanista-UHyrj-KPsshk-unsplash.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 animate__animated animate__slideInDown">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <div className="absolute bg-gray-200 text-center w-3/4 md:w-[60%] rounded-2xl shadow-2xl animate__animated animate__fadeInUp">
          <h2 className="text-xl md:text-3xl text-orange-500 mb-0">
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
