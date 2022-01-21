import Flex from "../common/Flex";
import Image from "../common/Image";
import TestImage from "../../assets/images/Image.png";
import Box from "../common/Box";
import TelegramImage from "../../assets/icons/telegram.png";
import GithubImage from "../../assets/icons/github.png";
import InstagramImage from "../../assets/icons/instagram.png";
import TwitterImage from "../../assets/icons/twitter.png";
import FacebookImage from "../../assets/icons/facebook.png";
import MediumImage from "../../assets/icons/medium.png";
import DiscordImage from "../../assets/icons/discord.png";
import SocialIcon from "../common/SocialIcon";

const Footer = () => {
  const menus = [
    { menu: "The Collection" },
    { menu: "Marketplace" },
    { menu: "Roadmap" },
    { menu: "Blog" },
    { menu: "Art" },
    { menu: "Faqs" },
  ];

  const socialIcons = [
    { icon: MediumImage, link: "" },
    { icon: DiscordImage, link: "" },
    { icon: TelegramImage, link: "" },
    { icon: GithubImage, link: "" },
    { icon: InstagramImage, link: "" },
    { icon: TwitterImage, link: "" },
    { icon: FacebookImage, link: "" },
  ];

  return (
    <Box cssClasses={["bg-dark1", "section-pad-top", "footer"]}>
      <Flex
        cssClasses={["container"]}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Image src={TestImage} width="200px" height="100px" />
        <Flex
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          cssClasses={["my-4"]}
        >
          {menus.map((menu, index) => (
            <Box
              key={index}
              cssClasses={["px-2", "my-1", "px-md-3", "my-md-2"]}
            >
              <p className="text-sm">{menu.menu}</p>
            </Box>
          ))}
        </Flex>
        <Flex direction={"row"} justifyContent="center" alignItems="center">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} link={icon.link} img={icon.icon} />
          ))}
        </Flex>
        {/* <a href="mailto:email@diversitynft.io">email@diversitynft.io</a> */}
        <p className="mt-4 text-sm">email@diversitynft.io</p>
      </Flex>
    </Box>
  );
};

export default Footer;
