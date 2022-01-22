import { Link as ScrollLink } from "react-scroll";
import TelegramImage from "../../assets/icons/telegram.png";
import GithubImage from "../../assets/icons/github.png";
import InstagramImage from "../../assets/icons/instagram.png";
import TwitterImage from "../../assets/icons/twitter.png";
import FacebookImage from "../../assets/icons/facebook.png";
import SocialIcon from "../common/SocialIcon";
import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";

const Navbar = () => {
  const navs = [
    { menu: "Home", link: "home" },
    { menu: "Roadmap", link: "roadmap" },
    { menu: "About", link: "about" },
    { menu: "Blog", link: "blog" },
    { menu: "Art", link: "art" },
    { menu: "Faqs", link: "faqs" },
  ];

  const socialIcons = [
    { icon: TelegramImage, link: "" },
    { icon: GithubImage, link: "" },
    { icon: InstagramImage, link: "" },
    { icon: TwitterImage, link: "" },
    { icon: FacebookImage, link: "" },
  ];

  const [navbarOpen] = useNav(false);

  return (
    <nav
      id="header"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <div className="container py-1 py-lg-3">
        <Link to="/" className="navbar-brand pointer">
          Logo
        </Link>
        <button
          className="navbar-toggler border-0 outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <NavbarToggler navbarOpen={navbarOpen} />
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navs.map((nav, index) => (
              <li key={index} className="nav-item">
                <ScrollLink
                  activeClass="active"
                  className="nav-link white px-0 py-2 pointer"
                  to={nav.link}
                  spy={true}
                >
                  {nav.menu}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav social-icons">
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <SocialIcon link={icon.link} img={icon.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
