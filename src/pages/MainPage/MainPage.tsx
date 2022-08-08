import React, { useEffect } from "react";
import AboutSection from "../../components/AboutSection";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import ProjectBox from "../../components/ProjectBox";
import Projects from "../../components/projects";
import { Content } from "./MainPageElements";

const MainPage = ({
  darkMode,
  projectBoxToggle,
  idOfBox,
  scrollHandler,
  switcher,
  projectsData,
  idOfProjectBox,
  innerPhotoIndex,
  isOpenProjectBox,
}: mainPageProps) => {
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

  return (
    <Content>
      <Hero darkMode={darkMode} />
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
  );
};

export default MainPage;

interface mainPageProps {
  darkMode: boolean;
  projectBoxToggle: (id: number) => void;
  idOfBox: number;
  scrollHandler: () => void;
  switcher: (operation: string, action: string) => void;
  projectsData: any;
  innerPhotoIndex: number;
  idOfProjectBox: number;
  isOpenProjectBox: boolean;
}
