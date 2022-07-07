import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
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
}) => {
  const project = props.projectsData[props.idOfBox];
  const htmlTechnologies = project.technologies.map((singleTechnology) => (
    <TechnologiesLi key={nanoid()}>{singleTechnology}</TechnologiesLi>
  ));

  const [current, setCurrent] = useState<number>(0);
  const length: number = project.photos.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    console.log(current);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    console.log(current);
  };

  const singleDotshtml = project.photos.map((singlePhoto, index) => {
    return index === props.photoIndex ? (
      <SingleDot key={nanoid()} active={true} />
    ) : (
      <SingleDot key={nanoid()} active={false} />
    );
  });

  return (
    <BoxWrapper>
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
                <Photo src={singlePhoto} alt="/" />
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
        onClick={(e) => props.switcher("minus", "project")}
      />

      <RightArrow
        className="plus"
        onClick={(e) => props.switcher("plus", "project")}
      />
    </BoxWrapper>
  );
};

export default ProjectBox;
