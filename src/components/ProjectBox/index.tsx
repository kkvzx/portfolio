import React from "react";
import { projectsData } from "../projects/data";
import {
  BoxWrapper,
  InformationContainer,
  PhotoContainer,
  ProjectTitle,
} from "./ProjectBoxElements";

const ProjectBox = (props: { idOfBox: number }) => {
  const project = projectsData[props.idOfBox];
  return (
    <BoxWrapper>
      <PhotoContainer></PhotoContainer>
      <InformationContainer>
        <ProjectTitle>{project.name}</ProjectTitle>
      </InformationContainer>
    </BoxWrapper>
  );
};

export default ProjectBox;
