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
        <img src="https://raw.githubusercontent.com/raviranjan1122/assets/main/images/c_banner.jpg" alt="img1" />
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/raviranjan1122/assets/main/images/c_banner1.jpg" alt="img1" />
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/raviranjan1122/assets/main/images/c_banner2.jpg" alt="img1" />
      </div>
    </Carousel>
  );
};
export default BannerCarousel;
