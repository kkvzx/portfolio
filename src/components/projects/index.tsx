import React, { useState } from "react";
import { nanoid } from "nanoid";
import { projectsData } from "./data";
import {
  GithubLink,
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
import AnimatedTitle from "../AnimatedTitle";
import { ContactTitleContainer } from "../Contact/ContactElements";

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
        <ProjectInformation>{singleObj.smallDescription}</ProjectInformation>
        <ReadMore>Show More</ReadMore>
        <GithubLink />
      </InfoSection>
    </SingleProject>
  ));

  return (
    <ProjectsWrapper id="projects">
      <ContactTitleContainer>
        <AnimatedTitle
          text="My Portfolio"
          color="var(--additional-color)"
          size="var(--big-font-size)"
          sizesmall="var(--big-font-sizeMobile)"
          colorSwap={false}
        />
      </ContactTitleContainer>
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
