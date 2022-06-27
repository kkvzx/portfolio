import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../Header";
import { Content, MainWrapper } from "./MainElements";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../Footer";
import Hero from "../Hero";
import Sidebar from "../Sidebar";
import AboutSection from "../AboutSection";
import Projects from "../projects";
import Contact from "../Contact";

const Main = () => {
  // constants
  const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowSize, SetWindowSize] = useState(getWindowSize());

  // functions and hooks

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
    console.log("hi");
  };
  useEffect(() => {
    const windowResize = () => {
      SetWindowSize(getWindowSize());
    };
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  // Closing SmallnavMenu while resizing
  useEffect(() => {
    windowSize.width >= 768 && setIsOpen(false);
  }, [windowSize.width]);

  return (
    <Router>
      <MainWrapper>
        <Sidebar toggle={toggleSideBar} isOpen={isOpen} />
        <Header toggle={toggleSideBar} />
        <Content>
          <Hero />
          <AboutSection />
          <Projects />

          <Contact />
        </Content>
      </MainWrapper>
      <GlobalStyles />
    </Router>
  );
};

export default Main;
