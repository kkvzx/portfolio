import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useRef } from "react";

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
  CircleDots,
  SingleDot,
  WindowForPhoto,
  Demo,
  OutsideWrapper,
  Blur,
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
  ended: boolean;
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
      {project.ended ? (
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
          <OutsideWrapper>
            <SingleOutsideBoxLink href={project.github} target="_blank">
              <GithubLinkInBox></GithubLinkInBox>
            </SingleOutsideBoxLink>
            <SingleOutsideBoxLink href={project.liveDemo} target="_blank">
              <Demo>Live Demo</Demo>
            </SingleOutsideBoxLink>
          </OutsideWrapper>
        </InformationContainer>
      ) : (
        <InformationContainer>
          <ProjectTitle>{project.name}</ProjectTitle>
          <TechnologiesList className="unfinished">
            <Blur>
              Html Css Javascript React ReactHooks Styled Components Firebase
            </Blur>
          </TechnologiesList>

          <DifficultiesToOvercomeContainer>
            <DifficultiesToOvercomeHeader>
              Work in progress
            </DifficultiesToOvercomeHeader>
            <DifficultiesToOvercomeText>
              <Blur>{project.description}</Blur>
            </DifficultiesToOvercomeText>
          </DifficultiesToOvercomeContainer>
        </InformationContainer>
      )}
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
                  onClick={() => props.switcher("right", "photo")}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  src={singlePhoto}
                  alt="/"
                  ended={project.ended}
                />
              )}
            </WindowForPhoto>
          );
        })}

        <CircleDots>{singleDotshtml}</CircleDots>
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
