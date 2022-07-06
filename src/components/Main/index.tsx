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
import { projectsData } from "../projects/data";

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
  const [innerPhotoIndex, setInnerPhotoIndex] = useState(0);

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

  const projectBoxSwitch = (operation: string) => {
    if (operation === "plus" && idOfProjectBox < projectsData.length - 1) {
      setIdOfProjectBox((prev) => prev + 1);
    } else if (operation === "minus" && idOfProjectBox > 0) {
      setIdOfProjectBox((prev) => prev - 1);
    } else {
      console.log("No mathcing conditions");
    }
  };
  useEffect(() => {
    setInnerPhotoIndex(0);
  }, [idOfProjectBox]);
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

  const handlePhotoIndex = (e: any) => {
    const whichBtn = e.target.classList[2];
    if (
      whichBtn === "right" &&
      innerPhotoIndex < projectsData[idOfProjectBox].photos.length - 1
    ) {
      setInnerPhotoIndex((prev) => prev + 1);
    } else if (whichBtn === "left" && innerPhotoIndex > 0) {
      setInnerPhotoIndex((prev) => prev - 1);
    } else {
      console.log("error");
    }
  };

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
            <ProjectBox
              idOfBox={idOfProjectBox}
              boxToggle={scrollHandler}
              projectBoxSwitch={projectBoxSwitch}
              handlePhotoIndex={handlePhotoIndex}
              photoIndex={innerPhotoIndex}
            />
          )}
          <Contact />
        </Content>
      </MainWrapper>
      <GlobalStyles />
    </Router>
  );
};

export default Main;
