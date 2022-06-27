import React from "react";
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

const Projects = () => {
  const showProject = () => {
    console.log("Hello im kinda sad");
  };

  const htmlProjectsData = projectsData.map((singleObj) => (
    <SingleProject key={nanoid()} onClick={() => showProject()}>
      <ProjectPhoto src={singleObj.photoSrc} alt="" />
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
