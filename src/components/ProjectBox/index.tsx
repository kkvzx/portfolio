import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { projectsData } from "../projects/data";
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
  EmptyArrow,
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
  projectBoxSwitch: (operation: string) => void;
  handlePhotoIndex: (e: any) => void;
  photoIndex: number;
}) => {
  const project = projectsData[props.idOfBox];
  const htmlTechnologies = project.technologies.map((singleTechnology) => (
    <TechnologiesLi key={nanoid()}>{singleTechnology}</TechnologiesLi>
  ));

  // const handlePhotoIndex = (e: any) => {
  //   const whichBtn = e.target.classList[2];
  //   if (whichBtn === "right" && photoIndex < project.photos.length - 1) {
  //     setPhotoIndex((prev) => prev + 1);
  //   } else if (whichBtn === "left" && photoIndex > 0) {
  //     setPhotoIndex((prev) => prev - 1);
  //   } else {
  //     console.log("error");
  //   }
  // };

  // const singleDotshtml=  project.photos.map((singlePhoto, index) => (index===photoIndex?<SingleDot active={true}/>:<SingleDot active={false}))

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
    return index === current ? (
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
              className={index === current ? "window active" : "window"}
              key={nanoid()}
            >
              {index === current && <Photo src={singlePhoto} alt="/" />}
            </WindowForPhoto>
          );
        })}
        <LeftArrowPhoto
          className="left"
          onClick={() => prevSlide()}
        ></LeftArrowPhoto>

        <CircleDots>{singleDotshtml}</CircleDots>
        <RightArrowPhoto
          className="right"
          onClick={() => nextSlide()}
        ></RightArrowPhoto>
      </PhotoContainer>

      {props.idOfBox > 0 && (
        <LeftArrow
          className="minus"
          onClick={(e) =>
            props.projectBoxSwitch((e as any).target.classList[2])
          }
        ></LeftArrow>
      )}
      {props.idOfBox === 0 && <EmptyArrow />}
      {props.idOfBox < projectsData.length - 1 && (
        <RightArrow
          className="plus"
          onClick={(e) =>
            props.projectBoxSwitch((e as any).target.classList[2])
          }
        ></RightArrow>
      )}
    </BoxWrapper>
  );
};

export default ProjectBox;
