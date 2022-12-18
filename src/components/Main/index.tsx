import React, { Suspense, useEffect, useState } from 'react';
import * as ROUTES from '../../constants/routes';

import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import { Content, MainWrapper } from './MainElements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from '../Hero';
import Sidebar from '../Sidebar';
import AboutSection from '../AboutSection';
import Projects from '../projects';
import Contact from '../Contact';
import ProjectBox from '../ProjectBox';
import { projectsData } from '../projects/data';
import Resume from '../../pages/Resume';
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../../pages/NotFound';
import { AboutMeText } from '../AboutSection/AboutElements';
import { Colored } from '../../pages/Resume/ResumeElements';
import UnderMaintenance from '../../pages/UnderMaintanance/UnderMaintanace';

const Main = () => {
  // constants
  const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowSize, SetWindowSize] = useState(getWindowSize());
  const [isOpenProjectBox, setIsOpenProjectBox] = useState<boolean>(false);
  const [idOfProjectBox, setIdOfProjectBox] = useState<number>(0);
  const [innerPhotoIndex, setInnerPhotoIndex] = useState(0);

  // functions and hooks
  const darkModeToggle = (toggle: string) => {
    toggle === 'light' ? setDarkMode(false) : setDarkMode(true);
  };

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
    window.addEventListener('resize', windowResize);
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);
  // ========================PROJECT BOX CONTROL START=========================
  const scrollHandler = () => {
    setIsOpenProjectBox(false);
  };
  // change of ProjectBox and innerPhotos (from data)
  // -------------------------------------------------------------
  const switcher = (operation: string, action: string) => {
    if (action === 'project') {
      if (operation === 'plus') {
        setIdOfProjectBox((prev) =>
          prev === projectsData.length - 1 ? 0 : prev + 1
        );
      } else if (operation === 'minus') {
        setIdOfProjectBox((prev) =>
          prev === 0 ? projectsData.length - 1 : prev - 1
        );
      } else {
        console.log('No mathcing conditions');
      }
    } else if (action === 'photo') {
      setInnerPhotoIndex((prev) =>
        prev === projectsData[idOfProjectBox].photos.length - 1 ? 0 : prev + 1
      );
    } else {
      console.log(operation);
    }
  };

  // --------------------------------------------------------------

  // Reseting PhotoIndex after change of project (valid?)
  useEffect(() => {
    setInnerPhotoIndex(0);
  }, [idOfProjectBox]);

  // function useOutsideAlerter(ref: any) {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event: any) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         scrollHandler();
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }
  // ========================PROJECT BOX CONTROL END=========================

  // Closing SmallnavMenu while resizing
  useEffect(() => {
    windowSize.width >= 768 && setIsOpen(false);
  }, [windowSize.width]);

  return (
    <BrowserRouter>
      <MainWrapper>
        {/* <Sidebar
          toggle={toggleSideBar}
          darkMode={darkMode}
          darkModeToggle={darkModeToggle}
          isOpen={isOpen}
        />
        <Header darkModeToggle={darkModeToggle} darkMode={darkMode} /> */}
        <Suspense
          fallback={
            <AboutMeText>
              <Colored>Loading</Colored>
            </AboutMeText>
          }
        >
          <Routes>
            {/* <Route
              path={ROUTES.DASHBOARD}
              element={
                <MainPage
                  darkMode={darkMode}
                  projectBoxToggle={projectBoxToggle}
                  idOfBox={idOfProjectBox}
                  scrollHandler={scrollHandler}
                  switcher={switcher}
                  projectsData={projectsData as any}
                  innerPhotoIndex={innerPhotoIndex}
                  idOfProjectBox={idOfProjectBox}
                  isOpenProjectBox={isOpenProjectBox}
                />
              }
            />
            <Route path={ROUTES.RESUME} element={<Resume />} /> */}
            <Route path={ROUTES.NOT_FOUND} element={<UnderMaintenance />} />
          </Routes>
        </Suspense>
      </MainWrapper>
      <GlobalStyles darkMode={darkMode} />
    </BrowserRouter>
  );
};

export default Main;
