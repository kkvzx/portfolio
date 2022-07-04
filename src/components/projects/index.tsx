import React, { useState } from "react";
import { nanoid } from "nanoid";
import { projectsData } from "./data";
import {
  InfoSection,
  PortfolioText,
  ProjectInformation,
  ProjectPhoto,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectTitle,
  ReadMore,
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
      <ProjectPhoto src={singleObj.photos[0]}></ProjectPhoto>
      <InfoSection>
        <ProjectTitle>{singleObj.name}</ProjectTitle>
        <ProjectInformation>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          quaerat possimus quod laborum ratione, odit perspiciatis dolorum
          reiciendis fugiat sit aut aspernatur rerum nam voluptatem natus
          accusantium sed quasi animi! <ReadMore>...Read More</ReadMore>
        </ProjectInformation>
      </InfoSection>
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
