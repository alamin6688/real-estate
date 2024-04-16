const Banner = () => {
  return (
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
  );
};

export default Banner;
