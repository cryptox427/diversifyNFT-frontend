import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
// import GroupImage from "../../assets/images/group.png";
import Image from "../../components/common/Image";
import Box from "../../components/common/Box";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import RoadMapImage from "../../assets/images/roadmap.png";
import Team from "../../components/Team";
import Blog from "../../components/Blog";
import Accordion from "../../components/common/Accordion";
import BlogImage1 from "../../assets/images/blog1.png";
import BlogImage2 from "../../assets/images/blog2.png";
import BlogImage3 from "../../assets/images/blog3.png";
import TeamImage1 from "../../assets/images/team1.png";
import TeamImage2 from "../../assets/images/team2.png";
import TeamImage3 from "../../assets/images/team3.png";
import LogoImage from "../../assets/images/new_logo.png";
import Art1 from "../../assets/images/art1.png";
import Art2 from "../../assets/images/art2.png";
import Art from "../../components/Art";

const Home = () => {
  const slides = [{ img: Art1 }, { img: Art2 }, { img: Art1 }, { img: Art2 }];

  const teams = [
    { img: TeamImage1, description: "This is team" },
    { img: TeamImage2, description: "This is team" },
    { img: TeamImage3, description: "This is team" },
  ];

  const blogs = [
    {
      img: BlogImage1,
      title:
        "You Can Buy NFT Crystal Ring and Get a Real Crystal Ring Made of 24-Carat Gold.",
      description:
        "The idea is to highlight the feature and increase activity and interest ...",
    },
    {
      img: BlogImage2,
      title:
        "How To Express Your Love this Valentine with this NFT ' Token of Love'",
      description:
        "We are going forward with the theme of Valentine's to create a niche segment NFT and leverage the season.",
    },
    {
      img: BlogImage3,
      title:
        "The Perfect NFT Valentine's Day Gifts for the Crypto Enthusiast in Your Life",
      description: "Benefits based post on how to impress your Valentine.",
    },
  ];

  const faqs = [
    {
      title: "Frequently asked quetion 1",
      description: "This is description of Frequently asked quetion 1",
    },
    {
      title: "Frequently asked quetion 2",
      description: "This is description of Frequently asked quetion 1",
    },
    {
      title: "Frequently asked quetion 3",
      description: "This is description of Frequently asked quetion 1",
    },
    {
      title: "Frequently asked quetion 4",
      description: "This is description of Frequently asked quetion 1",
    },
    {
      title: "Frequently asked quetion 5",
      description: "This is description of Frequently asked quetion 1",
    },
  ];

  return (
    <>
      <Box cssClasses={["bg-dark1", "overflow-hidden"]}>
        <div id="home">
          <Box cssClasses={["container", "pt-4"]}>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box cssClasses={["col-md-6", "col-lg-7", "col-12", "section"]}>
                <h1>Discover, Collect & Sell unique NFTs</h1>
                <p className="my-4 hero-text">
                  Safely Invest in High-Class Crystal Ring NFT – our 'Token of
                  Love' grows with time. Gift, Invest, Secure – enter the Future
                  of Investment.
                </p>
                <Flex
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                  cssClasses={["pt-2"]}
                >
                  <Button primary text="View on OpeanSea" />
                  <Box cssClasses={["ms-2", "ms-sm-4"]}>
                    <Button secondary text="View on Rariable" />
                  </Box>
                </Flex>
              </Box>
              <Box
                cssClasses={[
                  "col-md-5",
                  "col-lg-4",
                  "col-12",
                  "pb-4",
                  "pb-md-0",
                ]}
              >
                <Image
                  cssClasses={["logo-img"]}
                  src={LogoImage}
                  width="100%"
                  height="auto"
                />
              </Box>
            </Flex>
          </Box>
          {/* <Image
            cssClasses={["d-md-block", "d-none"]}
            width="auto"
            height="auto"
            src={GroupImage}
          /> */}
        </div>
      </Box>
      <Box cssClasses={["bg-dark2"]}>
        <div id="art" className="section">
          <Box cssClasses={["container"]}>
            <h1 className="text-sm-center">What is Diversify NFT</h1>
            <Box cssClasses={["col-md-8", "mt-3", "mx-auto"]}>
              <p className="text-sm-center">
                Diversity NFTs is the purest form of Crystal Rings on the
                metaverse, a brand built as a 'Token of Love' on the Ethereum
                Network. Diversify NFTs will be the rare jewel in your
                collection that provides proof of ownership and has unmatchable
                add-ons in its category, making it a pioneer among its peers.
                Crystal Ring 360 videos are easily the most secure piece of
                jewelry on the Web 3.0.
              </p>
            </Box>
            <h1 className="section-pad-top text-sm-center">
              Collection for the Connoisseurs
            </h1>
            <Box cssClasses={["col-md-8", "mt-3", "mx-auto"]}>
              <p className="text-sm-center">
                DiversifyNFTs' Crystal Ring Stories are designed to dazzle the
                special someone. They carry the allure, the exquisiteness, and
                the magnificence. They are also giving the possibility of a
                tangible form of artistry. Our idea of taking the NFT world
                forward is through diversification while adding value to the
                buyers' lives.
              </p>
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Box
                cssClasses={["col-lg-9", "col-12", "mt-5", "pt-5", "container"]}
              >
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
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1,
                          dots: true,
                        },
                      },
                    ],
                  }}
                >
                  {slides.map((art, index) => (
                    <Art art={art} key={index} />
                  ))}
                </Slider>
                <Box cssClasses={["mt-4"]}>
                  <Flex
                    cssClasses={["pt-4"]}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Link to="/marketplace">
                      <Button secondary text="View Marketplace" />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </div>
      </Box>
      <Box cssClasses={["bg-dark1"]}>
        <div id="roadmap" className="section-pad-top">
          <Flex
            cssClasses={["container"]}
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <Box cssClasses={["col-md-7", "col-12", "pe-md-4"]}>
              <h2>Roadmap</h2>
              <p className="hero-text mt-2">
                Here’s a breakdown of our achievements, transparency is a major
                key in our organization.
              </p>
              <Box cssClasses={["mt-4"]}>
                <Link to="/roadmap">
                  <Button secondary text="View Roadmap" />
                </Link>
              </Box>
            </Box>
            <Box
              cssClasses={[
                "col-md-5",
                "bg-dark2",
                "p-4",
                "col-12",
                "mt-4",
                "mt-md-0",
              ]}
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
        </div>
        <div className="section-pad-top" id="about">
          <Box cssClasses={["container"]}>
            <h1 className="text-sm-center">About Us</h1>
            <Box
              cssClasses={["col-md-10", "text-sm-center", "mt-2", "mx-auto"]}
            >
              <p>
                Established in December 2021, Diversify is a team of friendly
                professionals whose intention is to bring your intentions out of
                detention. We develop and design your imaginations just as you
                want it. You and us only have one job respectively. Your job is
                to think it, our job is to construct it! We operate in
                diversities so, be rest assured of your diverse desires...
              </p>
            </Box>
            <Flex justifyContent="center" direction="row" alignItems="center">
              <Box cssClasses={["mt-4"]}>
                <Link to="/aboutus">
                  <Button secondary text="View More" />
                </Link>
              </Box>
            </Flex>
          </Box>
          <Flex
            cssClasses={["container", "section-pad-top"]}
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <h1>Meet the Team</h1>
            <Flex
              cssClasses={["mt-4", "d-none d-md-flex", "col-12"]}
              justifyContent="between"
              direction="row"
            >
              {teams.map((team, index) => (
                <Team key={index} team={team} />
              ))}
            </Flex>
            <Box cssClasses={["container", "mt-4", "d-md-none"]}>
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: true,
                  nextArrow: <SliderArrow direction="next" />,
                  prevArrow: <SliderArrow direction="prev" />,
                }}
              >
                {teams.map((team, index) => (
                  <Team key={index} team={team} />
                ))}
              </Slider>
            </Box>
          </Flex>
        </div>
        <Box cssClasses={["container", "mt-4"]}>
          <div className="section-pad-top" id="blog">
            <h1 className="mt-2 text-center">Blog Posts</h1>
            <Box cssClasses={["mt-4"]}>
              <Box
                cssClasses={["col-lg-11", "d-none", "d-md-block", "mx-auto"]}
              >
                <Flex justifyContent="center" direction="row">
                  {blogs.map((blog, index) => (
                    <Blog key={index} blog={blog} />
                  ))}
                </Flex>
              </Box>
            </Box>
            <Box cssClasses={["container", "mt-4", "d-md-none"]}>
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: true,
                  nextArrow: <SliderArrow direction="next" />,
                  prevArrow: <SliderArrow direction="prev" />,
                }}
              >
                {blogs.map((blog, index) => (
                  <Blog key={index} blog={blog} />
                ))}
              </Slider>
            </Box>
            <Box cssClasses={["mt-4", "text-center", "pt-4"]}>
              <a
                href="https://diversifynft.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button secondary text="See More" />
              </a>
            </Box>
          </div>
        </Box>
        <Box cssClasses={["container"]}>
          <div className="section-pad-top" id="faqs">
            <Flex direction={"row"} justifyContent="space-between">
              <Box cssClasses={["col-md-5", "col-12"]}>
                <h2>FAQs</h2>
                <p>Frequently asked quetions</p>
              </Box>
              <Box cssClasses={["col-md-7", "col-12", "mt-4", "mt-md-0"]}>
                <Box cssClasses={["bg-dark2", "rounded-20", "px-2", "px-md-4"]}>
                  <Accordion data={faqs} />
                </Box>
              </Box>
            </Flex>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
