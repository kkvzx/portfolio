import React, { useEffect, useState, useCallback, useRef } from "react";
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
import ProjectBox from "../ProjectBox";

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
  const [isOpenProjectBox, setIsOpenProjectBox] = useState<boolean>(false);
  const [idOfProjectBox, setIdOfProjectBox] = useState<number>(0);

  // functions and hooks

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  const projectBoxToggle: (id: number) => void = (id: number) => {
    setIsOpenProjectBox((prev) => !prev);
    setIdOfProjectBox(id);
  };
  const scrollHandler = () => {
    setIsOpenProjectBox(false);
  };
  useEffect(() => {
    const windowResize = () => {
      SetWindowSize(getWindowSize());
    };

    window.addEventListener("resize", windowResize);
    window.addEventListener("scroll", scrollHandler);
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
        <Header />
        <Content>
          <Hero />
          <AboutSection />
          <Projects projectBoxToggle={projectBoxToggle} />
          {isOpenProjectBox && (
            <ProjectBox idOfBox={idOfProjectBox} boxToggle={scrollHandler} />
          )}
          <Contact />
        </Content>
      </MainWrapper>
      <GlobalStyles />
    </Router>
  );
};

export default Main;
