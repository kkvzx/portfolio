import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import { AiFillSwitcher } from "react-icons/ai";
import { ReadMore } from "../projects/ProjectsElements";
import { ClosingIcon } from "../Sidebar/SidebarElements";
import {
  BoxWrapper,
  DifficultiesToOvercomeContainer,
  DifficultiesToOvercomeHeader,
  DifficultiesToOvercomeText,
  InformationContainer,
  Photo,
  PhotoContainer,
  ProjectTitle,
  TechnologiesLi,
  TechnologiesList,
  TechnologiesUsed,
  GithubLinkInBox,
  SingleOutsideBoxLink,
  LeftArrow,
  RightArrow,
  RightArrowPhoto,
  LeftArrowPhoto,
  CircleDots,
  SingleDot,
  WindowForPhoto,
} from "./ProjectBoxElements";

interface ProjectDataProps {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  smallDescription: string;
  photos: string[];
  photoAlt: string;
  github: string;
  liveDemo: string;
}
interface ProjectDataProps extends Array<ProjectDataProps> {}

const ProjectBox = (props: {
  idOfBox: number;
  boxToggle: () => void;
  switcher: (operation: string, action: string) => void;
  photoIndex: number;
  projectsData: ProjectDataProps;
  scrollHandler: () => void;
  useOutsideAlerter: any;
}) => {
  const project = props.projectsData[props.idOfBox];
  const htmlTechnologies = project.technologies.map((singleTechnology) => (
    <TechnologiesLi key={nanoid()}>{singleTechnology}</TechnologiesLi>
  ));
  // =====================================

  /**
   * Hook that alerts clicks outside of the passed ref
   */

  /**
   * Component that alerts if you click outside of it
   */
  const wrapperRef = useRef(null);
  props.useOutsideAlerter(wrapperRef);

  // =====================================
  const singleDotshtml = project.photos.map((singlePhoto, index) => {
    return index === props.photoIndex ? (
      <SingleDot key={nanoid()} active={true} />
    ) : (
      <SingleDot key={nanoid()} active={false} />
    );
  });
  // photo swap animation
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
  };
  return (
    <BoxWrapper
      ref={wrapperRef}
      as={motion.div}
      initial={{
        scale: 0,
        borderRadius: "100%",
      }}
      animate={{ scale: 1, borderRadius: "50px" }}
      transition={{ duration: 0.1 }}
    >
      <ClosingIcon onClick={() => props.boxToggle()} />
      <InformationContainer>
        <ProjectTitle>{project.name}</ProjectTitle>
        <TechnologiesUsed>
          <TechnologiesList>{htmlTechnologies}</TechnologiesList>
        </TechnologiesUsed>
        <DifficultiesToOvercomeContainer>
          <DifficultiesToOvercomeHeader>
            Difficulties to overcome
          </DifficultiesToOvercomeHeader>
          <DifficultiesToOvercomeText>
            {project.description}
          </DifficultiesToOvercomeText>
        </DifficultiesToOvercomeContainer>
        <SingleOutsideBoxLink href={project.github} target="_blank">
          <GithubLinkInBox></GithubLinkInBox>
        </SingleOutsideBoxLink>
        <SingleOutsideBoxLink href={project.liveDemo} target="_blank">
          <ReadMore>Live Demo</ReadMore>
        </SingleOutsideBoxLink>
      </InformationContainer>
      <PhotoContainer>
        {project.photos.map((singlePhoto, index) => {
          return (
            <WindowForPhoto
              active={index === props.photoIndex ? true : false}
              key={nanoid()}
            >
              {index === props.photoIndex && (
                <Photo
                  key={singlePhoto}
                  as={motion.img}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  src={singlePhoto}
                  alt="/"
                />
              )}
            </WindowForPhoto>
          );
        })}
        <LeftArrowPhoto
          className="left"
          onClick={(e) => props.switcher("left", "photo")}
        ></LeftArrowPhoto>

        <CircleDots>{singleDotshtml}</CircleDots>
        <RightArrowPhoto
          className="right"
          onClick={(e) => props.switcher("right", "photo")}
        ></RightArrowPhoto>
      </PhotoContainer>

      <LeftArrow
        className="minus"
        onClick={() => props.switcher("minus", "project")}
      />

      <RightArrow
        className="plus"
        onClick={() => props.switcher("plus", "project")}
      />
    </BoxWrapper>
  );
};

export default ProjectBox;
