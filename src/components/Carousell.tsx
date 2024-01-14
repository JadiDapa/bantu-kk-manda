import carousel1 from "/carousel1.jpg";
import carousel2 from "/carousel2.jpg";
import carousel3 from "/carousel3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousell = () => {
  return (
    <div className="h-56 w-full relative ">
      <div className="rounded-xl overflow-hidden">
        <Carousel
          className=""
          autoPlay
          interval={4000}
          transitionTime={700}
          showIndicators
          infiniteLoop
          showThumbs={false}
        >
          <div>
            <img src={carousel1} />
          </div>
          <div>
            <img src={carousel2} />
          </div>
          <div>
            <img src={carousel3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
