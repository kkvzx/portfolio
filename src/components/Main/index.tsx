import React, { useEffect, useState, useCallback, useRef } from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../Header";
import { Content, MainWrapper } from "./MainElements";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
  const [currentProject, setCurrentProject] = useState<number>(0);
  const length: number = projectsData.length;

  // functions and hooks

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };
  const projectBoxToggle: (id: number) => void = (id: number) => {
    setIsOpenProjectBox((prev) => !prev);
    setIdOfProjectBox(id);
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
  // ========================PROJECT BOX CONTROL START=========================
  const scrollHandler = () => {
    setIsOpenProjectBox(false);
  };
  // change of ProjectBox and innerPhotos (from data)
  // -------------------------------------------------------------
  const switcher = (operation: string, action: string) => {
    if (action === "project") {
      if (operation === "plus") {
        setIdOfProjectBox((prev) =>
          prev === projectsData.length - 1 ? 0 : prev + 1
        );
      } else if (operation === "minus") {
        setIdOfProjectBox((prev) =>
          prev === 0 ? projectsData.length - 1 : prev - 1
        );
      } else {
        console.log("No mathcing conditions");
      }
    } else if (action === "photo") {
      if (operation === "right") {
        setInnerPhotoIndex((prev) =>
          prev === projectsData[idOfProjectBox].photos.length - 1 ? 0 : prev + 1
        );
      } else if (operation === "left") {
        setInnerPhotoIndex((prev) =>
          prev === 0 ? projectsData[idOfProjectBox].photos.length - 1 : prev - 1
        );
      } else {
        console.log(operation);
      }
    }
  };
  // --------------------------------------------------------------

  // Reseting PhotoIndex after change of project (valid?)
  useEffect(() => {
    setInnerPhotoIndex(0);
  }, [idOfProjectBox]);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          scrollHandler();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  // ========================PROJECT BOX CONTROL END=========================

  // Closing SmallnavMenu while resizing
  useEffect(() => {
    windowSize.width >= 768 && setIsOpen(false);
  }, [windowSize.width]);

  return (
    <>
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
              switcher={switcher}
              photoIndex={innerPhotoIndex}
              projectsData={projectsData as any}
              scrollHandler={scrollHandler}
              useOutsideAlerter={useOutsideAlerter}
            />
          )}
          <Contact />
        </Content>
      </MainWrapper>
      <GlobalStyles />
    </>
  );
};

export default Main;
