import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
import GroupImage from "../../assets/images/group.png";
import Image from "../../components/common/Image";
import Box from "../../components/common/Box";
import Slider from "react-slick";
import TestImage from "../../assets/images/Image.png";
import SliderArrow from "../../components/common/SliderArrow";
import RoadMapImage from "../../assets/images/roadmap.png";
import Team from "../../components/Team";

const Home = () => {
  const slides = [
    { img: TestImage },
    { img: TestImage },
    { img: TestImage },
    { img: TestImage },
    { img: TestImage },
    { img: TestImage },
  ];

  const teams = [
    { img: TestImage, description: "This is team" },
    { img: TestImage, description: "This is team" },
    { img: TestImage, description: "This is team" },
  ];

  return (
    <>
      <Box cssClasses={["bg-dark1", "overflow-hidden"]}>
        <Flex
          direction="row"
          justifyContent="between"
          alignItems="center"
          cssClasses={["container", "py-4"]}
        >
          <Box cssClasses={["col-md-7"]}>
            <h1>Discover, Collect & Sell unique NFTs</h1>
            <p className="my-4 hero-text">
              Safely Invest in High-Class Crystal Ring NFT – our 'Token of Love'
              grows with time. Gift, Invest, Secure – enter the Future of
              Investment.
            </p>
            <Flex direction="row" justifyContent="start" alignItems="center">
              <Button primary text="View on OpeanSea" />
              <Button
                secondary
                styles={{ marginLeft: "30px" }}
                text="View on Rariable"
              />
            </Flex>
          </Box>
          <Box cssClasses={["col-md-5"]}></Box>
        </Flex>
        <Image
          styles={{ marginTop: "80px" }}
          width="auto"
          height="auto"
          src={GroupImage}
        />
      </Box>
      <Box cssClasses={["bg-dark2", "section"]}>
        <Flex
          cssClasses={["container"]}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <h1>What is Diversify NFT</h1>
          <Box cssClasses={["col-md-8", "mt-3"]}>
            <p className="text-center">
              Diversity NFTs is the purest form of Crystal Rings on the
              metaverse, a brand built as a 'Token of Love' on the Ethereum
              Network. Diversify NFTs will be the rare jewel in your collection
              that provides proof of ownership and has unmatchable add-ons in
              its category, making it a pioneer among its peers. Crystal Ring
              360 videos are easily the most secure piece of jewelry on the Web
              3.0.
            </p>
          </Box>
          <h1 className="section-pad-top">Collection for the Connoisseurs</h1>
          <Box cssClasses={["col-md-8", "mt-3"]}>
            <p className="text-center">
              DiversifyNFTs' Crystal Ring Stories are designed to dazzle the
              special someone. They carry the allure, the exquisiteness, and the
              magnificence. They are also giving the possibility of a tangible
              form of artistry. Our idea of taking the NFT world forward is
              through diversification while adding value to the buyers' lives.
            </p>
          </Box>
          <Box cssClasses={["col-md-9", "mt-5", "pt-5", "container"]}>
            <Slider
              {...{
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                nextArrow: <SliderArrow direction="next" />,
                prevArrow: <SliderArrow direction="prev" />,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 1,
                      dots: true,
                    },
                  },
                ],
              }}
            >
              {slides.map((slide, index) => (
                <Box key={index} cssClasses={["container"]}>
                  <Image
                    src={slide.img}
                    width="100%"
                    height="500px"
                    cssClasses={["rounded"]}
                  />
                </Box>
              ))}
            </Slider>
            <Box cssClasses={["mt-4"]}>
              <Flex
                cssClasses={["pt-4"]}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Button secondary text="View Marketplace" />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box cssClasses={["bg-dark1", "section"]}>
        <Flex
          cssClasses={["container"]}
          justifyContent="center"
          direction="row"
          alignItems="center"
        >
          <Box cssClasses={["col-md-7"]}>
            <h2>Roadmap</h2>
            <p className="hero-text mt-2">
              Here’s a breakdown of our achievements, transparency is a major
              key in our organization.
            </p>
            <Box cssClasses={["mt-4"]}>
              <Button secondary text="View Roadmap" />
            </Box>
          </Box>
          <Box
            cssClasses={["col-md-5", "bg-dark2", "p-4"]}
            styles={{ borderRadius: "20px" }}
          >
            <Box cssClasses={["p-4", "text-center"]}>
              <Image src={RoadMapImage} width="100%" height="auto" />
              <h2 className="mt-3">
                Our
                <br /> Achievements
              </h2>
            </Box>
          </Box>
        </Flex>
        <Flex
          cssClasses={["section-pad-top", "container"]}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>About Us</h1>
          <Box cssClasses={["col-md-10", "text-center", "mt-2"]}>
            <p>
              Established in December 2021, Diversify is a team of friendly
              professionals whose intention is to bring your intentions out of
              detention. We develop and design your imaginations just as you
              want it. You and us only have one job respectively. Your job is to
              think it, our job is to construct it! We operate in diversities
              so, be rest assured of your diverse desires...
            </p>
          </Box>
          <Box cssClasses={["mt-4"]}>
            <Button secondary text="View More" />
          </Box>
        </Flex>
        <Flex
          cssClasses={["container", "section-pad-top"]}
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <h1>Meet the Team</h1>
          <Flex
            cssClasses={["mt-4", "row"]}
            justifyContent="between"
            direction="row"
            alignItems="center"
          >
            {teams.map((team, index) => (
              <Team key={index} team={team} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
