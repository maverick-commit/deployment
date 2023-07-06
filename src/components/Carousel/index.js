import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./overrideStyle.css";

const BannerCarousel = () => {
  return (
    <Carousel
      autoPlay="true"
      interval="2000"
      infiniteLoop="true"
      showThumbs="false"
      transitionTime="500"
      showIndicators="false"
      showStatus='false'
      showArrows='false'
      axis="vertical"
      autoFocus='false'
      thumbWidth='0'
    >
      <div>
        <img src="https://cdn.iqboard.net/img/slider/HC900-pro.jpg" alt="img1" />
      </div>
      <div>
        <img src="https://cdn.iqboard.net/img/slider/AHY2000115.jpg" alt="img1" />
      </div>
      <div>
        <img src="https://cdn.iqboard.net/img/slider/3840.5.jpg" alt="img1" />
      </div>
      <div>
        <img src="https://cdn.iqboard.net/img/slider/banner-business.jpg" alt="img1" />
      </div>
    </Carousel>
  );
};
export default BannerCarousel;
