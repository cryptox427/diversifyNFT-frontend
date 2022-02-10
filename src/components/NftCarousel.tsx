import { SetStateAction, useState } from "react";
import Slider from "react-slick";
import NFT1 from "../assets/images/nfts/nft1.png";
import NFT2 from "../assets/images/nfts/nft2.png";
import NFT3 from "../assets/images/nfts/nft3.png";
import NFT4 from "../assets/images/nfts/nft4.png";
import NFT5 from "../assets/images/nfts/nft5.png";
import NFT6 from "../assets/images/nfts/nft6.png";
import NFT7 from "../assets/images/nfts/nft7.png";
import NFT8 from "../assets/images/nfts/nft8.png";
import Art from "./Art";

const NftCarousel = () => {
  const images = [NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8];
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (_current: any, next: SetStateAction<number>) =>
      setImageIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div className={idx === imageIndex ? "activeSlide" : "slide"} key={idx}>
          <div className="slideWrapper">
            <Art src={image} />
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="container">
      <Slider {...settings}>{templateImages}</Slider>
    </div>
  );
};

export default NftCarousel;
