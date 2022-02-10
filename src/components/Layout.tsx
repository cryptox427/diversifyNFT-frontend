import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import Navbar from "./Header";
import Footer from "./Footer";
import Background from "./Background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
      <Background />
    </>
  );
};

export default Layout;
