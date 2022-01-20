import { useState } from "react";
import TelegramImage from "../../assets/icons/telegram.png";
import GithubImage from "../../assets/icons/github.png";
import InstagramImage from "../../assets/icons/instagram.png";
import TwitterImage from "../../assets/icons/twitter.png";
import FacebookImage from "../../assets/icons/facebook.png";
import SocialIcon from "../common/SocialIcon";

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

  const [activeNav, setActiveNav] = useState<string>("home");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  navbar-fixed-top">
      <div className="container py-3">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navs.map((nav, index) => (
              <li key={index} className="nav-item">
                <a
                  onClick={() => setActiveNav(nav.link)}
                  className={
                    activeNav === nav.link
                      ? "nav-link white px-0 py-2 active"
                      : "nav-link white px-0 py-2"
                  }
                  aria-current="page"
                  href={`#${nav.link}`}
                >
                  {nav.menu}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
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
