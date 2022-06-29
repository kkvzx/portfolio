import React, { useState } from "react";
import { nanoid } from "nanoid";
import { projectsData } from "./data";
import {
  PortfolioText,
  ProjectPhoto,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectTitle,
  SingleProject,
  Title,
} from "./ProjectsElements";
import ProjectBox from "../ProjectBox";

// require("../../img/projectsDataImg/tenzis/1.png")
type ProjectsProps = {
  projectBoxToggle: (id: number) => void;
};

const Projects = (props: ProjectsProps) => {
  const htmlProjectsData = projectsData.map((singleObj, index) => (
    <SingleProject key={nanoid()} onClick={() => props.projectBoxToggle(index)}>
      <ProjectPhoto src={singleObj.photos[0]} alt="" />
      <ProjectTitle>{singleObj.name}</ProjectTitle>
    </SingleProject>
  ));

  return (
    <ProjectsWrapper id="projects">
      <Title>My Portfolio</Title>
      <PortfolioText>
        A small gallery of recent project chosen by me. I've done them while
        improving my skills such as css layout, javascript, typescript and
        react. Click on them to read more about all difficulties in each
        project.
      </PortfolioText>
      <ProjectsContainer>{htmlProjectsData}</ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
