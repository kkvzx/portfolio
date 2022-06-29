import { nanoid } from "nanoid";
import React, { useState } from "react";
import { projectsData } from "../projects/data";
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
} from "./ProjectBoxElements";

const ProjectBox = (props: { idOfBox: number; boxToggle: () => void }) => {
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
      </InformationContainer>
    </BoxWrapper>
  );
};

export default ProjectBox;
