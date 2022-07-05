import { nanoid } from "nanoid";
import React, { useState } from "react";
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
  SkipButtons,
  SkipBtn,
  GithubLinkInBox,
  SingleOutsideBoxLink,
  LiveDemo,
  Arrows,
  LeftArrow,
  RightArrow,
  EmptyArrow,
} from "./ProjectBoxElements";

const ProjectBox = (props: {
  idOfBox: number;
  boxToggle: () => void;
  projectBoxSwitch: (operation: string) => void;
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const project = projectsData[props.idOfBox];
  const htmlTechnologies = project.technologies.map((singleTechnology) => (
    <TechnologiesLi key={nanoid()}>{singleTechnology}</TechnologiesLi>
  ));

  const handlePhotoIndex = (e: any) => {
    // photoIndex < project.photos.length - 1 && setPhotoIndex((prev) => prev + 1);
    const whichBtn = e.target.classList[2];
    whichBtn === "right"
      ? photoIndex < project.photos.length - 1 &&
        setPhotoIndex((prev) => prev + 1)
      : photoIndex > 0 && setPhotoIndex((prev) => prev - 1);
  };
  return (
    <BoxWrapper>
      <ClosingIcon onClick={() => props.boxToggle()} />

      <PhotoContainer>
        <Photo src={project.photos[photoIndex]}></Photo>
        <SkipButtons>
          <SkipBtn className="left" onClick={(e) => handlePhotoIndex(e)} />
          <SkipBtn className="right" onClick={(e) => handlePhotoIndex(e)} />
        </SkipButtons>
      </PhotoContainer>
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
      <Arrows>
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
      </Arrows>
    </BoxWrapper>
  );
};

export default ProjectBox;
