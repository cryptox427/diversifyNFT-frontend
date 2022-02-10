import Slider from "react-slick";
import NFT1 from "../assets/images/nfts/main1.png";
import NFT2 from "../assets/images/nfts/main2.png";
import Image from "./common/Image";

const MainCarousel = () => {
  const images = [NFT1, NFT2];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Image cssClasses={["container"]} src={image} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
